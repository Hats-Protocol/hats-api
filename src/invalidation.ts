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
import type { Log, RpcLog } from "viem";

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
        logs.map((log) => log.address),
        "Eth"
      ),
  });
  publicClientSepolia.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address),
        "Sep"
      ),
  });
  publicClientOptimism.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address),
        "Op"
      ),
  });
  publicClientArbitrum.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address),
        "Arb"
      ),
  });
  publicClientCelo.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address),
        "Celo"
      ),
  });
  publicClientBase.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address),
        "Base"
      ),
  });
  publicClientGnosis.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address),
        "Gno"
      ),
  });
  publicClientPolygon.watchEvent({
    events: CLAIMS_HATTER_EVENTS,
    onLogs: (logs) =>
      handleClaimsHatterEvents(
        cache,
        logs.map((log) => log.address),
        "Pol"
      ),
  });

  // watch Hats events
  publicClientEthereum.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      handleHatsEvent(cache, logs, "Ethereum", "Eth");
    },
  });

  publicClientSepolia.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      handleHatsEvent(cache, logs, "Sepolia", "Sep");
    },
  });

  publicClientOptimism.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      handleHatsEvent(cache, logs, "Optimism", "Op");
    },
  });

  publicClientArbitrum.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      handleHatsEvent(cache, logs, "Arbitrum", "Arb");
    },
  });

  publicClientPolygon.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      handleHatsEvent(cache, logs, "Polygon", "Pol");
    },
  });

  publicClientBase.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      handleHatsEvent(cache, logs, "Base", "Base");
    },
  });

  publicClientCelo.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      handleHatsEvent(cache, logs, "Celo", "Celo");
    },
  });

  publicClientGnosis.watchEvent({
    address: HATS_ADDRESS,
    events: HATS_EVENTS,
    onLogs: (logs) => {
      handleHatsEvent(cache, logs, "Gnosis", "Gno");
    },
  });
}

function handleHatsEvent(
  cache: RedisCacheClient,
  logs: (Log | RpcLog)[],
  networkName: string,
  entityPrefix: string
) {
  const parsedLogs = parseEventLogs({
    abi: HATS_ABI,
    logs,
  });

  parsedLogs.forEach((log) => {
    expressLog.info(
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
        cache.invalidateEntity(`${entityPrefix}_Hat`, hatIdDecimalToHex(hatId));
      }
    } else if (log.eventName === "HatCreated") {
      const hatId = log.args.id;
      if (hatId !== undefined) {
        cache.invalidateEntity(
          `${entityPrefix}_Tree`,
          treeIdDecimalToHex(hatIdToTreeId(hatId))
        );
      }
    } else if (log.eventName === "WearerStandingChanged") {
      const wearerAddress = log.args.wearer;
      if (wearerAddress !== undefined) {
        cache.invalidateEntity(
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
        cache.invalidateEntity(
          `${entityPrefix}_Tree`,
          treeIdDecimalToHex(treeId)
        );
        cache.invalidateEntity(
          `${entityPrefix}_Hat`,
          hatIdDecimalToHex(adminHatId)
        );
      }
    } else if (log.eventName === "TransferSingle") {
      const from = log.args.from;
      const to = log.args.to;
      const hatId = log.args.id;
      if (from !== undefined && to !== undefined && hatId !== undefined) {
        cache.invalidateEntity(`${entityPrefix}_Hat`, hatIdDecimalToHex(hatId));
        if (to !== "0x0000000000000000000000000000000000000000") {
          cache.invalidateEntity(
            `${entityPrefix}_Wearer`,
            (to as string).toLowerCase()
          );
        }
        if (from !== "0x0000000000000000000000000000000000000000") {
          cache.invalidateEntity(
            `${entityPrefix}_Wearer`,
            (from as string).toLowerCase()
          );
        }
      }
    }
  });
}

function handleClaimsHatterEvents(
  cache: RedisCacheClient,
  claimsHatters: `0x${string}`[],
  entityPrefix: string
) {
  claimsHatters.forEach((hatter) => {
    expressLog.info(`processing claims hatter event of address ${hatter}`);
    cache.invalidateEntity(
      `${entityPrefix}_ClaimsHatter`,
      hatter.toLowerCase()
    );
  });
}
