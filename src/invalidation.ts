import {
  createPublicClient,
  webSocket,
  http,
  parseEventLogs,
  verifyMessage,
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
  }

  async processTransaction(txHash: `0x${string}`, networkId: string) {
    switch (networkId) {
      case "1":
        await this.mainnetInvalidationClient.processTransaction(txHash);
        break;
      case "137":
        await this.polygonInvalidationClient.processTransaction(txHash);
        break;
      case "100":
        await this.gnosisInvalidationClient.processTransaction(txHash);
        break;
      case "42220":
        await this.celoInvalidationClient.processTransaction(txHash);
        break;
      case "8453":
        await this.baseInvalidationClient.processTransaction(txHash);
        break;
      case "10":
        await this.optimismInvalidationClient.processTransaction(txHash);
        break;
      case "42161":
        await this.arbitrumInvalidationClient.processTransaction(txHash);
        break;
      case "11155111":
        await this.sepoliaInvalidationClient.processTransaction(txHash);
        break;
      default:
        logger.info(`network ${networkId} not supported`);
    }
  }
}

export class CacheInvalidationService {
  private cache: RedisCacheClient;
  private publicSocketClient: PublicClient;
  private publicHttpClient: PublicClient;
  private graphqlClient: GraphQLClient;
  private chainId: string;
  private key: number;

  constructor(cacheClient: RedisCacheClient, chainId: string) {
    this.cache = cacheClient;
    this.chainId = chainId;
    this.key = 0;
    this.publicSocketClient = createPublicClient({
      chain: CHAIN_ID_TO_VIEM_CHAIN[this.chainId],
      transport: webSocket(CHAIN_ID_TO_SOCKET_URL[chainId], {
        key: this.key.toString(),
      }),
    });
    this.publicHttpClient = createPublicClient({
      chain: CHAIN_ID_TO_VIEM_CHAIN[this.chainId],
      transport: http(CHAIN_ID_TO_HTTP_URL[chainId]),
    });
    this.graphqlClient = new GraphQLClient(CHAIN_ID_TO_MAIN_SUBGRAPH[chainId]);
  }

  async start() {
    logger.log({
      level: "info",
      message: `connecting network ${this.chainId}`,
    });

    let socketRpcClient: any;
    try {
      socketRpcClient = await this.publicSocketClient.transport.getRpcClient();
    } catch (error) {
      logger.log({
        level: "error",
        message: `fetching rpc client in network ${this.chainId} failed`,
        error: error,
      });
    }

    // watch Calims Hatters events
    const unwatchClaimsHatter = this.publicSocketClient.watchEvent({
      events: CLAIMS_HATTER_EVENTS,
      onLogs: (logs) =>
        this.handleClaimsHatterEvents(
          logs.map((log) => log.address),
          CHAIN_ID_TO_ENTITY_PREFIX[this.chainId]
        ),
    });

    // watch Hats events
    const unwatchHats = this.publicSocketClient.watchEvent({
      address: HATS_ADDRESS,
      events: HATS_EVENTS,
      onLogs: (logs) => {
        for (let i = 0; i < logs.length; i++) {
          const log = logs[i];
          const logTx = log.transactionHash;
          this.processTransaction(logTx);
        }
      },
    });

    const heartbeat = () => {
      logger.log({ level: "info", message: `ping network ${this.chainId}` });
      this.publicSocketClient
        .getBlockNumber()
        .then((_) => {
          logger.log({
            level: "info",
            message: `pong network ${this.chainId}`,
          });
        })
        .catch((err) =>
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
        socketRpcClient.socket.removeEventListener("error", onError);
        socketRpcClient.socket.removeEventListener("close", onClose);
        unwatchClaimsHatter();
        unwatchHats();
        // NOTE: IMPORTANT: invalidate viem's socketClientCache! When close
        // happens on socket level, the same socketClient with the closed websocket will be
        // re-used from cache leading to 'Socket is closed.' error.
        socketRpcClient.close();
        this.key += 1;
        this.publicSocketClient = createPublicClient({
          chain: CHAIN_ID_TO_VIEM_CHAIN[this.chainId],
          transport: webSocket(CHAIN_ID_TO_SOCKET_URL[this.chainId], {
            key: this.key.toString(),
          }),
        });
        this.start();
      } catch (error) {
        logger.log({
          level: "error",
          message: `error in onClose handler in network ${this.chainId}`,
          error: error,
        });
      }
    };

    const setupEventListeners = () => {
      socketRpcClient.socket.addEventListener("error", onError);
      socketRpcClient.socket.addEventListener("close", onClose);
    };

    setupEventListeners();
    heartbeat();
  }

