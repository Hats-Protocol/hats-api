import DataLoader from "dataloader";
import { getHatImages } from "./web3";
import { CHAIN_ID_TO_HTTP_URL } from "./constants";

export type DataLoaders = {
  hatImages: Record<string, DataLoader<bigint, string>>;
};

// Create DataLoader instances for a single GraphQL request
// This must be called per-request to ensure proper batching and cache isolation
export const createDataLoaders = (): DataLoaders => {
  const hatImageLoaders: Record<string, DataLoader<bigint, string>> = {};

  // Create loaders for all supported chains
  Object.keys(CHAIN_ID_TO_HTTP_URL).forEach((chainId) => {
    hatImageLoaders[chainId] = new DataLoader<bigint, string>(
      async (hatIds: readonly bigint[]) => {
        return getHatImages(chainId, [...hatIds]);
      },
      {
        // Batch requests that occur within 10ms window
        batchScheduleFn: (callback) => setTimeout(callback, 10),
        // Cache results for the duration of the request
        cache: true,
      }
    );
  });

  return {
    hatImages: hatImageLoaders,
  };
};
