import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  celo,
  sepolia,
  base,
  gnosis,
} from "viem/chains";
import { createPublicClient, webSocket, parseEventLogs } from "viem";
import {
  HATS_ABI,
  HATS_ADDRESS,
  CLAIMS_HATTER_EVENTS,
  HATS_EVENTS,
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

export class CacheInvalidationClient {
  private readonly cache: RedisCacheClient;
  private readonly publicClientEthereum: PublicClient;
  private readonly publicClientOptimism: PublicClient;
  private readonly publicClientArbitrum: PublicClient;
  private readonly publicClientGnosis: PublicClient;
  private readonly publicClientBase: PublicClient;
  private readonly publicClientCelo: PublicClient;
  private readonly publicClientSepolia: PublicClient;
  private readonly publicClientPolygon: PublicClient;

  constructor() {
    this.cache = new RedisCacheClient();

    // viem public clients
    this.publicClientEthereum = createPublicClient({
      chain: mainnet,
      transport: webSocket(process.env.ETHEREUM_SOCKET_URL),
    });
    this.publicClientOptimism = createPublicClient({
      chain: optimism,
      transport: webSocket(process.env.OPTIMISM_SOCKET_URL),
    }) as PublicClient;
    this.publicClientArbitrum = createPublicClient({
      chain: arbitrum,
      transport: webSocket(process.env.ARBITRUM_SOCKET_URL),
    });
    this.publicClientGnosis = createPublicClient({
      chain: gnosis,
      transport: webSocket(process.env.GNOSIS_SOCKET_URL),
    });
    this.publicClientBase = createPublicClient({
      chain: base,
      transport: webSocket(process.env.BASE_SOCKET_URL),
    }) as PublicClient;
    this.publicClientCelo = createPublicClient({
      chain: celo,
      transport: webSocket(process.env.CELO_SOCKET_URL),
    }) as PublicClient;
    this.publicClientSepolia = createPublicClient({
      chain: sepolia,
      transport: webSocket(process.env.SEPOLIA_SOCKET_URL),
    });
    this.publicClientPolygon = createPublicClient({
      chain: polygon,
      transport: webSocket(process.env.POLYGON_SOCKET_URL),
    });
  }

  watchEvents() {
    // watch Calims Hatters events
    this.publicClientEthereum.watchEvent({
      events: CLAIMS_HATTER_EVENTS,
      onLogs: (logs) =>
        this.handleClaimsHatterEvents(
          logs.map((log) => log.address),
          "Eth"
        ),
    });
    this.publicClientSepolia.watchEvent({
      events: CLAIMS_HATTER_EVENTS,
      onLogs: (logs) =>
        this.handleClaimsHatterEvents(
          logs.map((log) => log.address),
          "Sep"
        ),
    });
    this.publicClientOptimism.watchEvent({
      events: CLAIMS_HATTER_EVENTS,
      onLogs: (logs) =>
        this.handleClaimsHatterEvents(
          logs.map((log) => log.address),
          "Op"
        ),
    });
    this.publicClientArbitrum.watchEvent({
      events: CLAIMS_HATTER_EVENTS,
      onLogs: (logs) =>
        this.handleClaimsHatterEvents(
          logs.map((log) => log.address),
          "Arb"
        ),
    });
    this.publicClientCelo.watchEvent({
      events: CLAIMS_HATTER_EVENTS,
      onLogs: (logs) =>
        this.handleClaimsHatterEvents(
          logs.map((log) => log.address),
          "Celo"
        ),
    });
    this.publicClientBase.watchEvent({
      events: CLAIMS_HATTER_EVENTS,
      onLogs: (logs) =>
        this.handleClaimsHatterEvents(
          logs.map((log) => log.address),
          "Base"
        ),
    });
    this.publicClientGnosis.watchEvent({
      events: CLAIMS_HATTER_EVENTS,
      onLogs: (logs) =>
        this.handleClaimsHatterEvents(
          logs.map((log) => log.address),
          "Gno"
        ),
    });
    this.publicClientPolygon.watchEvent({
      events: CLAIMS_HATTER_EVENTS,
      onLogs: (logs) =>
        this.handleClaimsHatterEvents(
          logs.map((log) => log.address),
          "Pol"
        ),
    });

    // watch Hats events
    this.publicClientEthereum.watchEvent({
      address: HATS_ADDRESS,
      events: HATS_EVENTS,
      onLogs: (logs) => {
        this.handleHatsEvent(logs, "Ethereum", "Eth");
      },
    });

    this.publicClientSepolia.watchEvent({
      address: HATS_ADDRESS,
      events: HATS_EVENTS,
      onLogs: (logs) => {
        this.handleHatsEvent(logs, "Sepolia", "Sep");
      },
    });

    this.publicClientOptimism.watchEvent({
      address: HATS_ADDRESS,
      events: HATS_EVENTS,
      onLogs: (logs) => {
        this.handleHatsEvent(logs, "Optimism", "Op");
      },
    });

    this.publicClientArbitrum.watchEvent({
      address: HATS_ADDRESS,
      events: HATS_EVENTS,
      onLogs: (logs) => {
        this.handleHatsEvent(logs, "Arbitrum", "Arb");
      },
    });

    this.publicClientPolygon.watchEvent({
      address: HATS_ADDRESS,
      events: HATS_EVENTS,
      onLogs: (logs) => {
        this.handleHatsEvent(logs, "Polygon", "Pol");
      },
    });

    this.publicClientBase.watchEvent({
      address: HATS_ADDRESS,
      events: HATS_EVENTS,
      onLogs: (logs) => {
        this.handleHatsEvent(logs, "Base", "Base");
      },
    });

    this.publicClientCelo.watchEvent({
      address: HATS_ADDRESS,
      events: HATS_EVENTS,
      onLogs: (logs) => {
        this.handleHatsEvent(logs, "Celo", "Celo");
      },
    });

    this.publicClientGnosis.watchEvent({
      address: HATS_ADDRESS,
      events: HATS_EVENTS,
      onLogs: (logs) => {
        this.handleHatsEvent(logs, "Gnosis", "Gno");
      },
    });
  }

  keepAlive() {
    this.publicClientSepolia.transport
      .getRpcClient()
      .then((client: any) => {
        logger.info(`Sepolia socket readyState: ${client.socket.readyState}`);
        client.socket.addEventListener("message", (ev: any) => {
          const response = JSON.parse(ev.data);
          // console.log("Received message:", response); // Log all incoming messages
          if (response.id === 1111) {
            logger.info("pong from: Sepolia");
          }
        });
      })
      .then(() => {
        setInterval(async () => {
          try {
            this.publicClientSepolia.transport
              .getRpcClient()
              .then((client: any) => {
                client.socket.send(
                  JSON.stringify({
                    jsonrpc: "2.0",
                    method: "eth_blockNumber",
                    params: [],
                    id: 1111,
                  })
                );
              });
            logger.info("ping to: Sepolia");
          } catch (error) {
            console.error(`Error on keep alive for Sepolia:`, error);
          }
        }, 1 * 60 * 1000); // 2 min
      });

    this.publicClientEthereum.transport
      .getRpcClient()
      .then((client: any) => {
        logger.info(`Ethereum socket readyState: ${client.socket.readyState}`);
        client.socket.addEventListener("message", (ev: any) => {
          const response = JSON.parse(ev.data);
          // console.log("Received message:", response); // Log all incoming messages
          if (response.id === 1111) {
            logger.info("pong from: Ethereum");
          }
        });
      })
      .then(() => {
        setInterval(async () => {
          try {
            this.publicClientEthereum.transport
              .getRpcClient()
              .then((client: any) => {
                client.socket.send(
                  JSON.stringify({
                    jsonrpc: "2.0",
                    method: "eth_blockNumber",
                    params: [],
                    id: 1111,
                  })
                );
              });
            logger.info("ping to: Ethereum");
          } catch (error) {
            console.error(`Error on keep alive for Ethereum:`, error);
          }
        }, 1 * 60 * 1000); // 2 min
      });

    this.publicClientOptimism.transport
      .getRpcClient()
      .then((client: any) => {
        logger.info(`Optimism socket readyState: ${client.socket.readyState}`);
        client.socket.addEventListener("message", (ev: any) => {
          const response = JSON.parse(ev.data);
          // console.log("Received message:", response); // Log all incoming messages
          if (response.id === 1111) {
            logger.info("pong from: Optimism");
          }
        });
      })
      .then(() => {
        setInterval(async () => {
          try {
            this.publicClientOptimism.transport
              .getRpcClient()
              .then((client: any) => {
                client.socket.send(
                  JSON.stringify({
                    jsonrpc: "2.0",
                    method: "eth_blockNumber",
                    params: [],
                    id: 1111,
                  })
                );
              });
            logger.info("ping to: Optimism");
          } catch (error) {
            console.error(`Error on keep alive for Optimism:`, error);
          }
        }, 1 * 60 * 1000); // 2 min
      });

    this.publicClientArbitrum.transport
      .getRpcClient()
      .then((client: any) => {
        logger.info(`Arbitrum socket readyState: ${client.socket.readyState}`);
        client.socket.addEventListener("message", (ev: any) => {
          const response = JSON.parse(ev.data);
          // console.log("Received message:", response); // Log all incoming messages
          if (response.id === 1111) {
            logger.info("pong from: Arbitrum");
          }
        });
      })
      .then(() => {
        setInterval(async () => {
          try {
            this.publicClientArbitrum.transport
              .getRpcClient()
              .then((client: any) => {
                client.socket.send(
                  JSON.stringify({
                    jsonrpc: "2.0",
                    method: "eth_blockNumber",
                    params: [],
                    id: 1111,
                  })
                );
              });
            logger.info("ping to: Arbitrum");
          } catch (error) {
            console.error(`Error on keep alive for Arbitrum:`, error);
          }
        }, 1 * 60 * 1000); // 2 min
      });

    this.publicClientGnosis.transport
      .getRpcClient()
      .then((client: any) => {
        logger.info(`Gnosis socket readyState: ${client.socket.readyState}`);
        client.socket.addEventListener("message", (ev: any) => {
          const response = JSON.parse(ev.data);
          // console.log("Received message:", response); // Log all incoming messages
          if (response.id === 1111) {
            logger.info("pong from: Gnosis");
          }
        });
      })
      .then(() => {
        setInterval(async () => {
          try {
            this.publicClientGnosis.transport
              .getRpcClient()
              .then((client: any) => {
                client.socket.send(
                  JSON.stringify({
                    jsonrpc: "2.0",
                    method: "eth_blockNumber",
                    params: [],
                    id: 1111,
                  })
                );
              });
            logger.info("ping to: Gnosis");
          } catch (error) {
            console.error(`Error on keep alive for Gnosis:`, error);
          }
        }, 1 * 60 * 1000); // 2 min
      });

    this.publicClientBase.transport
      .getRpcClient()
      .then((client: any) => {
        logger.info(`Base socket readyState: ${client.socket.readyState}`);
        client.socket.addEventListener("message", (ev: any) => {
          const response = JSON.parse(ev.data);
          // console.log("Received message:", response); // Log all incoming messages
          if (response.id === 1111) {
            logger.info("pong from: Base");
          }
        });
      })
      .then(() => {
        setInterval(async () => {
          try {
            this.publicClientBase.transport
              .getRpcClient()
              .then((client: any) => {
                client.socket.send(
                  JSON.stringify({
                    jsonrpc: "2.0",
                    method: "eth_blockNumber",
                    params: [],
                    id: 1111,
                  })
                );
              });
            logger.info("ping to: Base");
          } catch (error) {
            console.error(`Error on keep alive for Base:`, error);
          }
        }, 1 * 60 * 1000); // 2 min
      });

    this.publicClientCelo.transport
      .getRpcClient()
      .then((client: any) => {
        logger.info(`Celo socket readyState: ${client.socket.readyState}`);
        client.socket.addEventListener("message", (ev: any) => {
          const response = JSON.parse(ev.data);
          // console.log("Received message:", response); // Log all incoming messages
          if (response.id === 1111) {
            logger.info("pong from: Celo");
          }
        });
      })
      .then(() => {
        setInterval(async () => {
          try {
            this.publicClientCelo.transport
              .getRpcClient()
              .then((client: any) => {
                client.socket.send(
                  JSON.stringify({
                    jsonrpc: "2.0",
                    method: "eth_blockNumber",
                    params: [],
                    id: 1111,
                  })
                );
              });
            logger.info("ping to: Celo");
          } catch (error) {
            console.error(`Error on keep alive for Celo:`, error);
          }
        }, 1 * 60 * 1000); // 2 min
      });

    this.publicClientPolygon.transport
      .getRpcClient()
      .then((client: any) => {
        logger.info(`Polygon socket readyState: ${client.socket.readyState}`);
        client.socket.addEventListener("message", (ev: any) => {
          const response = JSON.parse(ev.data);
          // console.log("Received message:", response); // Log all incoming messages
          if (response.id === 1111) {
            logger.info("pong from: Polygon");
          }
        });
      })
      .then(() => {
        setInterval(async () => {
          try {
            this.publicClientPolygon.transport
              .getRpcClient()
              .then((client: any) => {
                client.socket.send(
                  JSON.stringify({
                    jsonrpc: "2.0",
                    method: "eth_blockNumber",
                    params: [],
                    id: 1111,
                  })
                );
              });
            logger.info("ping to: Polygon");
          } catch (error) {
            console.error(`Error on keep alive for Polygon:`, error);
          }
        }, 1 * 60 * 1000); // 2 min
      });
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
