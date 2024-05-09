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
import expressLog from "./log";
import {
  hatIdDecimalToHex,
  hatIdToTreeId,
  treeIdDecimalToHex,
} from "@hatsprotocol/sdk-v1-core";

export async function cacheInvalidationService() {
  const cache = new RedisCacheClient();

  // viem public clients
  const publicClientEthereum = createPublicClient({
    chain: mainnet,
    transport: webSocket(process.env.ETHEREUM_SOCKET_URL),
  });
  const publicClientOptimism = createPublicClient({
    chain: optimism,
    transport: webSocket(process.env.OPTIMISM_SOCKET_URL),
  });
  const publicClientArbitrum = createPublicClient({
    chain: arbitrum,
    transport: webSocket(process.env.ARBITRUM_SOCKET_URL),
  });
  const publicClientGnosis = createPublicClient({
    chain: gnosis,
    transport: webSocket(process.env.GNOSIS_SOCKET_URL),
  });
  const publicClientBase = createPublicClient({
    chain: base,
    transport: webSocket(process.env.BASE_SOCKET_URL),
  });
  const publicClientCelo = createPublicClient({
    chain: celo,
    transport: webSocket(process.env.CELO_SOCKET_URL),
  });
  const publicClientSepolia = createPublicClient({
    chain: sepolia,
    transport: webSocket(process.env.SEPOLIA_SOCKET_URL),
  });
  const publicClientPolygon = createPublicClient({
    chain: polygon,
    transport: webSocket(process.env.POLYGON_SOCKET_URL),
  });

  // watch Calims Hatters events
  publicClientEthereum.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address)
      ),
  });
  publicClientSepolia.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address)
      ),
  });
  publicClientOptimism.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address)
      ),
  });
  publicClientArbitrum.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address)
      ),
  });
  publicClientCelo.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address)
      ),
  });
  publicClientBase.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address)
      ),
  });
  publicClientGnosis.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address)
      ),
  });
  publicClientPolygon.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address)
      ),
  });

  // watch Hats events
  publicClientEthereum.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      const parsedLogs = parseEventLogs({
        abi: HATS_ABI,
        logs,
      });

      parsedLogs.forEach((log) => {
        expressLog.info(
          `processing event ${log.eventName} on tx hash ${log.transactionHash} on Ethereum`
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
            cache.invalidateEntity("Eth_Hat", hatIdDecimalToHex(hatId));
          }
        } else if (log.eventName === "HatCreated") {
          const hatId = log.args.id;
          if (hatId !== undefined) {
            cache.invalidateEntity(
              "Eth_Tree",
              treeIdDecimalToHex(hatIdToTreeId(hatId))
            );
          }
        } else if (log.eventName === "WearerStandingChanged") {
          const wearerAddress = log.args.wearer;
          if (wearerAddress !== undefined) {
            cache.invalidateEntity("Eth_Wearer", wearerAddress.toLowerCase());
          }
        } else if (
          log.eventName === "TopHatLinkRequested" ||
          log.eventName === "TopHatLinked"
        ) {
          const treeId = log.args.domain;
          const adminHatId = log.args.newAdmin;
          if (treeId !== undefined && adminHatId !== undefined) {
            cache.invalidateEntity("Eth_Tree", treeIdDecimalToHex(treeId));
            cache.invalidateEntity("Eth_Hat", hatIdDecimalToHex(adminHatId));
          }
        } else if (log.eventName === "TransferSingle") {
          const from = log.args.from;
          const to = log.args.to;
          const hatId = log.args.id;
          if (from !== undefined && to !== undefined && hatId !== undefined) {
            cache.invalidateEntity("Eth_Hat", hatIdDecimalToHex(hatId));
            if (to !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Eth_Wearer",
                (to as string).toLowerCase()
              );
            }
            if (from !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Eth_Wearer",
                (from as string).toLowerCase()
              );
            }
          }
        }
      });
    },
  });

  publicClientSepolia.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      const parsedLogs = parseEventLogs({
        abi: HATS_ABI,
        logs,
      });

      parsedLogs.forEach((log) => {
        expressLog.info(
          `processing event ${log.eventName} on tx hash ${log.transactionHash} on Sepolia`
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
            cache.invalidateEntity("Sep_Hat", hatIdDecimalToHex(hatId));
          }
        } else if (log.eventName === "HatCreated") {
          const hatId = log.args.id;
          if (hatId !== undefined) {
            cache.invalidateEntity(
              "Sep_Tree",
              treeIdDecimalToHex(hatIdToTreeId(hatId))
            );
          }
        } else if (log.eventName === "WearerStandingChanged") {
          const wearerAddress = log.args.wearer;
          if (wearerAddress !== undefined) {
            cache.invalidateEntity("Sep_Wearer", wearerAddress.toLowerCase());
          }
        } else if (
          log.eventName === "TopHatLinkRequested" ||
          log.eventName === "TopHatLinked"
        ) {
          const treeId = log.args.domain;
          const adminHatId = log.args.newAdmin;
          if (treeId !== undefined && adminHatId !== undefined) {
            cache.invalidateEntity("Sep_Tree", treeIdDecimalToHex(treeId));
            cache.invalidateEntity("Sep_Hat", hatIdDecimalToHex(adminHatId));
          }
        } else if (log.eventName === "TransferSingle") {
          const from = log.args.from;
          const to = log.args.to;
          const hatId = log.args.id;
          if (from !== undefined && to !== undefined && hatId !== undefined) {
            cache.invalidateEntity("Sep_Hat", hatIdDecimalToHex(hatId));
            if (to !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Sep_Wearer",
                (to as string).toLowerCase()
              );
            }
            if (from !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Sep_Wearer",
                (from as string).toLowerCase()
              );
            }
          }
        }
      });
    },
  });

  publicClientOptimism.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      const parsedLogs = parseEventLogs({
        abi: HATS_ABI,
        logs,
      });

      parsedLogs.forEach((log) => {
        expressLog.info(
          `processing event ${log.eventName} on tx hash ${log.transactionHash} on Optimism`
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
            cache.invalidateEntity("Op_Hat", hatIdDecimalToHex(hatId));
          }
        } else if (log.eventName === "HatCreated") {
          const hatId = log.args.id;
          if (hatId !== undefined) {
            cache.invalidateEntity(
              "Op_Tree",
              treeIdDecimalToHex(hatIdToTreeId(hatId))
            );
          }
        } else if (log.eventName === "WearerStandingChanged") {
          const wearerAddress = log.args.wearer;
          if (wearerAddress !== undefined) {
            cache.invalidateEntity("Op_Wearer", wearerAddress.toLowerCase());
          }
        } else if (
          log.eventName === "TopHatLinkRequested" ||
          log.eventName === "TopHatLinked"
        ) {
          const treeId = log.args.domain;
          const adminHatId = log.args.newAdmin;
          if (treeId !== undefined && adminHatId !== undefined) {
            cache.invalidateEntity("Op_Tree", treeIdDecimalToHex(treeId));
            cache.invalidateEntity("Op_Hat", hatIdDecimalToHex(adminHatId));
          }
        } else if (log.eventName === "TransferSingle") {
          const from = log.args.from;
          const to = log.args.to;
          const hatId = log.args.id;
          if (from !== undefined && to !== undefined && hatId !== undefined) {
            cache.invalidateEntity("Op_Hat", hatIdDecimalToHex(hatId));
            if (to !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity("Op_Wearer", (to as string).toLowerCase());
            }
            if (from !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Op_Wearer",
                (from as string).toLowerCase()
              );
            }
          }
        }
      });
    },
  });

  publicClientArbitrum.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      const parsedLogs = parseEventLogs({
        abi: HATS_ABI,
        logs,
      });

      parsedLogs.forEach((log) => {
        expressLog.info(
          `processing event ${log.eventName} on tx hash ${log.transactionHash} on Arbitrum`
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
            cache.invalidateEntity("Arb_Hat", hatIdDecimalToHex(hatId));
          }
        } else if (log.eventName === "HatCreated") {
          const hatId = log.args.id;
          if (hatId !== undefined) {
            cache.invalidateEntity(
              "Arb_Tree",
              treeIdDecimalToHex(hatIdToTreeId(hatId))
            );
          }
        } else if (log.eventName === "WearerStandingChanged") {
          const wearerAddress = log.args.wearer;
          if (wearerAddress !== undefined) {
            cache.invalidateEntity("Arb_Wearer", wearerAddress.toLowerCase());
          }
        } else if (
          log.eventName === "TopHatLinkRequested" ||
          log.eventName === "TopHatLinked"
        ) {
          const treeId = log.args.domain;
          const adminHatId = log.args.newAdmin;
          if (treeId !== undefined && adminHatId !== undefined) {
            cache.invalidateEntity("Arb_Tree", treeIdDecimalToHex(treeId));
            cache.invalidateEntity("Arb_Hat", hatIdDecimalToHex(adminHatId));
          }
        } else if (log.eventName === "TransferSingle") {
          const from = log.args.from;
          const to = log.args.to;
          const hatId = log.args.id;
          if (from !== undefined && to !== undefined && hatId !== undefined) {
            cache.invalidateEntity("Arb_Hat", hatIdDecimalToHex(hatId));
            if (to !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Arb_Wearer",
                (to as string).toLowerCase()
              );
            }
            if (from !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Arb_Wearer",
                (from as string).toLowerCase()
              );
            }
          }
        }
      });
    },
  });

  publicClientPolygon.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      const parsedLogs = parseEventLogs({
        abi: HATS_ABI,
        logs,
      });

      parsedLogs.forEach((log) => {
        expressLog.info(
          `processing event ${log.eventName} on tx hash ${log.transactionHash} on Polygon`
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
            cache.invalidateEntity("Pol_Hat", hatIdDecimalToHex(hatId));
          }
        } else if (log.eventName === "HatCreated") {
          const hatId = log.args.id;
          if (hatId !== undefined) {
            cache.invalidateEntity(
              "Pol_Tree",
              treeIdDecimalToHex(hatIdToTreeId(hatId))
            );
          }
        } else if (log.eventName === "WearerStandingChanged") {
          const wearerAddress = log.args.wearer;
          if (wearerAddress !== undefined) {
            cache.invalidateEntity("Pol_Wearer", wearerAddress.toLowerCase());
          }
        } else if (
          log.eventName === "TopHatLinkRequested" ||
          log.eventName === "TopHatLinked"
        ) {
          const treeId = log.args.domain;
          const adminHatId = log.args.newAdmin;
          if (treeId !== undefined && adminHatId !== undefined) {
            cache.invalidateEntity("Pol_Tree", treeIdDecimalToHex(treeId));
            cache.invalidateEntity("Pol_Hat", hatIdDecimalToHex(adminHatId));
          }
        } else if (log.eventName === "TransferSingle") {
          const from = log.args.from;
          const to = log.args.to;
          const hatId = log.args.id;
          if (from !== undefined && to !== undefined && hatId !== undefined) {
            cache.invalidateEntity("Pol_Hat", hatIdDecimalToHex(hatId));
            if (to !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Pol_Wearer",
                (to as string).toLowerCase()
              );
            }
            if (from !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Pol_Wearer",
                (from as string).toLowerCase()
              );
            }
          }
        }
      });
    },
  });

  publicClientBase.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      const parsedLogs = parseEventLogs({
        abi: HATS_ABI,
        logs,
      });

      parsedLogs.forEach((log) => {
        expressLog.info(
          `processing event ${log.eventName} on tx hash ${log.transactionHash} on Base`
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
            cache.invalidateEntity("Base_Hat", hatIdDecimalToHex(hatId));
          }
        } else if (log.eventName === "HatCreated") {
          const hatId = log.args.id;
          if (hatId !== undefined) {
            cache.invalidateEntity(
              "Base_Tree",
              treeIdDecimalToHex(hatIdToTreeId(hatId))
            );
          }
        } else if (log.eventName === "WearerStandingChanged") {
          const wearerAddress = log.args.wearer;
          if (wearerAddress !== undefined) {
            cache.invalidateEntity("Base_Wearer", wearerAddress.toLowerCase());
          }
        } else if (
          log.eventName === "TopHatLinkRequested" ||
          log.eventName === "TopHatLinked"
        ) {
          const treeId = log.args.domain;
          const adminHatId = log.args.newAdmin;
          if (treeId !== undefined && adminHatId !== undefined) {
            cache.invalidateEntity("Base_Tree", treeIdDecimalToHex(treeId));
            cache.invalidateEntity("Base_Hat", hatIdDecimalToHex(adminHatId));
          }
        } else if (log.eventName === "TransferSingle") {
          const from = log.args.from;
          const to = log.args.to;
          const hatId = log.args.id;
          if (from !== undefined && to !== undefined && hatId !== undefined) {
            cache.invalidateEntity("Base_Hat", hatIdDecimalToHex(hatId));
            if (to !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Base_Wearer",
                (to as string).toLowerCase()
              );
            }
            if (from !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Base_Wearer",
                (from as string).toLowerCase()
              );
            }
          }
        }
      });
    },
  });

  publicClientCelo.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      const parsedLogs = parseEventLogs({
        abi: HATS_ABI,
        logs,
      });

      parsedLogs.forEach((log) => {
        expressLog.info(
          `processing event ${log.eventName} on tx hash ${log.transactionHash} on Celo`
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
            cache.invalidateEntity("Celo_Hat", hatIdDecimalToHex(hatId));
          }
        } else if (log.eventName === "HatCreated") {
          const hatId = log.args.id;
          if (hatId !== undefined) {
            cache.invalidateEntity(
              "Celo_Tree",
              treeIdDecimalToHex(hatIdToTreeId(hatId))
            );
          }
        } else if (log.eventName === "WearerStandingChanged") {
          const wearerAddress = log.args.wearer;
          if (wearerAddress !== undefined) {
            cache.invalidateEntity("Celo_Wearer", wearerAddress.toLowerCase());
          }
        } else if (
          log.eventName === "TopHatLinkRequested" ||
          log.eventName === "TopHatLinked"
        ) {
          const treeId = log.args.domain;
          const adminHatId = log.args.newAdmin;
          if (treeId !== undefined && adminHatId !== undefined) {
            cache.invalidateEntity("Celo_Tree", treeIdDecimalToHex(treeId));
            cache.invalidateEntity("Celo_Hat", hatIdDecimalToHex(adminHatId));
          }
        } else if (log.eventName === "TransferSingle") {
          const from = log.args.from;
          const to = log.args.to;
          const hatId = log.args.id;
          if (from !== undefined && to !== undefined && hatId !== undefined) {
            cache.invalidateEntity("Celo_Hat", hatIdDecimalToHex(hatId));
            if (to !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Celo_Wearer",
                (to as string).toLowerCase()
              );
            }
            if (from !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Celo_Wearer",
                (from as string).toLowerCase()
              );
            }
          }
        }
      });
    },
  });

  publicClientGnosis.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      const parsedLogs = parseEventLogs({
        abi: HATS_ABI,
        logs,
      });

      parsedLogs.forEach((log) => {
        expressLog.info(
          `processing event ${log.eventName} on tx hash ${log.transactionHash} on Gnosis`
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
            cache.invalidateEntity("Gno_Hat", hatIdDecimalToHex(hatId));
          }
        } else if (log.eventName === "HatCreated") {
          const hatId = log.args.id;
          if (hatId !== undefined) {
            cache.invalidateEntity(
              "Gno_Tree",
              treeIdDecimalToHex(hatIdToTreeId(hatId))
            );
          }
        } else if (log.eventName === "WearerStandingChanged") {
          const wearerAddress = log.args.wearer;
          if (wearerAddress !== undefined) {
            cache.invalidateEntity("Gno_Wearer", wearerAddress.toLowerCase());
          }
        } else if (
          log.eventName === "TopHatLinkRequested" ||
          log.eventName === "TopHatLinked"
        ) {
          const treeId = log.args.domain;
          const adminHatId = log.args.newAdmin;
          if (treeId !== undefined && adminHatId !== undefined) {
            cache.invalidateEntity("Gno_Tree", treeIdDecimalToHex(treeId));
            cache.invalidateEntity("Gno_Hat", hatIdDecimalToHex(adminHatId));
          }
        } else if (log.eventName === "TransferSingle") {
          const from = log.args.from;
          const to = log.args.to;
          const hatId = log.args.id;
          if (from !== undefined && to !== undefined && hatId !== undefined) {
            cache.invalidateEntity("Gno_Hat", hatIdDecimalToHex(hatId));
            if (to !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Gno_Wearer",
                (to as string).toLowerCase()
              );
            }
            if (from !== "0x0000000000000000000000000000000000000000") {
              cache.invalidateEntity(
                "Gno_Wearer",
                (from as string).toLowerCase()
              );
            }
          }
        }
      });
    },
  });
}

function handleClaimsHatterEvents(
  cache: RedisCacheClient,
  claimsHatters: `0x${string}`[]
) {
  claimsHatters.forEach((hatter) => {
    expressLog.info(`processing claims hatter event of address ${hatter}`);
    cache.invalidateEntity("Sep_ClaimsHatter", hatter.toLowerCase());
  });
}