  async processTransaction(txHash: `0x${string}`) {
    let transaction: TransactionReceipt;

    // fetch transaction receipt
    try {
      transaction = await this.publicHttpClient.waitForTransactionReceipt({
        hash: txHash,
        timeout: 3000,
      });

      if (!transaction) {
        return;
      }
    } catch (err) {
      logger.log({
        level: "error",
        message: `error fetching transaction ${txHash} in chain ${this.chainId}`,
        error: err,
      });
      throw new TransactionNotFoundError(
        `Error: failed fetching transaction with ID ${txHash} from chain ${this.chainId}`
      );
    }

    // skip if transaction already processed
    const isProcessed = await this.cache.isTransactionProcessed(txHash);
    if (isProcessed) {
      logger.log({
        level: "info",
        message: `transaction ${txHash} already processed in chain ${this.chainId}`,
      });
      return;
    }

    // wait for the subgraph to sync before invalidating
    try {
      const subgraphSynced = await this.waitForBlockMainSubgraph(
        transaction.blockNumber
      );
      if (!subgraphSynced) {
        logger.log({
          level: "error",
          message: `Timeout while waiting for block number ${transaction.blockNumber.toString()} in chain ${
            this.chainId
          }`,
        });

        throw new SubgraphSyncError(
          `Error: failed waiting for block number ${transaction.blockNumber.toString()} in chain ${
            this.chainId
          }`
        );
      }
    } catch (error) {
      logger.log({
        level: "error",
        message: `Unexpected error while waiting for block number ${transaction.blockNumber.toString()} in chain ${
          this.chainId
        }`,
        error: error,
      });

      throw new SubgraphSyncError(
        `Error: failed waiting for block number ${transaction.blockNumber.toString()} in chain ${
          this.chainId
        }`
      );
    }

    const hatsLogs = transaction.logs.filter(
      (log) => log.address === HATS_ADDRESS.toLowerCase()
    );

    try {
      await this.handleHatsEvents(
        hatsLogs,
        CHAIN_ID_TO_NETWORK_NAME[this.chainId],
        CHAIN_ID_TO_ENTITY_PREFIX[this.chainId]
      );
      await this.cache.markTransactionProcessed(txHash);
    } catch (err) {
      logger.log({
        level: "error",
        message: `error processing hats events for transaction ${txHash} in chain ${this.chainId}`,
        error: err,
      });

      throw new InvalidationError(
        `Error: failed processing events for transaction ${txHash} in chain ${this.chainId}`
      );
    }
  }

