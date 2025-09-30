export interface NetworkConfig {
  prefix: string;
  chainId: string;
  name: string;
  // mainSubgraphEndpoint: string;
  // ancillarySubgraphEndpoint: string;
  // 
  // Add other network-specific config as needed
  // For example:
  // rpcUrl?: string;
  // blockExplorer?: string;
}

// ! APPEARS UNUSED

export const NETWORKS: Record<string, NetworkConfig> = {
  ethereum: {
    prefix: 'Eth_',
    chainId: '1',
    name: 'Ethereum',
    // mainSubgraphEndpoint: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_NETWORK_API_KEY}/subgraphs/id/AtrhAMCcVfPbmejxTez3G59Kdfu5tMFoiPsTUjdCzpKx`,
    // ancillarySubgraphEndpoint:
    //   'https://api.studio.thegraph.com/query/55784/hats-v1-ethereum-ancillary/v0.0.27',
  },
  optimism: {
    prefix: 'Op_',
    chainId: '10',
    name: 'Optimism',
    // mainSubgraphEndpoint: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_NETWORK_API_KEY}/subgraphs/id/9nmXXk3ysDVY4sFygWQNQknwiJLCPnrUNzDRw8bxw61q`,
    // ancillarySubgraphEndpoint:
    //   'https://api.studio.thegraph.com/query/55784/hats-v1-optimism-ancillary/v0.0.24',
  },
  arbitrum: {
    prefix: 'Arb_',
    chainId: '42161',
    name: 'Arbitrum',
    // mainSubgraphEndpoint: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_NETWORK_API_KEY}/subgraphs/id/4CiXQPjzKshBbyK2dgJiknTNWcj8cGUJsopTsXfm5HEk`,
    // ancillarySubgraphEndpoint:
    //   'https://api.studio.thegraph.com/query/55784/hats-v1-arbitrum-ancillary/v0.0.24',
  },
  gnosis: {
    prefix: 'Gno_',
    chainId: '100',
    name: 'Gnosis',
    // mainSubgraphEndpoint: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_NETWORK_API_KEY}/subgraphs/id/2VPQUuAeS9Xy8VtinpjHRJEMnZS1sqzFQyCHAys1wb5n`,
    // ancillarySubgraphEndpoint:
    //   'https://api.studio.thegraph.com/query/55784/hats-v1-gnosis-chain-ancillary/v0.0.24',
  },
  celo: {
    prefix: 'Celo_',
    chainId: '42220',
    name: 'Celo',
    // mainSubgraphEndpoint: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_NETWORK_API_KEY}/subgraphs/id/GpKseh3Z4nX2X8W5HjQPp5hpSSxPxsaQ3t1KpEjhvz7t`,
    // ancillarySubgraphEndpoint:
    //   'https://api.studio.thegraph.com/query/55784/hats-v1-celo-ancillary/v0.0.25',
  },
  base: {
    prefix: 'Base_',
    chainId: '8453',
    name: 'Base',
    // mainSubgraphEndpoint: `https://gateway.thegraph.com/api/${process.env.GRAPH_NETWORK_API_KEY}/subgraphs/id/FWeAqrp36QYqv9gDWLwr7em8vtvPnPrmRRQgnBb6QbBs`,
    // ancillarySubgraphEndpoint:
    //   'https://api.studio.thegraph.com/query/55784/hats-v1-base-ancillary/v0.0.25',
  },
  polygon: {
    prefix: 'Pol_',
    chainId: '137',
    name: 'Polygon',
    // mainSubgraphEndpoint: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_NETWORK_API_KEY}/subgraphs/id/7MxsRb1p4UQNET8AgrWd93h3GUgeQ7NWrk5SHLEPCxBP`,
    // ancillarySubgraphEndpoint:
    //   'https://api.studio.thegraph.com/query/55784/hats-v1-polygon-ancillary/v0.0.24',
  },
  sepolia: {
    prefix: 'Sep_',
    chainId: '11155111',
    name: 'Sepolia',
    // mainSubgraphEndpoint:
    //  // ! NOTE no v prefix on this version
    //   'https://api.studio.thegraph.com/query/55784/hats-v1-sepolia/1.1.3',
    // ancillarySubgraphEndpoint:
    //   'https://api.studio.thegraph.com/query/55784/hats-v1-sepolia-ancillary/v0.0.25',
  },
  baseSepolia: {
    prefix: 'BaseSep_',
    chainId: '84532',
    name: 'Base Sepolia',
    // mainSubgraphEndpoint:
    //   'https://api.studio.thegraph.com/query/55784/hats-v1-base-sepolia/v0.0.8',
    // ancillarySubgraphEndpoint:
    //   'https://api.studio.thegraph.com/query/55784/hats-v1-base-sepolia-ancillary/v0.0.2',
  },
} as const;

// Utility types and helpers
export type NetworkName = keyof typeof NETWORKS;
export type ChainPrefix = (typeof NETWORKS)[NetworkName]['prefix'];

// Utility functions
export const getNetworkByChainId = (
  chainId: string
): NetworkConfig | undefined => {
  return Object.values(NETWORKS).find((network) => network.chainId === chainId);
};

export const getNetworkByPrefix = (
  prefix: string
): NetworkConfig | undefined => {
  return Object.values(NETWORKS).find((network) => network.prefix === prefix);
};

// Type guard
export const isValidNetwork = (network: string): network is NetworkName => {
  return network in NETWORKS;
};
