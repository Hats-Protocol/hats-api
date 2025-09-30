import {
  createPublicClient,
  webSocket,
  http,
  parseEventLogs,
  decodeEventLog,
} from "viem";
import {
  HATS_ABI,
  HATS_ADDRESS,
  CLAIMS_HATTER_EVENTS,
  HATS_EVENTS,
  CHAIN_ID_TO_SOCKET_URL,
  CHAIN_ID_TO_HTTP_URL,
  CHAIN_ID_TO_ENTITY_PREFIX,
  CHAIN_ID_TO_NETWORK_NAME,
  CHAIN_ID_TO_VIEM_CHAIN,
  CHAIN_ID_TO_MAIN_SUBGRAPH,
  TRANSACTION_PROCESSING_TIMEOUT,
  SUBGRAPH_SYNC_TIMEOUT,
  WEBSOCKET_RETRY_ATTEMPTS,
  WEBSOCKET_RETRY_DELAY,
} from "./constants";
import { RedisCacheClient } from "./redis";
import logger from "./log";
import {
  hatIdDecimalToHex,
  hatIdToTreeId,
  treeIdDecimalToHex,
} from "@hatsprotocol/sdk-v1-core";
import type {
  Log,
  PublicClient,
  RpcLog,
  Transaction,
  TransactionReceipt,
} from "viem";
import { parentHat } from "./utils";
import {
  ValidationError,
  TransactionNotFoundError,
  SubgraphSyncError,
  InvalidationError,
} from "./errors";
import { GraphQLClient, gql } from "graphql-request";
import { LRUCache } from "lru-cache";
import { retryAsync, CircuitBreaker, RetryOptions } from "./retry-utils";
import { BullMQTransactionProcessor, BullMQProcessorConfig, JobContext } from "./bullmq-transaction-processor";

enum TransactionCacheState {
  NOT_STARTED = 0,
  PROCESSING = 1,
  COMPLETED = 2,
  FAILED = 3,
  RETRYING = 4
}

interface CacheEntry {
  state: TransactionCacheState;
  timestamp: number;
  retryCount: number;
  lastError?: string;
}

export class CacheInvalidationManager {
  private cache: RedisCacheClient;
  private mainnetInvalidationClient: CacheInvalidationService;
  private polygonInvalidationClient: CacheInvalidationService;
  private gnosisInvalidationClient: CacheInvalidationService;
  private sepoliaInvalidationClient: CacheInvalidationService;
  private baseInvalidationClient: CacheInvalidationService;
  private celoInvalidationClient: CacheInvalidationService;
  private optimismInvalidationClient: CacheInvalidationService;
  private arbitrumInvalidationClient: CacheInvalidationService;
  private baseSepoliaInvalidationClient: CacheInvalidationService;

  constructor() {
    this.cache = new RedisCacheClient();
    this.mainnetInvalidationClient = new CacheInvalidationService(
      this.cache,
      "1"
    );
    this.polygonInvalidationClient = new CacheInvalidationService(
      this.cache,
      "137"
    );
    this.gnosisInvalidationClient = new CacheInvalidationService(
      this.cache,
      "100"
    );
    this.celoInvalidationClient = new CacheInvalidationService(
      this.cache,
      "42220"
    );
    this.baseInvalidationClient = new CacheInvalidationService(
      this.cache,
      "8453"
    );
    this.optimismInvalidationClient = new CacheInvalidationService(
      this.cache,
      "10"
    );
    this.arbitrumInvalidationClient = new CacheInvalidationService(
      this.cache,
      "42161"
    );
    this.sepoliaInvalidationClient = new CacheInvalidationService(
      this.cache,
      "11155111"
    );
    this.baseSepoliaInvalidationClient = new CacheInvalidationService(
      this.cache,
      "84532"
    );
  }

  startServices() {
    this.mainnetInvalidationClient.start();
    this.gnosisInvalidationClient.start();
    this.arbitrumInvalidationClient.start();
    this.optimismInvalidationClient.start();
    this.baseInvalidationClient.start();
    this.celoInvalidationClient.start();
    this.sepoliaInvalidationClient.start();
    this.polygonInvalidationClient.start();
    this.baseSepoliaInvalidationClient.start();
  }

