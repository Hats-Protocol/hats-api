import { createPublicClient, webSocket, parseEventLogs } from "viem";
import {
  HATS_ABI,
  HATS_ADDRESS,
  CLAIMS_HATTER_EVENTS,
  HATS_EVENTS,
  CHAIN_ID_TO_SOCKET_URL,
  CHAIN_ID_TO_ENTITY_PREFIX,
  CHAIN_ID_TO_NETWORK_NAME,
  CHAIN_ID_TO_VIEM_CHAIN,
} from "./constants";
import { RedisCacheClient } from "./redis";
import logger from "./log";
import {
  hatIdDecimalToHex,
  hatIdToTreeId,
  treeIdDecimalToHex,
} from "@hatsprotocol/sdk-v1-core";
import type { Log, PublicClient, RpcLog } from "viem";

export class CacheInvalidationManager {
  private cache: RedisCacheClient;
  private mainnetInvalidationClient: CacheInvalidationClient;
  private polygonInvalidationClient: CacheInvalidationClient;
  private gnosisInvalidationClient: CacheInvalidationClient;
  private sepoliaInvalidationClient: CacheInvalidationClient;
  private baseInvalidationClient: CacheInvalidationClient;
  private celoInvalidationClient: CacheInvalidationClient;
  private optimismInvalidationClient: CacheInvalidationClient;
  private arbitrumInvalidationClient: CacheInvalidationClient;

  constructor() {
    this.cache = new RedisCacheClient();
    this.mainnetInvalidationClient = new CacheInvalidationClient(
      this.cache,
      "1"
    );
    this.polygonInvalidationClient = new CacheInvalidationClient(
      this.cache,
      "137"
    );
    this.gnosisInvalidationClient = new CacheInvalidationClient(
      this.cache,
      "100"
    );
    this.celoInvalidationClient = new CacheInvalidationClient(
      this.cache,
      "42220"
    );
    this.baseInvalidationClient = new CacheInvalidationClient(
      this.cache,
      "8453"
    );
    this.optimismInvalidationClient = new CacheInvalidationClient(
      this.cache,
      "10"
    );
    this.arbitrumInvalidationClient = new CacheInvalidationClient(
      this.cache,
      "42161"
    );
    this.sepoliaInvalidationClient = new CacheInvalidationClient(
      this.cache,
      "11155111"
    );
  }

  startServices() {
    this.mainnetInvalidationClient.watchEvents();
    this.gnosisInvalidationClient.watchEvents();
    this.arbitrumInvalidationClient.watchEvents();
    this.optimismInvalidationClient.watchEvents();
    this.baseInvalidationClient.watchEvents();
    this.celoInvalidationClient.watchEvents();
    this.sepoliaInvalidationClient.watchEvents();
    this.polygonInvalidationClient.watchEvents();
    this.mainnetInvalidationClient.keepAlive();
    this.gnosisInvalidationClient.keepAlive();
    this.arbitrumInvalidationClient.keepAlive();
    this.optimismInvalidationClient.keepAlive();
    this.baseInvalidationClient.keepAlive();
    this.celoInvalidationClient.keepAlive();
    this.sepoliaInvalidationClient.keepAlive();
    this.polygonInvalidationClient.keepAlive();
  }
}

export class CacheInvalidationClient {
  private cache: RedisCacheClient;
  private publicClient: PublicClient;
  private chainId: string;

  constructor(cacheClient: RedisCacheClient, chainId: string) {
    this.cache = cacheClient;
    this.chainId = chainId;
    this.publicClient = createPublicClient({
      chain: CHAIN_ID_TO_VIEM_CHAIN[this.chainId],
      transport: webSocket(CHAIN_ID_TO_SOCKET_URL[chainId]),
    });
  }

  watchEvents() {
    // watch Calims Hatters events
    this.publicClient.watchEvent({
      events: CLAIMS_HATTER_EVENTS,
      onLogs: (logs) =>
        this.handleClaimsHatterEvents(
          logs.map((log) => log.address),
          CHAIN_ID_TO_ENTITY_PREFIX[this.chainId]
        ),
    });

    // watch Hats events
    this.publicClient.watchEvent({
      address: HATS_ADDRESS,
      events: HATS_EVENTS,
      onLogs: (logs) => {
        this.handleHatsEvent(
          logs,
          CHAIN_ID_TO_NETWORK_NAME[this.chainId],
          CHAIN_ID_TO_ENTITY_PREFIX[this.chainId]
        );
      },
    });
  }

