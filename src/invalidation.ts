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
import { log } from "console";

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
}

export class CacheInvalidationService {
  private cache: RedisCacheClient;
  private publicClient: PublicClient;
  private chainId: string;
  private key: number;

  constructor(cacheClient: RedisCacheClient, chainId: string) {
    this.cache = cacheClient;
    this.chainId = chainId;
    this.key = 0;
    this.publicClient = createPublicClient({
      chain: CHAIN_ID_TO_VIEM_CHAIN[this.chainId],
      transport: webSocket(CHAIN_ID_TO_SOCKET_URL[chainId], {
        key: this.key.toString(),
      }),
    });
  }

  async start() {
    logger.info(`connecting network ${this.chainId}`);

    let socketRpcClient: any;
    try {
      socketRpcClient = await this.publicClient.transport.getRpcClient();
    } catch (error) {
      logger.info(`fetching rpc client in network ${this.chainId} failed`);
    }

    // watch Calims Hatters events
    const unwatchClaimsHatter = this.publicClient.watchEvent({
      events: CLAIMS_HATTER_EVENTS,
      onLogs: (logs) =>
        this.handleClaimsHatterEvents(
          logs.map((log) => log.address),
          CHAIN_ID_TO_ENTITY_PREFIX[this.chainId]
        ),
    });

    // watch Hats events
    const unwatchHats = this.publicClient.watchEvent({
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

    const onError = (ev: any) => {
      logger.info(`error in chain ${this.chainId}: ${ev}`);
    };
    const onClose = (ev: any) => {
      try {
        logger.info(
          `Websocket connection closed in network ${this.chainId}. Code: ${ev.code}, Reason: ${ev.reason}`
        );
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
        this.publicClient = createPublicClient({
          chain: CHAIN_ID_TO_VIEM_CHAIN[this.chainId],
          transport: webSocket(CHAIN_ID_TO_SOCKET_URL[this.chainId], {
            key: this.key.toString(),
          }),
        });
        this.start();
      } catch (error) {
        logger.info(`error in onClose handler in network ${this.chainId}`);
      }
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
