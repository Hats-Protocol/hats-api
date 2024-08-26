import {
  createPublicClient,
  webSocket,
  http,
  parseEventLogs,
  decodeEventLog,
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
import { LRUCache } from "lru-cache";

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
        await this.mainnetInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`
        );
        break;
      case "137":
        await this.polygonInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`
        );
        break;
      case "100":
        await this.gnosisInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`
        );
        break;
      case "42220":
        await this.celoInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`
        );
        break;
      case "8453":
        await this.baseInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`
        );
        break;
      case "10":
        await this.optimismInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`
        );
        break;
      case "42161":
        await this.arbitrumInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`
        );
        break;
      case "11155111":
        await this.sepoliaInvalidationClient.processTransaction(
          txHash.toLowerCase() as `0x${string}`
        );
        break;
      default:
        logger.info(`network ${networkId} not supported`);
    }
  }
}

export class CacheInvalidationService {
  private cache: RedisCacheClient;
  private inMemCache: LRUCache<string, boolean>;
  private publicSocketClient: PublicClient;
  private publicHttpClient: PublicClient;
  private graphqlClient: GraphQLClient;
  private chainId: string;
  private key: number;

  constructor(cacheClient: RedisCacheClient, chainId: string) {
    this.cache = cacheClient;
    this.inMemCache = new LRUCache<string, boolean>({ max: 100 });
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
      onLogs: (logs: any) => {
        for (let i = 0; i < logs.length; i++) {
          const log = logs[i];
          const logTx: `0x${string}` = log.transactionHash;
          this.processTransaction(logTx.toLowerCase() as `0x${string}`);
        }
      },
    });

    // watch Hats events
    const unwatchHats = this.publicSocketClient.watchEvent({
      address: HATS_ADDRESS,
      events: HATS_EVENTS,
      onLogs: (logs: any) => {
        for (let i = 0; i < logs.length; i++) {
          const log = logs[i];
          const logTx: `0x${string}` = log.transactionHash;
          this.processTransaction(logTx.toLowerCase() as `0x${string}`);
        }
      },
    });

    const heartbeat = () => {
      logger.log({ level: "info", message: `ping network ${this.chainId}` });
      this.publicSocketClient
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
    logger.log({
      level: "info",
      message: `${this.chainId}-${txHash}: start processing`,
      chain: this.chainId,
      txHash: txHash,
    });

    const isProcessed = this.inMemCache.get(txHash);
    if (isProcessed) {
      logger.log({
        level: "info",
        message: `${this.chainId}-${txHash}: already processed`,
        chain: this.chainId,
        txHash: txHash,
      });
      return;
    } else {
      this.inMemCache.set(txHash, true);
    }

    let transactionReceipt: TransactionReceipt;
    // fetch transaction receipt
    try {
      transactionReceipt = await this.publicHttpClient.getTransactionReceipt({
        hash: txHash,
      });

      if (!transactionReceipt) {
        return;
      }
    } catch (err) {
      logger.log({
        level: "error",
        message: `${this.chainId}-${txHash}: error fetching transaction`,
        chain: this.chainId,
        txHash: txHash,
        error: err,
      });
      this.inMemCache.set(txHash, false);
      throw new TransactionNotFoundError(
        `Error: failed fetching transaction with ID ${txHash} from chain ${this.chainId}`
      );
    }

    // wait for the subgraph to sync before invalidating
    try {
      const subgraphSynced = await this.waitForBlockMainSubgraph(
        transactionReceipt.blockNumber
      );
      if (!subgraphSynced) {
        logger.log({
          level: "error",
          message: `${
            this.chainId
          }-${txHash}: timeout while waiting for block number ${transactionReceipt.blockNumber.toString()}`,
          chain: this.chainId,
          txHash: txHash,
        });

        // throw new SubgraphSyncError(
        //   `Error: failed waiting for block number ${transactionReceipt.blockNumber.toString()} in chain ${
        //     this.chainId
        //   }`
        // );
      }
    } catch (error) {
      logger.log({
        level: "error",
        message: `${
          this.chainId
        }-${txHash}: unexpected error while waiting for block number ${transactionReceipt.blockNumber.toString()}`,
        chain: this.chainId,
        txHash: txHash,
        error: error,
      });
      this.inMemCache.set(txHash, false);

      throw new SubgraphSyncError(
        `Error: failed waiting for block number ${transactionReceipt.blockNumber.toString()} in chain ${
          this.chainId
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
        hatsLogs,
        CHAIN_ID_TO_NETWORK_NAME[this.chainId],
        CHAIN_ID_TO_ENTITY_PREFIX[this.chainId]
      );
      await this.handleClaimsHatterEvents(
        claimsHatterInstances,
        CHAIN_ID_TO_ENTITY_PREFIX[this.chainId]
      );
    } catch (err) {
      logger.log({
        level: "error",
        message: `${this.chainId}-${txHash}: error processing hats events`,
        chain: this.chainId,
        txHash: txHash,
        error: err,
      });
      this.inMemCache.set(txHash, false);

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

    const processedHatsOfTrees: string[] = [];
    const processedEntities: string[] = [];

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
        const treeId = treeIdDecimalToHex(hatIdToTreeId(hatId));
        if (!processedHatsOfTrees.includes(treeId)) {
          processedHatsOfTrees.push(treeId);
          await this.cache.invalidateHatsInTree(entityPrefix, treeId);
        }
      } else if (log.eventName === "HatCreated") {
        const hatId = log.args.id;
        const treeId = treeIdDecimalToHex(hatIdToTreeId(hatId));
        const adminHat = parentHat(hatIdDecimalToHex(hatId));
        const treeKey = `${entityPrefix}_Tree.${treeIdDecimalToHex(
          hatIdToTreeId(hatId)
        )}`;
        const prevTreeKey = `${entityPrefix}_Tree.${treeIdDecimalToHex(
          hatIdToTreeId(hatId) - 1
        )}`;

        if (!processedEntities.includes(treeKey)) {
          processedEntities.push(treeKey);
          await this.cache.invalidateEntity(
            `${entityPrefix}_Tree`,
            treeIdDecimalToHex(hatIdToTreeId(hatId))
          );
        }
        // if the hat is a top-hat, invalidate also the previous tree for tree pagination queries
        if (adminHat === null && !processedEntities.includes(prevTreeKey)) {
          processedEntities.push(prevTreeKey);
          await this.cache.invalidateEntity(
            `${entityPrefix}_Tree`,
            treeIdDecimalToHex(hatIdToTreeId(hatId) - 1)
          );
        }
        // invalidate athe admin hat if it exists
        if (adminHat !== null && !processedHatsOfTrees.includes(treeId)) {
          processedHatsOfTrees.push(treeId);
          await this.cache.invalidateHatsInTree(entityPrefix, treeId);
        }
      } else if (
        log.eventName === "TopHatLinkRequested" ||
        log.eventName === "TopHatLinked"
      ) {
        const treeId = log.args.domain;
        const adminHatId = log.args.newAdmin;
        const treeKey = `${entityPrefix}_Tree.${treeIdDecimalToHex(treeId)}`;
        const hatKey = `${entityPrefix}_Hat.${hatIdDecimalToHex(adminHatId)}`;
        if (!processedEntities.includes(treeKey)) {
          processedEntities.push(treeKey);
          await this.cache.invalidateEntity(
            `${entityPrefix}_Tree`,
            treeIdDecimalToHex(treeId)
          );
        }
        if (!processedEntities.includes(hatKey)) {
          processedEntities.push(hatKey);
          await this.cache.invalidateEntity(
            `${entityPrefix}_Hat`,
            hatIdDecimalToHex(adminHatId)
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

        if (!processedHatsOfTrees.includes(treeId)) {
          processedHatsOfTrees.push(treeId);
          await this.cache.invalidateHatsInTree(entityPrefix, treeId);
        }
        if (
          to !== "0x0000000000000000000000000000000000000000" &&
          !processedEntities.includes(toKey)
        ) {
          processedEntities.push(toKey);
          await this.cache.invalidateEntity(
            `${entityPrefix}_Wearer`,
            (to as string).toLowerCase()
          );
        }
        if (
          from !== "0x0000000000000000000000000000000000000000" &&
          !processedEntities.includes(fromKey)
        ) {
          processedEntities.push(fromKey);
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
    const timeoutDuration = 15000; // timeout after 10 seconds

    // poll for block number with timeout
    const pollForBlockNumber = async () => {
      while (true) {
        const latestBlockNumber = await this.getLatestBlockMainSubgraph();
        // logger.log({
        //   level: "info",
        //   message: `waiting, latest block number: ${latestBlockNumber.toString()}`,
        // });
        if (latestBlockNumber >= blockNumber) {
          return;
        }
        await delay(1000); // wait for 1 second before checking again
      }
    };

    try {
      await Promise.race([
        pollForBlockNumber(),
        timeoutPromise(timeoutDuration),
      ]);
    } catch (error) {
      // logger.log({
      //   level: "error",
      //   message: `Failed to reach desired block number within timeout`,
      //   blockNumber: blockNumber.toString(),
      //   network: this.chainId,
      //   error: error,
      // });
      return false;
    }

    return true;
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

    const data: any = await this.graphqlClient.request(query);
    return BigInt(data._meta.block.number);
  }
}