  async processTransaction(
    txHash: `0x${string}`,
    networkId: string,
    force: boolean | undefined
  ) {
    switch (networkId) {
      case "1":
        return await this.mainnetInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`,
          force
        );
      case "137":
        return await this.polygonInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`,
          force
        );
      case "100":
        return await this.gnosisInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`,
          force
        );
      case "42220":
        return await this.celoInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`,
          force
        );
      case "8453":
        return await this.baseInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`,
          force
        );
      case "10":
        return await this.optimismInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`,
          force
        );
      case "42161":
        return await this.arbitrumInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`,
          force
        );
      case "11155111":
        return await this.sepoliaInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`,
          force
        );
      case "84532":
        return await this.baseSepoliaInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`,
          force
        );
      default:
        logger.info(`network ${networkId} not supported`);
        throw new Error(`Network ${networkId} not supported`);
    }
  }

  async shutdown(): Promise<void> {
    logger.log({
      level: 'info',
      message: 'Shutting down CacheInvalidationManager',
    });

    const shutdownPromises = [
      this.mainnetInvalidationClient.shutdown(),
      this.polygonInvalidationClient.shutdown(),
      this.gnosisInvalidationClient.shutdown(),
      this.sepoliaInvalidationClient.shutdown(),
      this.baseInvalidationClient.shutdown(),
      this.celoInvalidationClient.shutdown(),
      this.optimismInvalidationClient.shutdown(),
      this.arbitrumInvalidationClient.shutdown(),
      this.baseSepoliaInvalidationClient.shutdown(),
    ];

    try {
      await Promise.all(shutdownPromises);
      logger.log({
        level: 'info',
        message: 'CacheInvalidationManager shutdown completed successfully',
      });
    } catch (error) {
      logger.log({
        level: 'error',
        message: 'Error during CacheInvalidationManager shutdown',
        error: error,
      });
      throw error;
    }
  }

  // Get specific service for monitoring
  getServiceForChain(chainId: string): CacheInvalidationService | undefined {
    switch (chainId) {
      case "1": return this.mainnetInvalidationClient;
      case "137": return this.polygonInvalidationClient;
      case "100": return this.gnosisInvalidationClient;
      case "42220": return this.celoInvalidationClient;
      case "8453": return this.baseInvalidationClient;
      case "10": return this.optimismInvalidationClient;
      case "42161": return this.arbitrumInvalidationClient;
      case "11155111": return this.sepoliaInvalidationClient;
      case "84532": return this.baseSepoliaInvalidationClient;
      default: return undefined;
    }
  }

  // Get all services for monitoring dashboard
  getAllServices(): CacheInvalidationService[] {
    return [
      this.mainnetInvalidationClient,
      this.polygonInvalidationClient,
      this.gnosisInvalidationClient,
      this.sepoliaInvalidationClient,
      this.baseInvalidationClient,
      this.celoInvalidationClient,
      this.optimismInvalidationClient,
      this.arbitrumInvalidationClient,
      this.baseSepoliaInvalidationClient,
    ];
  }
}

export class CacheInvalidationService {
  private cache: RedisCacheClient;
  private inMemCache: LRUCache<string, CacheEntry>;
  private publicSocketClient: PublicClient;
  private publicHttpClient: PublicClient;
  private graphqlClient: GraphQLClient;
  private chainId: string;
  private key: number;
  private socketCircuitBreaker: CircuitBreaker;
  private httpCircuitBreaker: CircuitBreaker;
  private subgraphCircuitBreaker: CircuitBreaker;
  private transactionProcessor: BullMQTransactionProcessor;

  constructor(cacheClient: RedisCacheClient, chainId: string) {
    this.cache = cacheClient;
    this.inMemCache = new LRUCache<string, CacheEntry>({ max: 100 });
    this.chainId = chainId;
    this.key = 0;
    this.publicSocketClient = createPublicClient({
      chain: CHAIN_ID_TO_VIEM_CHAIN[chainId],
      transport: webSocket(CHAIN_ID_TO_SOCKET_URL[chainId], {
        key: this.key.toString(),
      }),
    });
    this.publicHttpClient = createPublicClient({
      chain: CHAIN_ID_TO_VIEM_CHAIN[chainId],
      transport: http(CHAIN_ID_TO_HTTP_URL[chainId]),
    });
    this.graphqlClient = new GraphQLClient(CHAIN_ID_TO_MAIN_SUBGRAPH[chainId], {
      headers: {
        Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`,
      },
    });

    // Initialize circuit breakers
    this.socketCircuitBreaker = new CircuitBreaker(5, 60000, `Socket-${chainId}`);
    this.httpCircuitBreaker = new CircuitBreaker(5, 60000, `HTTP-${chainId}`);
    this.subgraphCircuitBreaker = new CircuitBreaker(5, 60000, `Subgraph-${chainId}`);

    // Initialize BullMQ transaction processor
    const processorConfig: BullMQProcessorConfig = {
      concurrency: 3,        // Max 3 concurrent transactions per chain
      maxRateLimit: 10,      // Max 10 transactions per second
      rateLimitDuration: 1000,
      maxAttempts: WEBSOCKET_RETRY_ATTEMPTS,
      backoffDelay: WEBSOCKET_RETRY_DELAY,
    };

    this.transactionProcessor = new BullMQTransactionProcessor(
      chainId,
      cacheClient.getRedisClient(),
      (txHash: `0x${string}`, chainId: string, force?: boolean, jobContext?: JobContext) =>
        this.processTransactionInternal(txHash, force, jobContext),
      processorConfig
    );
  }

  async start() {
    logger.log({
      level: "info",
      message: `connecting network ${this.chainId}`,
    });

    let socketRpcClient: any;
    try {
      socketRpcClient = await retryAsync(
        async () => {
          const client = await this.publicSocketClient.transport.getRpcClient();
          if (!client || !client.socket) {
            throw new Error("Invalid socket client received");
          }
          return client;
        },
        {
          maxAttempts: WEBSOCKET_RETRY_ATTEMPTS,
          baseDelay: WEBSOCKET_RETRY_DELAY,
          maxDelay: 30000,
        },
        `Network ${this.chainId} socket connection`
      );
    } catch (error) {
      logger.log({
        level: "error",
        message: `fetching rpc client in network ${this.chainId} failed after retries`,
        error: error,
      });
      // Continue without socket client - will use HTTP fallback
      socketRpcClient = null;
    }

    // Set up event watchers only if socket client is available
    let unwatchClaimsHatter: (() => void) | undefined;
    let unwatchHats: (() => void) | undefined;

    if (socketRpcClient && socketRpcClient.socket) {
      try {
        // watch Claims Hatters events
        unwatchClaimsHatter = this.publicSocketClient.watchEvent({
          events: CLAIMS_HATTER_EVENTS,
          onLogs: (logs: any) => {
            for (let i = 0; i < logs.length; i++) {
              const log = logs[i];
              const logTx: `0x${string}` = log.transactionHash;
              try {
                this.processTransaction(logTx.toLowerCase() as `0x${string}`);
              } catch (error) {
                continue;
              }
            }
          },
        });

        // watch Hats events
        unwatchHats = this.publicSocketClient.watchEvent({
          address: HATS_ADDRESS,
          events: HATS_EVENTS,
          onLogs: (logs: any) => {
            for (let i = 0; i < logs.length; i++) {
              const log = logs[i];
              const logTx: `0x${string}` = log.transactionHash;
              try {
                this.processTransaction(logTx.toLowerCase() as `0x${string}`);
              } catch (error) {
                continue;
              }
            }
          },
        });

        logger.log({
          level: "info",
          message: `Event watchers set up for network ${this.chainId}`,
        });
      } catch (error) {
        logger.log({
          level: "error",
          message: `Failed to set up event watchers for network ${this.chainId}`,
          error: error,
        });
      }
    } else {
      logger.log({
        level: "warn",
        message: `No socket connection available for network ${this.chainId}, event watching disabled`,
      });
    }

    const heartbeat = () => {
      logger.log({ level: "info", message: `ping network ${this.chainId}` });
      // Use HTTP client for heartbeat to avoid socket issues
      this.publicHttpClient
        .getBlockNumber()
        .then((_: any) => {
          logger.log({
            level: "info",
            message: `pong network ${this.chainId}`,
          });
        })
        .catch((err: any) =>
          logger.log({
            level: "error",
            message: `error in chain ${this.chainId}`,
            error: err,
          })
        );
    };

    const intervalId = setInterval(heartbeat, 5 * 60 * 1000);

    const onError = (ev: any) => {
      logger.log({
        level: "error",
        message: `error in chain ${this.chainId}`,
        error: ev,
      });
    };
    const onClose = (ev: any) => {
      try {
        logger.log({
          level: "info",
          message: `Websocket connection closed in network ${this.chainId}`,
          code: ev.code,
          reason: ev.reason,
        });
        clearInterval(intervalId);

        // Only clean up if socket client exists
        if (socketRpcClient && socketRpcClient.socket) {
          socketRpcClient.socket.removeEventListener("error", onError);
          socketRpcClient.socket.removeEventListener("close", onClose);
        }

        // Clean up event watchers
        if (unwatchClaimsHatter) unwatchClaimsHatter();
        if (unwatchHats) unwatchHats();

        // Close socket client if it exists
        if (socketRpcClient) {
          socketRpcClient.close();
        }

        // NOTE: IMPORTANT: invalidate viem's socketClientCache! When close
        // happens on socket level, the same socketClient with the closed websocket will be
        // re-used from cache leading to 'Socket is closed.' error.
        this.key += 1;
        this.publicSocketClient = createPublicClient({
          chain: CHAIN_ID_TO_VIEM_CHAIN[this.chainId],
          transport: webSocket(CHAIN_ID_TO_SOCKET_URL[this.chainId], {
            key: this.key.toString(),
          }),
        });

        // Restart with retry logic
        setTimeout(() => {
          this.start();
        }, WEBSOCKET_RETRY_DELAY);
      } catch (error) {
        logger.log({
          level: "error",
          message: `error in onClose handler in network ${this.chainId}`,
          error: error,
        });
      }
    };

    const setupEventListeners = () => {
      if (socketRpcClient && socketRpcClient.socket) {
        socketRpcClient.socket.addEventListener("error", onError);
        socketRpcClient.socket.addEventListener("close", onClose);
      }
    };

    setupEventListeners();
    heartbeat();
  }

  private getCacheEntry(txHash: string): CacheEntry | undefined {
    return this.inMemCache.get(txHash);
  }

  private setCacheEntry(txHash: string, state: TransactionCacheState, error?: string): void {
    const existing = this.inMemCache.get(txHash);
    const entry: CacheEntry = {
      state,
      timestamp: Date.now(),
      retryCount: existing?.retryCount || 0,
      lastError: error,
    };

    if (state === TransactionCacheState.RETRYING) {
      entry.retryCount = (existing?.retryCount || 0) + 1;
    } else if (state === TransactionCacheState.NOT_STARTED || state === TransactionCacheState.PROCESSING) {
      entry.retryCount = existing?.retryCount || 0;
    }

    this.inMemCache.set(txHash, entry);

    logger.log({
      level: "debug",
      message: `Cache state updated for ${this.chainId}-${txHash}: ${TransactionCacheState[state]}`,
      retryCount: entry.retryCount,
    });
  }

  private isTransactionStale(entry: CacheEntry): boolean {
    const age = Date.now() - entry.timestamp;
    // Consider processing transactions stale after 2x timeout
    if (entry.state === TransactionCacheState.PROCESSING && age > TRANSACTION_PROCESSING_TIMEOUT * 2) {
      return true;
    }
    // Consider failed/retrying transactions stale after 10 minutes
    if ((entry.state === TransactionCacheState.FAILED || entry.state === TransactionCacheState.RETRYING) && age > 10 * 60 * 1000) {
      return true;
    }
    return false;
  }

  async processTransaction(txHash: `0x${string}`, force?: boolean) {
    // Check if already processing/completed with improved logic
    const entry = this.getCacheEntry(txHash);

    if (entry && !force) {
      if (entry.state === TransactionCacheState.COMPLETED) {
        logger.log({
          level: "info",
          message: `${this.chainId}-${txHash}: already completed`,
          networkId: this.chainId,
          txHash: txHash,
        });
        // Don't return early - let BullMQ handle the decision
      }

      if (entry.state === TransactionCacheState.PROCESSING && !this.isTransactionStale(entry)) {
        logger.log({
          level: "info",
          message: `${this.chainId}-${txHash}: already processing`,
          networkId: this.chainId,
          txHash: txHash,
        });
        // Don't return early - let BullMQ handle the decision
      }

      if (this.isTransactionStale(entry)) {
        logger.log({
          level: "warn",
          message: `${this.chainId}-${txHash}: stale cache entry, resetting`,
          networkId: this.chainId,
          txHash: txHash,
          cacheAge: Date.now() - entry.timestamp,
        });
        this.setCacheEntry(txHash, TransactionCacheState.NOT_STARTED);
      }
    }

    // Add to BullMQ queue and return the result
    const priority = force ? 5 : 1;
    try {
      const result = await this.transactionProcessor.addTransaction(txHash, this.chainId, force || false, priority);
      return result;
    } catch (error) {
      logger.log({
        level: 'error',
        message: `Failed to queue transaction ${this.chainId}-${txHash}`,
        networkId: this.chainId,
        txHash: txHash,
        error: error,
      });
      throw error;
    }
  }

  private async processTransactionInternal(txHash: `0x${string}`, force?: boolean, jobContext?: JobContext) {
    logger.log({
      level: "info",
      message: `Start processing transaction internally`,
      networkId: this.chainId,
      txHash: txHash,
      isForce: force ?? false,
    });

    // Log to job if available
    if (jobContext?.job) {
      await jobContext.job.log(`Start processing transaction internally`);
    }

    // Set processing state
    this.setCacheEntry(txHash, TransactionCacheState.PROCESSING);

    let transactionReceipt: TransactionReceipt;

    // First, quickly check if transaction exists at all
    try {
      const tx = await this.publicHttpClient.getTransaction({ hash: txHash });
      if (!tx) {
        logger.log({
          level: "error",
          message: `Transaction \`${txHash}\` not found on blockchain`,
          networkId: this.chainId,
          txHash: txHash,
        });
        this.setCacheEntry(txHash, TransactionCacheState.FAILED, "Transaction not found");
        throw new TransactionNotFoundError(
          `Transaction ${txHash} not found on chain ${this.chainId}`
        );
      }
    } catch (err) {
      if (err instanceof TransactionNotFoundError) {
        throw err; // Re-throw our custom error
      }

      logger.log({
        level: "warn",
        message: `Error checking transaction \`${txHash}\` existence, proceeding anyway`,
        networkId: this.chainId,
        txHash: txHash,
        error: err,
      });
    }

    // fetch transaction receipt with retry logic
    try {
      transactionReceipt = await this.httpCircuitBreaker.execute(async () => {
        return await retryAsync(
          async () => {
            const receipt = await this.publicHttpClient.waitForTransactionReceipt({
              hash: txHash,
              timeout: Math.min(TRANSACTION_PROCESSING_TIMEOUT, 30000), // Cap at 30 seconds
            });

            if (!receipt) {
              throw new Error("Transaction receipt is null");
            }

            return receipt;
          },
          {
            maxAttempts: 2, // Reduce from 3 to 2 attempts
            baseDelay: 1000, // Reduce from 2000 to 1000ms
            maxDelay: 5000,  // Reduce from 10000 to 5000ms
          },
          `${this.chainId}-${txHash}: fetching transaction receipt`
        );
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);

      // Check if this is a timeout error for a potentially non-existent transaction
      const isTimeoutError = errorMessage.includes('Timed out') || errorMessage.includes('timeout');

      logger.log({
        level: "error",
        message: `Error fetching transaction \`${txHash}\` after retries`,
        networkId: this.chainId,
        txHash: txHash,
        error: err,
      });

      this.setCacheEntry(txHash, TransactionCacheState.FAILED, errorMessage);

      if (isTimeoutError) {
        throw new TransactionNotFoundError(
          `Timeout waiting for transaction ${txHash} on chain ${this.chainId} - transaction may not exist or is taking too long to confirm`
        );
      } else {
        throw new TransactionNotFoundError(
          `Error: failed fetching transaction with ID ${txHash} from chain ${this.chainId}`
        );
      }
    }

    // Add BullMQ log for transaction receipt obtained
    if (jobContext) {
      logger.log({
        level: "info",
        message: `BullMQ: Transaction receipt obtained for block ${transactionReceipt.blockNumber}`,
        jobId: jobContext.jobId,
        chainId: this.chainId,
        txHash: txHash,
        blockNumber: transactionReceipt.blockNumber.toString(),
        attempt: jobContext.attempt,
      });

      // Log to job dashboard
      if (jobContext.job) {
        await jobContext.job.log(`Transaction receipt obtained for block ${transactionReceipt.blockNumber}`);
      }
    }

    // wait for the subgraph to sync before invalidating
    try {
      const subgraphSynced = await this.waitForBlockMainSubgraph(
        transactionReceipt.blockNumber
      );
      if (!subgraphSynced) {
        logger.log({
          level: "error",
          message: `Subgraph sync timeout for transaction \`${txHash}\` at block ${transactionReceipt.blockNumber.toString()}`,
          networkId: this.chainId,
          txHash: txHash,
        });
        this.setCacheEntry(txHash, TransactionCacheState.RETRYING, 'Subgraph sync timeout');
        throw new SubgraphSyncError(
          `Error: failed waiting for block ${transactionReceipt.blockNumber.toString()} on chain ${this.chainId}`
        );
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      logger.log({
        level: "error",
        message: `Unexpected error while waiting for block ${transactionReceipt.blockNumber.toString()} for transaction \`${txHash}\``,
        networkId: this.chainId,
        txHash: txHash,
        error: error,
      });
      this.setCacheEntry(txHash, TransactionCacheState.FAILED, `Subgraph sync error: ${errorMessage}`);

      throw new SubgraphSyncError(
        `Error: failed waiting for block number ${transactionReceipt.blockNumber.toString()} in chain ${this.chainId
        }`
      );
    }

    const hatsLogs = transactionReceipt.logs.filter(
      (log: any) => log.address === HATS_ADDRESS.toLowerCase()
    );

    let claimsHatterInstances: `0x${string}`[] = [];
    for (
      let eventIndex = 0;
      eventIndex < transactionReceipt.logs.length;
      eventIndex++
    ) {
      try {
        const event = decodeEventLog({
          abi: CLAIMS_HATTER_EVENTS,
          data: transactionReceipt.logs[eventIndex].data,
          topics: transactionReceipt.logs[eventIndex].topics,
        });

        claimsHatterInstances.push(transactionReceipt.logs[eventIndex].address);
      } catch (err) {
        // continue
      }
    }

    try {
      await this.handleHatsEvents(
        txHash,
        hatsLogs,
        CHAIN_ID_TO_NETWORK_NAME[this.chainId],
        CHAIN_ID_TO_ENTITY_PREFIX[this.chainId],
        jobContext
      );
      await this.handleClaimsHatterEvents(
        txHash,
        claimsHatterInstances,
        CHAIN_ID_TO_ENTITY_PREFIX[this.chainId],
        jobContext
      );
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      logger.log({
        level: "error",
        message: `Error processing hats events for transaction \`${txHash}\``,
        networkId: this.chainId,
        txHash: txHash,
        error: err,
      });
      this.setCacheEntry(txHash, TransactionCacheState.FAILED, `Event processing error: ${errorMessage}`);

      throw new InvalidationError(
        `Error: failed processing events for transaction ${txHash} in chain ${this.chainId}`
      );
    }

    // Add BullMQ completion summary
    if (jobContext) {
      logger.log({
        level: "info",
        message: `BullMQ: Transaction processing completed successfully`,
        jobId: jobContext.jobId,
        chainId: this.chainId,
        txHash: txHash,
        blockNumber: transactionReceipt.blockNumber.toString(),
        attempt: jobContext.attempt,
        maxAttempts: jobContext.maxAttempts,
      });

      // Log to job dashboard
      if (jobContext.job) {
        await jobContext.job.log(`Transaction processing completed successfully`);
      }
    }

    // Successfully completed
    this.setCacheEntry(txHash, TransactionCacheState.COMPLETED);
    logger.log({
      level: "info",
      message: `Transaction \`${txHash}\` processing completed successfully`,
      networkId: this.chainId,
      txHash: txHash,
    });
  }

  async handleHatsEvents(
    txHash: string,
    logs: (Log | RpcLog)[],
    networkName: string,
    entityPrefix: string,
    jobContext?: JobContext
  ) {
    const parsedLogs = parseEventLogs({
      abi: HATS_ABI,
      logs,
    });

    const processedHatsOfTrees: string[] = [];
    const processedEntities: string[] = [];
    const processedWearers: string[] = [];
    const processedTrees: string[] = [];
    const processedHats: string[] = [];

    // Add BullMQ log for events found
    if (jobContext && parsedLogs.length > 0) {
      logger.log({
        level: "info",
        message: `BullMQ: Found ${parsedLogs.length} Hat events to process`,
        jobId: jobContext.jobId,
        chainId: this.chainId,
        txHash: txHash,
        eventCount: parsedLogs.length,
        attempt: jobContext.attempt,
      });

      // Log to job dashboard
      if (jobContext.job) {
        await jobContext.job.log(`Found ${parsedLogs.length} Hat events to process`);
      }
    }

    for (let i = 0; i < parsedLogs.length; i++) {
      const log = parsedLogs[i];
      logger.log({
        level: "info",
        message: `Processing event ${log.eventName}`,
        txHash: log.transactionHash,
        networkId: this.chainId,
        logIndex: log.logIndex,
        index: i,
      });

      // Add BullMQ log for each event
      if (jobContext) {
        logger.log({
          level: "info",
          message: `BullMQ: Processing event ${log.eventName} (${i + 1}/${parsedLogs.length})`,
          jobId: jobContext.jobId,
          chainId: this.chainId,
          txHash: txHash,
          eventName: log.eventName,
          logIndex: log.logIndex,
          attempt: jobContext.attempt,
        });

        // Log to job dashboard
        if (jobContext.job) {
          await jobContext.job.log(`Processing event ${log.eventName} (${i + 1}/${parsedLogs.length})`);
        }
      }

      if (
        log.eventName === "HatDetailsChanged" ||
        log.eventName === "HatStatusChanged" ||
        log.eventName === "HatEligibilityChanged" ||
        log.eventName === "HatToggleChanged" ||
        log.eventName === "HatMutabilityChanged" ||
        log.eventName === "HatMaxSupplyChanged" ||
        log.eventName === "HatImageURIChanged"
      ) {
        const hatId = log.args.hatId;
        const treeId = treeIdDecimalToHex(hatIdToTreeId(hatId));
        if (!processedHatsOfTrees.includes(treeId)) {
          processedHatsOfTrees.push(treeId);
          await this.cache.invalidateHatsInTree(
            this.chainId,
            txHash,
            entityPrefix,
            treeId,
            jobContext
          );
        }
      } else if (log.eventName === "HatCreated") {
        const hatId = log.args.id;
        const treeIdNum = hatIdToTreeId(hatId);
        const treeId = treeIdDecimalToHex(treeIdNum);
        const adminHat = parentHat(hatIdDecimalToHex(hatId));
        const treeKey = `${entityPrefix}_Tree.${treeId}`;
        const prevTreeKey = treeIdNum > 0
          ? `${entityPrefix}_Tree.${treeIdDecimalToHex(treeIdNum - 1)}`
          : null;

        if (!processedTrees.includes(treeKey)) {
          processedTrees.push(treeKey);
          await this.cache.invalidateEntity(
            this.chainId,
            txHash,
            `${entityPrefix}_Tree`,
            treeId,
            jobContext
          );
        }
        // if the hat is a top-hat, invalidate also the previous tree for tree pagination queries
        if (adminHat === null && prevTreeKey && !processedTrees.includes(prevTreeKey)) {
          processedTrees.push(prevTreeKey);
          if (treeIdNum > 0) {
            await this.cache.invalidateEntity(
              this.chainId,
              txHash,
              `${entityPrefix}_Tree`,
              treeIdDecimalToHex(treeIdNum - 1),
              jobContext
            );
          }
        }
        // invalidate the admin hat if it exists
        if (adminHat !== null && !processedHatsOfTrees.includes(treeId)) {
          processedHatsOfTrees.push(treeId);
          await this.cache.invalidateHatsInTree(
            this.chainId,
            txHash,
            entityPrefix,
            treeId,
            jobContext
          );
        }
      } else if (
        log.eventName === "TopHatLinkRequested" ||
        log.eventName === "TopHatLinked"
      ) {
        const treeId = log.args.domain;
        const adminHatId = log.args.newAdmin;
        const treeKey = `${entityPrefix}_Tree.${treeIdDecimalToHex(treeId)}`;
        const hatKey = `${entityPrefix}_Hat.${hatIdDecimalToHex(adminHatId)}`;
        if (!processedTrees.includes(treeKey)) {
          processedTrees.push(treeKey);
          await this.cache.invalidateEntity(
            this.chainId,
            txHash,
            `${entityPrefix}_Tree`,
            treeIdDecimalToHex(treeId),
            jobContext
          );
        }
        if (!processedHats.includes(hatKey)) {
          processedHats.push(hatKey);
          await this.cache.invalidateEntity(
            this.chainId,
            txHash,
            `${entityPrefix}_Hat`,
            hatIdDecimalToHex(adminHatId),
            jobContext
          );
        }
      } else if (log.eventName === "TransferSingle") {
        const from = log.args.from;
        const to = log.args.to;
        const hatId = log.args.id;
        const treeId = treeIdDecimalToHex(hatIdToTreeId(hatId));

        const fromKey = `${entityPrefix}_Wearer.${(
          from as string
        ).toLowerCase()}`;
        const toKey = `${entityPrefix}_Wearer.${(to as string).toLowerCase()}`;
        const nonExistentWearerKey = `${entityPrefix}_Wearer.undefined`;

        if (!processedHatsOfTrees.includes(treeId)) {
          processedHatsOfTrees.push(treeId);
          await this.cache.invalidateHatsInTree(
            this.chainId,
            txHash,
            entityPrefix,
            treeId,
            jobContext
          );
        }
        if (
          to !== "0x0000000000000000000000000000000000000000" &&
          !processedWearers.includes(toKey)
        ) {
          processedWearers.push(toKey);
          await this.cache.invalidateEntity(
            this.chainId,
            txHash,
            `${entityPrefix}_Wearer`,
            (to as string).toLowerCase(),
            jobContext
          );
        }
        if (
          from !== "0x0000000000000000000000000000000000000000" &&
          !processedWearers.includes(fromKey)
        ) {
          processedWearers.push(fromKey);
          await this.cache.invalidateEntity(
            this.chainId,
            txHash,
            `${entityPrefix}_Wearer`,
            (from as string).toLowerCase(),
            jobContext
          );
        }
        if (!processedWearers.includes(nonExistentWearerKey)) {
          processedWearers.push(nonExistentWearerKey);
          await this.cache.invalidateEntity(
            this.chainId,
            txHash,
            `${entityPrefix}_Wearer`,
            "undefined",
            jobContext
          );
        }
      }
    }

    // Add BullMQ summary for hat events processing
    if (jobContext) {
      logger.log({
        level: "info",
        message: `BullMQ: Hat events processing completed`,
        jobId: jobContext.jobId,
        chainId: this.chainId,
        txHash: txHash,
        eventsProcessed: parsedLogs.length,
        treeCollectionsInvalidated: processedHatsOfTrees.length,
        wearersInvalidated: processedWearers.length,
        treeDetailsInvalidated: processedTrees.length,
        hatDetailsInvalidated: processedHats.length,
        otherEntitiesInvalidated: processedEntities.length,
        attempt: jobContext.attempt,
      });

      // Log to job dashboard
      if (jobContext.job) {
        const summaryItems = [`${parsedLogs.length} events processed`];
        if (processedHatsOfTrees.length > 0) {
          summaryItems.push(`${processedHatsOfTrees.length} tree collections invalidated`);
        }
        if (processedWearers.length > 0) {
          summaryItems.push(`${processedWearers.length} wearers invalidated`);
        }
        if (processedTrees.length > 0) {
          summaryItems.push(`${processedTrees.length} tree details invalidated`);
        }
        if (processedHats.length > 0) {
          summaryItems.push(`${processedHats.length} hat details invalidated`);
        }
        if (processedEntities.length > 0) {
          summaryItems.push(`${processedEntities.length} other entities invalidated`);
        }
        await jobContext.job.log(`Hat events processing completed:\n• ${summaryItems.join('\n• ')}`);
      }
    }
  }

  async handleClaimsHatterEvents(
    txHash: string,
    claimsHatters: `0x${string}`[],
    entityPrefix: string,
    jobContext?: JobContext
  ) {
    await Promise.all(
      claimsHatters.map((hatter) => {
        logger.log({
          level: "info",
          message: `Processing claims hatter event of address \`${hatter}\``,
          txHash: txHash,
          networkId: this.chainId,
          entity: `${entityPrefix}_ClaimsHatter.${hatter.toLowerCase()}`,
        });
        return this.cache.invalidateEntity(
          this.chainId,
          txHash,
          `${entityPrefix}_ClaimsHatter`,
          hatter.toLowerCase(),
          jobContext
        );
      })
    );
  }

  async waitForBlockMainSubgraph(blockNumber: bigint): Promise<boolean> {
    return await this.subgraphCircuitBreaker.execute(async () => {
      return await retryAsync(
        async () => {
          const delay = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms));

          const timeoutPromise = (timeout: number) =>
            new Promise((_, reject) =>
              setTimeout(
                () =>
                  reject(new Error("Timeout waiting for block number to be reached")),
                timeout
              )
            );

          // poll for block number with timeout and exponential backoff
          const pollForBlockNumber = async () => {
            let attempts = 0;
            while (true) {
              try {
                const latestBlockNumber = await this.getLatestBlockMainSubgraph();
                if (latestBlockNumber >= blockNumber) {
                  return true;
                }
                // Exponential backoff: start with 1s, increase to max 5s
                const backoffDelay = Math.min(1000 * Math.pow(1.5, attempts), 5000);
                await delay(backoffDelay);
                attempts++;
              } catch (subgraphError) {
                logger.log({
                  level: "warn",
                  message: `Error querying subgraph for block ${blockNumber.toString()}, attempt ${attempts + 1}`,
                  error: subgraphError,
                  networkId: this.chainId,
                });
                throw subgraphError; // Let retry logic handle this
              }
            }
          };

          try {
            await Promise.race([
              pollForBlockNumber(),
              timeoutPromise(SUBGRAPH_SYNC_TIMEOUT),
            ]);
            return true;
          } catch (error) {
            logger.log({
              level: "warn",
              message: `Failed to reach desired block number ${blockNumber.toString()} within timeout`,
              networkId: this.chainId,
              error: error,
            });
            return false;
          }
        },
        {
          maxAttempts: 2, // Try twice for subgraph sync
          baseDelay: 3000,
          maxDelay: 10000,
        },
        `Subgraph sync for block ${blockNumber.toString()} on chain ${this.chainId}`
      );
    });
  }

  async getLatestBlockMainSubgraph(): Promise<bigint> {
    const query = gql`
      {
        _meta {
          block {
            number
          }
        }
      }
    `;

    return await retryAsync(
      async () => {
        const data: any = await this.graphqlClient.request(query);
        if (!data?._meta?.block?.number) {
          throw new Error("Invalid subgraph response format");
        }
        return BigInt(data._meta.block.number);
      },
      {
        maxAttempts: 3,
        baseDelay: 1000,
        maxDelay: 5000,
      },
      `Querying latest block from subgraph on chain ${this.chainId}`
    );
  }

  // BullMQ queue management methods
  async getQueueStatus(): Promise<{
    waiting: number;
    active: number;
    completed: number;
    failed: number;
    delayed: number;
    paused: number;
  }> {
    return await this.transactionProcessor.getQueueStatus();
  }

  async isTransactionQueued(txHash: string): Promise<boolean> {
    return await this.transactionProcessor.isTransactionQueued(txHash, this.chainId);
  }

  async isTransactionProcessing(txHash: string): Promise<boolean> {
    return await this.transactionProcessor.isTransactionProcessing(txHash, this.chainId);
  }

  async pauseTransactionProcessing(): Promise<void> {
    await this.transactionProcessor.pauseQueue();
  }

  async resumeTransactionProcessing(): Promise<void> {
    await this.transactionProcessor.resumeQueue();
  }

  async clearTransactionQueue(): Promise<void> {
    await this.transactionProcessor.clearQueue();
  }

  // Graceful shutdown
  async shutdown(): Promise<void> {
    logger.log({
      level: 'info',
      message: `Shutting down CacheInvalidationService for chain ${this.chainId}`,
      networkId: this.chainId,
    });

    try {
      await this.transactionProcessor.shutdown();
      logger.log({
        level: 'info',
        message: `CacheInvalidationService shutdown completed for chain ${this.chainId}`,
        networkId: this.chainId,
      });
    } catch (error) {
      logger.log({
        level: 'error',
        message: `Error during CacheInvalidationService shutdown for chain ${this.chainId}`,
        networkId: this.chainId,
        error: error,
      });
      throw error;
    }
  }

  // Get BullMQ processor for monitoring dashboard
  getTransactionProcessor(): BullMQTransactionProcessor {
    return this.transactionProcessor;
  }
}
