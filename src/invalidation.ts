import { ethers } from "ethers";
import { HATS_ABI, HATS_ADDRESS } from "./constants";
import { RedisCacheClient } from "./redis";
import {
  hatIdDecimalToHex,
  hatIdToTreeId,
  treeIdDecimalToHex,
} from "@hatsprotocol/sdk-v1-core";

export async function cacheInvalidationService() {
  const cache = new RedisCacheClient();

  // providers
  console.log("starting invalidation service");
  const providerSepolia = new ethers.WebSocketProvider(
    process.env.SEPOLIA_SOCKET_URL as string
  );
  const providerEthereum = new ethers.WebSocketProvider(
    process.env.ETHEREUM_SOCKET_URL as string
  );
  const providerOptimism = new ethers.WebSocketProvider(
    process.env.OPTIMISM_SOCKET_URL as string
  );
  const providerArbitrum = new ethers.WebSocketProvider(
    process.env.ARBITRUM_SOCKET_URL as string
  );
  const providerBase = new ethers.WebSocketProvider(
    process.env.BASE_SOCKET_URL as string
  );
  const providerPolygon = new ethers.WebSocketProvider(
    process.env.POLYGON_SOCKET_URL as string
  );
  const providerCelo = new ethers.WebSocketProvider(
    process.env.CELO_SOCKET_URL as string
  );
  const providerGnosis = new ethers.WebSocketProvider(
    process.env.GNOSIS_SOCKET_URL as string
  );

  // contracts
  const hatsContractSepolia = new ethers.Contract(
    HATS_ADDRESS,
    JSON.stringify(HATS_ABI),
    providerSepolia
  );
  const hatsContractEthereum = new ethers.Contract(
    HATS_ADDRESS,
    JSON.stringify(HATS_ABI),
    providerEthereum
  );
  const hatsContractOptimism = new ethers.Contract(
    HATS_ADDRESS,
    JSON.stringify(HATS_ABI),
    providerOptimism
  );
  const hatsContractArbitrum = new ethers.Contract(
    HATS_ADDRESS,
    JSON.stringify(HATS_ABI),
    providerArbitrum
  );
  const hatsContractBase = new ethers.Contract(
    HATS_ADDRESS,
    JSON.stringify(HATS_ABI),
    providerBase
  );
  const hatsContractPolygon = new ethers.Contract(
    HATS_ADDRESS,
    JSON.stringify(HATS_ABI),
    providerPolygon
  );
  const hatsContractCelo = new ethers.Contract(
    HATS_ADDRESS,
    JSON.stringify(HATS_ABI),
    providerCelo
  );
  const hatsContractGnosis = new ethers.Contract(
    HATS_ADDRESS,
    JSON.stringify(HATS_ABI),
    providerGnosis
  );

  // event listeners
  hatsContractSepolia.on("*", (event) => {
    handleEvent(cache, event);
  });
  hatsContractEthereum.on("*", (event) => {
    handleEvent(cache, event);
  });
  hatsContractOptimism.on("*", (event) => {
    handleEvent(cache, event);
  });
  hatsContractArbitrum.on("*", (event) => {
    handleEvent(cache, event);
  });
  hatsContractBase.on("*", (event) => {
    handleEvent(cache, event);
  });
  hatsContractPolygon.on("*", (event) => {
    handleEvent(cache, event);
  });
  hatsContractCelo.on("*", (event) => {
    handleEvent(cache, event);
  });
  hatsContractGnosis.on("*", (event) => {
    handleEvent(cache, event);
  });
}

function handleEvent(cache: RedisCacheClient, event: any) {
  const eventName: string = event.fragment.name;
  const eventArgs: unknown[] = event.args;
  console.log("event name: ", eventName);
  console.log("event args:", eventArgs);

  if (
    eventName === "HatDetailsChanged" ||
    eventName === "HatStatusChanged" ||
    eventName === "HatEligibilityChanged" ||
    eventName === "HatToggleChanged" ||
    eventName === "HatMutabilityChanged" ||
    eventName === "HatMaxSupplyChanged" ||
    eventName === "HatImageURIChanged"
  ) {
    const hatId = eventArgs[0] as bigint;
    cache.invalidateEntity("Sep_Hat", hatIdDecimalToHex(hatId));
  } else if (eventName === "HatCreated") {
    const hatId = eventArgs[0] as bigint;
    cache.invalidateEntity(
      "Sep_Tree",
      treeIdDecimalToHex(hatIdToTreeId(hatId))
    );
  } else if (eventName === "WearerStandingChanged") {
    const wearerAddress = eventArgs[1] as `0x${string}`;
    cache.invalidateEntity("Sep_Wearer", wearerAddress.toLowerCase());
  } else if (
    eventName === "TopHatLinkRequested" ||
    eventName === "TopHatLinked"
  ) {
    const treeId = eventArgs[0] as number;
    const adminHatId = eventArgs[1] as bigint;
    cache.invalidateEntity("Sep_Tree", treeIdDecimalToHex(treeId));
    cache.invalidateEntity("Sep_Hat", hatIdDecimalToHex(adminHatId));
  } else if (eventName === "TransferSingle") {
    const from = eventArgs[1] as `0x${string}`;
    const to = eventArgs[2] as `0x${string}`;
    const hatId = eventArgs[3] as bigint;
    cache.invalidateEntity("Sep_Hat", hatIdDecimalToHex(hatId));
    if (to !== "0x0000000000000000000000000000000000000000") {
      cache.invalidateEntity("Sep_Wearer", (to as string).toLowerCase());
    }
    if (from !== "0x0000000000000000000000000000000000000000") {
      cache.invalidateEntity("Sep_Wearer", (from as string).toLowerCase());
    }
  }
}