  async handleHatsEvents(
    logs: (Log | RpcLog)[],
    networkName: string,
    entityPrefix: string
  ) {
    const parsedLogs = parseEventLogs({
      abi: HATS_ABI,
      logs,
    });

    const processed: string[] = [];

    for (let i = 0; i < parsedLogs.length; i++) {
      const log = parsedLogs[i];
      logger.log({
        level: "info",
        message: `processing event ${log.eventName} in network ${networkName}`,
        transactionHash: log.transactionHash,
        logIndex: log.logIndex,
        index: i,
      });

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
        const key = `${entityPrefix}_Hat.${hatIdDecimalToHex(hatId)}`;
        if (!processed.includes(key)) {
          processed.push(key);
          await this.cache.invalidateEntity(
            `${entityPrefix}_Hat`,
            hatIdDecimalToHex(hatId)
          );
        }
      } else if (log.eventName === "HatCreated") {
        const hatId = log.args.id;
        const adminHat = parentHat(hatIdDecimalToHex(hatId));
        const treeKey = `${entityPrefix}_Tree.${treeIdDecimalToHex(
          hatIdToTreeId(hatId)
        )}`;
        if (!processed.includes(treeKey)) {
          processed.push(treeKey);
          await this.cache.invalidateEntity(
            `${entityPrefix}_Tree`,
            treeIdDecimalToHex(hatIdToTreeId(hatId))
          );
        }
        if (adminHat !== null) {
          const hatKey = `${entityPrefix}_Hat.${adminHat}`;
          if (!processed.includes(hatKey)) {
            processed.push(hatKey);
            await this.cache.invalidateEntity(`${entityPrefix}_Hat`, adminHat);
          }
        }
      } else if (
        log.eventName === "TopHatLinkRequested" ||
        log.eventName === "TopHatLinked"
      ) {
        const treeId = log.args.domain;
        const adminHatId = log.args.newAdmin;
        const treeKey = `${entityPrefix}_Tree.${treeIdDecimalToHex(treeId)}`;
        const hatKey = `${entityPrefix}_Hat.${hatIdDecimalToHex(adminHatId)}`;
        if (!processed.includes(treeKey)) {
          processed.push(treeKey);
          await this.cache.invalidateEntity(
            `${entityPrefix}_Tree`,
            treeIdDecimalToHex(treeId)
          );
        }
        if (!processed.includes(hatKey)) {
          processed.push(hatKey);
          await this.cache.invalidateEntity(
            `${entityPrefix}_Hat`,
            hatIdDecimalToHex(adminHatId)
          );
        }
      } else if (log.eventName === "TransferSingle") {
        const from = log.args.from;
        const to = log.args.to;
        const hatId = log.args.id;

        const fromKey = `${entityPrefix}_Wearer.${(
          from as string
        ).toLowerCase()}`;
        const toKey = `${entityPrefix}_Wearer.${(to as string).toLowerCase()}`;
        const hatKey = `${entityPrefix}_Hat.${hatIdDecimalToHex(hatId)}`;

        if (!processed.includes(hatKey)) {
          processed.push(hatKey);
          await this.cache.invalidateEntity(
            `${entityPrefix}_Hat`,
            hatIdDecimalToHex(hatId)
          );
        }
        if (
          to !== "0x0000000000000000000000000000000000000000" &&
          !processed.includes(toKey)
        ) {
          processed.push(toKey);
          await this.cache.invalidateEntity(
            `${entityPrefix}_Wearer`,
            (to as string).toLowerCase()
          );
        }
        if (
          from !== "0x0000000000000000000000000000000000000000" &&
          !processed.includes(fromKey)
        ) {
          processed.push(fromKey);
          await this.cache.invalidateEntity(
            `${entityPrefix}_Wearer`,
            (from as string).toLowerCase()
          );
        }
      }
    }
  }

  async handleClaimsHatterEvents(
    claimsHatters: `0x${string}`[],
    entityPrefix: string
  ) {
    await Promise.all(
      claimsHatters.map((hatter) => {
        logger.log({
          level: "info",
          message: `processing claims hatter event of address ${hatter}`,
          entity: `${entityPrefix}_ClaimsHatter.${hatter.toLowerCase()}`,
        });
        return this.cache.invalidateEntity(
          `${entityPrefix}_ClaimsHatter`,
          hatter.toLowerCase()
        );
      })
    );
  }

  async waitForBlockMainSubgraph(blockNumber: bigint): Promise<boolean> {
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
    const timeoutDuration = 10000; // Timeout after 10 seconds

    // Poll for block number with timeout
    const pollForBlockNumber = async () => {
      while (true) {
        const latestBlockNumber = await this.getLatestBlockMainSubgraph();
        logger.log({
          level: "info",
          message: `waiting, latest block number: ${latestBlockNumber.toString()}`,
        });
        if (latestBlockNumber >= blockNumber) {
          return;
        }
        await delay(1000); // Wait for 1 second before checking again
      }
    };

    try {
      await Promise.race([
        pollForBlockNumber(),
        timeoutPromise(timeoutDuration),
      ]);
    } catch (error) {
      logger.log({
        level: "error",
        message: `Failed to reach desired block number within timeout`,
        blockNumber: blockNumber.toString(),
        network: this.chainId,
        error: error,
      });
      return false;
    }

    return true;
  }

  async getLatestBlockMainSubgraph(): Promise<bigint> {
    const entityPrefix = CHAIN_ID_TO_ENTITY_PREFIX[this.chainId];
    const query = gql`
      {
        ${entityPrefix}__meta {
          block {
            number
          }
        }
      }
    `;

    const data: any = await this.graphqlClient.request(query);
    return BigInt(data[`${entityPrefix}__meta`].block.number);
  }
}
