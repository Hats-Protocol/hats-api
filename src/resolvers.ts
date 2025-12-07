import { NETWORKS, NetworkConfig } from './config/networks';
import {
  getWearersEligibility,
  getEnsName,
  getHatImage,
  isContract,
  getContractName,
  getHatStatus,
} from './web3';
import { fetchFromIpfs, validateIpfsImage } from './utils/ipfs';
import { GraphQLResolveInfo } from 'graphql';
import { createDataLoaders, DataLoaders } from './data-loaders';

// Type definition for the gateway context containing subgraph resolvers and DataLoaders
type ResolverContext = {
  dataLoaders?: DataLoaders;
  [key: string]: any;
};

// WeakMap to store DataLoaders per context (request-scoped)
const contextDataLoaders = new WeakMap<object, DataLoaders>();

// Get or create DataLoaders for a context
const getDataLoaders = (context: ResolverContext): DataLoaders => {
  if (!contextDataLoaders.has(context)) {
    contextDataLoaders.set(context, createDataLoaders());
  }
  return contextDataLoaders.get(context)!;
};

// match  the types in .meshrc.yaml
type WearerRoot = {
  id: string;
};

type HatRoot = {
  id: string;
  details?: string;
  imageUri?: string;
  eligibility?: string;
  toggle?: string;
  wearers?: Array<{ id: string }>;
};

const createWearerResolvers = (network: NetworkConfig) => ({
  ensName: {
    resolve: async (root: WearerRoot) => {
      return getEnsName(network.chainId, root.id as `0x${string}`);
    },
  },
  isContract: {
    resolve: async (root: WearerRoot) => {
      return isContract(network.chainId, root.id as `0x${string}`);
    },
  },
  contractName: {
    resolve: async (root: WearerRoot) => {
      return getContractName(network.chainId, root.id as `0x${string}`);
    },
  },
});

const createHatResolvers = (network: NetworkConfig) => {
  const baseResolvers = {
    detailsMetadata: {
      resolve: async (root: HatRoot) => {
        if (!root.details?.startsWith('ipfs://')) return null;
        const data = await fetchFromIpfs(root.details.slice(7));
        return data ? JSON.stringify(data) : null;
      },
    },
  };

  // Only add authorities resolver if the network has an ancillary subgraph
  const authoritiesResolver = network.chainId === '84532' ? {} : {
    authorities: {
      selectionSet: /* GraphQL */ `
        {
          id
        }
      `,
      resolve: async (
        root: HatRoot,
        _args: unknown,
        context: ResolverContext,
        info: GraphQLResolveInfo
      ) => {
        return await context[`${network.name}_Ancillary`].Query[
          `${network.prefix}hatAuthority`
        ]({
          root,
          args: {
            id: root.id,
          },
          context,
          info,
        });
      },
    },
  };

  return {
    ...baseResolvers,
    ...authoritiesResolver,
    eligibleWearers: {
    resolve: async (root: HatRoot) => {
      if (!root.wearers) return [];
      const wearersEligibility = await getWearersEligibility(
        network.chainId,
        BigInt(root.id),
        root.wearers.map((w) => w.id as `0x${string}`)
      );
      return root.wearers
        .filter((w) => wearersEligibility[w.id as `0x${string}`] === true)
        .map((w) => w.id);
    },
  },
  eligibilityEnsName: {
    resolve: async (root: HatRoot) => {
      if (!root.eligibility) return null;
      return getEnsName(network.chainId, root.eligibility as `0x${string}`);
    },
  },
  toggleEnsName: {
    resolve: async (root: HatRoot) => {
      if (!root.toggle) return null;
      return getEnsName(network.chainId, root.toggle as `0x${string}`);
    },
  },
  isImageValid: {
    resolve: async (root: HatRoot) => {
      if (!root.imageUri) return false;
      if (!root.imageUri.startsWith('ipfs://')) {
        try {
          const res = await fetch(root.imageUri, { method: 'HEAD' });
          return res.headers.get('content-type')?.startsWith('image/') ?? false;
        } catch {
          return false;
        }
      }
      return validateIpfsImage(root.imageUri.slice(7));
    },
  },
  nearestImage: {
    resolve: async (root: HatRoot, _args: unknown, context: ResolverContext) => {
      // Get request-scoped DataLoaders
      const dataLoaders = getDataLoaders(context);
      return dataLoaders.hatImages[network.chainId].load(BigInt(root.id));
    },
  },
  eligibilityIsContract: {
    resolve: async (root: HatRoot) => {
      if (!root.eligibility) return false;
      return isContract(network.chainId, root.eligibility as `0x${string}`);
    },
  },
  eligibilityContractName: {
    resolve: async (root: HatRoot) => {
      if (!root.eligibility) return null;
      return getContractName(
        network.chainId,
        root.eligibility as `0x${string}`
      );
    },
  },
  toggleIsContract: {
    resolve: async (root: HatRoot) => {
      if (!root.toggle) return false;
      return isContract(network.chainId, root.toggle as `0x${string}`);
    },
  },
  toggleContractName: {
    resolve: async (root: HatRoot) => {
      if (!root.toggle) return null;
      return getContractName(network.chainId, root.toggle as `0x${string}`);
    },
  },
  dynamicStatus: {
    resolve: async (root: HatRoot) => {
      return getHatStatus(network.chainId, BigInt(root.id));
    },
  },
  };
};

// Generate resolvers for all networks
const resolvers: Record<string, any> = Object.entries(NETWORKS).reduce(
  (acc, [_, network]) => {
    const wearerKey = `${network.prefix}Wearer`;
    const hatKey = `${network.prefix}Hat`;

    return {
      ...acc,
      [wearerKey]: createWearerResolvers(network),
      [hatKey]: createHatResolvers(network),
    };
  },
  {}
);

export default resolvers;