  async keepAlive() {
    logger.info(`connecting network ${this.chainId}`);

    const socketRpcClient = await this.publicClient.transport.getRpcClient();

    const heartbeat = () => {
      logger.info(`ping network ${this.chainId}`);
      this.publicClient
        .getBlockNumber()
        .then((_) => {
          logger.info(`pong network ${this.chainId}`);
        })
        .catch((err) => logger.info(`error in chain ${this.chainId}: ${err}`));
    };

    const intervalId = setInterval(heartbeat, 5 * 60 * 1000);

    const onError = (ev: Event) => {
      logger.info(`error in chain ${this.chainId}: ${ev}`);
    };
    const onClose = async () => {
      logger.info(`Websocket connection closed in network ${this.chainId}`);
      socketRpcClient.socket.removeEventListener("error", onError);
      socketRpcClient.socket.removeEventListener("close", onClose);
      // NOTE: IMPORTANT: invalidate viem's socketClientCache! When close
      // happens on socket level, the same socketClient with the closed websocket will be
      // re-used from cache leading to 'Socket is closed.' error.
      socketRpcClient.close();
      clearInterval(intervalId);
      this.publicClient = createPublicClient({
        chain: CHAIN_ID_TO_VIEM_CHAIN[this.chainId],
        transport: webSocket(CHAIN_ID_TO_SOCKET_URL[this.chainId]),
      });
      logger.info(`Re-establishing connection in network ${this.chainId}`);
      this.keepAlive();
    };

    const setupEventListeners = () => {
      socketRpcClient.socket.addEventListener("error", onError);
      socketRpcClient.socket.addEventListener("close", onClose);
    };

    setupEventListeners();

    heartbeat();
  }

  handleHatsEvent(
    logs: (Log | RpcLog)[],
    networkName: string,
    entityPrefix: string
  ) {
    const parsedLogs = parseEventLogs({
      abi: HATS_ABI,
      logs,
    });

    parsedLogs.forEach((log) => {
      logger.info(
        `processing event ${log.eventName} on tx hash ${log.transactionHash} on ${networkName}`
      );
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
        if (hatId !== undefined) {
          this.cache.invalidateEntity(
            `${entityPrefix}_Hat`,
            hatIdDecimalToHex(hatId)
          );
        }
      } else if (log.eventName === "HatCreated") {
        const hatId = log.args.id;
        if (hatId !== undefined) {
          this.cache.invalidateEntity(
            `${entityPrefix}_Tree`,
            treeIdDecimalToHex(hatIdToTreeId(hatId))
          );
        }
      } else if (log.eventName === "WearerStandingChanged") {
        const wearerAddress = log.args.wearer;
        if (wearerAddress !== undefined) {
          this.cache.invalidateEntity(
            `${entityPrefix}_Wearer`,
            wearerAddress.toLowerCase()
          );
        }
      } else if (
        log.eventName === "TopHatLinkRequested" ||
        log.eventName === "TopHatLinked"
      ) {
        const treeId = log.args.domain;
        const adminHatId = log.args.newAdmin;
        if (treeId !== undefined && adminHatId !== undefined) {
          this.cache.invalidateEntity(
            `${entityPrefix}_Tree`,
            treeIdDecimalToHex(treeId)
          );
          this.cache.invalidateEntity(
            `${entityPrefix}_Hat`,
            hatIdDecimalToHex(adminHatId)
          );
        }
      } else if (log.eventName === "TransferSingle") {
        const from = log.args.from;
        const to = log.args.to;
        const hatId = log.args.id;
        if (from !== undefined && to !== undefined && hatId !== undefined) {
          this.cache.invalidateEntity(
            `${entityPrefix}_Hat`,
            hatIdDecimalToHex(hatId)
          );
          if (to !== "0x0000000000000000000000000000000000000000") {
            this.cache.invalidateEntity(
              `${entityPrefix}_Wearer`,
              (to as string).toLowerCase()
            );
          }
          if (from !== "0x0000000000000000000000000000000000000000") {
            this.cache.invalidateEntity(
              `${entityPrefix}_Wearer`,
              (from as string).toLowerCase()
            );
          }
        }
      }
    });
  }

  handleClaimsHatterEvents(
    claimsHatters: `0x${string}`[],
    entityPrefix: string
  ) {
    claimsHatters.forEach((hatter) => {
      logger.info(`processing claims hatter event of address ${hatter}`);
      this.cache.invalidateEntity(
        `${entityPrefix}_ClaimsHatter`,
        hatter.toLowerCase()
      );
    });
  }
}
