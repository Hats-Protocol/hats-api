import { ethers } from "ethers";
import { HATS_ABI } from "./hats";
import { RedisCacheClient } from "./redis";
import { hatIdDecimalToHex } from "@hatsprotocol/sdk-v1-core";

export function cacheInvalidationService() {
  const cache = new RedisCacheClient();

  const providerSepolia = new ethers.WebSocketProvider(
    "wss://sepolia.infura.io/ws/v3/ffca6b624a4c42eaaa1f01ed03053ef9"
  );

  const hatsContractSepolia = new ethers.Contract(
    "0x3bc1A0Ad72417f2d411118085256fC53CBdDd137",
    JSON.stringify(HATS_ABI),
    providerSepolia
  );

  hatsContractSepolia.on("HatDetailsChanged", (hatId, newDetails, event) => {
    cache.invalidateEntity("Sep_Hat", hatIdDecimalToHex(hatId));
  });
}
