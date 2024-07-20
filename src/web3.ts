import { createPublicClient, http } from "viem";
import {
  CHAIN_ID_TO_VIEM_CHAIN,
  CHAIN_ID_TO_HTTP_URL,
  HATS_ABI,
  HATS_ADDRESS,
} from "./constants";
import type { PublicClient, Client } from "viem";

export const publicClients: Record<string, PublicClient> = Object.keys(
  CHAIN_ID_TO_HTTP_URL
).reduce((acc, chainId) => {
  acc[chainId] = createPublicClient({
    chain: CHAIN_ID_TO_VIEM_CHAIN[chainId],
    transport: http(CHAIN_ID_TO_HTTP_URL[chainId]),
  });
  return acc;
}, {} as Record<string, PublicClient>);

export const getWearersEligibility = async (
  chain: string,
  hatId: bigint,
  wearers: `0x${string}`[]
): Promise<Record<`0x${string}`, boolean>> => {
  const publicClient = publicClients[chain];
  const calls = wearers.map((wearer) => {
    return {
      address: HATS_ADDRESS as `0x${string}`,
      abi: [
        {
          inputs: [
            { internalType: "address", name: "_wearer", type: "address" },
            { internalType: "uint256", name: "_hatId", type: "uint256" },
          ],
          name: "isEligible",
          outputs: [{ internalType: "bool", name: "eligible", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
      ] as const,
      functionName: "isEligible",
      args: [wearer, hatId],
    };
  });

  const eligibilityResults = await publicClient.multicall({ contracts: calls });
  const res: Record<`0x${string}`, boolean> = {};
  for (let i = 0; i < wearers.length; i++) {
    let eligible: boolean = false;
    if (
      eligibilityResults[i].status === "success" &&
      eligibilityResults[i].result === true
    ) {
      eligible = true;
    }
    res[wearers[i]] = eligible;
  }

  return res;
};
