import { defineConfig, loadGraphQLHTTPSubgraph, createPrefixTransform } from '@graphql-mesh/compose-cli';

export const composeConfig = defineConfig({
  subgraphs: [
    // Ethereum Main
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Ethereum_Main', {
        endpoint: 'https://gateway.thegraph.com/api/subgraphs/id/AtrhAMCcVfPbmejxTez3G59Kdfu5tMFoiPsTUjdCzpKx',
        operationHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        },
        schemaHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        }
      }),
      transforms: [
        createPrefixTransform({
          value: 'Eth_',
          includeRootOperations: true
        })
      ]
    },
    // Ethereum Ancillary
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Ethereum_Ancillary', {
        endpoint: 'https://api.studio.thegraph.com/query/55784/hats-v1-ethereum-ancillary/v0.0.27'
      }),
      transforms: [
        createPrefixTransform({
          value: 'Eth_',
          includeRootOperations: true
        })
      ]
    },
    // Optimism Main
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Optimism_Main', {
        endpoint: 'https://gateway.thegraph.com/api/subgraphs/id/9nmXXk3ysDVY4sFygWQNQknwiJLCPnrUNzDRw8bxw61q',
        operationHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        },
        schemaHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        }
      }),
      transforms: [
        createPrefixTransform({
          value: 'Op_',
          includeRootOperations: true
        })
      ]
    },
    // Optimism Ancillary
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Optimism_Ancillary', {
        endpoint: 'https://api.studio.thegraph.com/query/55784/hats-v1-optimism-ancillary/v0.0.24'
      }),
      transforms: [
        createPrefixTransform({
          value: 'Op_',
          includeRootOperations: true
        })
      ]
    },
    // Arbitrum Main
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Arbitrum_Main', {
        endpoint: 'https://gateway.thegraph.com/api/subgraphs/id/4CiXQPjzKshBbyK2dgJiknTNWcj8cGUJsopTsXfm5HEk',
        operationHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        },
        schemaHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        }
      }),
      transforms: [
        createPrefixTransform({
          value: 'Arb_',
          includeRootOperations: true
        })
      ]
    },
    // Arbitrum Ancillary
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Arbitrum_Ancillary', {
        endpoint: 'https://api.studio.thegraph.com/query/55784/hats-v1-arbitrum-ancillary/v0.0.24'
      }),
      transforms: [
        createPrefixTransform({
          value: 'Arb_',
          includeRootOperations: true
        })
      ]
    },
    // Gnosis Main
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Gnosis_Main', {
        endpoint: 'https://gateway.thegraph.com/api/subgraphs/id/2VPQUuAeS9Xy8VtinpjHRJEMnZS1sqzFQyCHAys1wb5n',
        operationHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        },
        schemaHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        }
      }),
      transforms: [
        createPrefixTransform({
          value: 'Gno_',
          includeRootOperations: true
        })
      ]
    },
    // Gnosis Ancillary
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Gnosis_Ancillary', {
        endpoint: 'https://api.studio.thegraph.com/query/55784/hats-v1-gnosis-chain-ancillary/v0.0.24'
      }),
      transforms: [
        createPrefixTransform({
          value: 'Gno_',
          includeRootOperations: true
        })
      ]
    },
    // Polygon Main
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Polygon_Main', {
        endpoint: 'https://gateway.thegraph.com/api/subgraphs/id/7MxsRb1p4UQNET8AgrWd93h3GUgeQ7NWrk5SHLEPCxBP',
        operationHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        },
        schemaHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        }
      }),
      transforms: [
        createPrefixTransform({
          value: 'Pol_',
          includeRootOperations: true
        })
      ]
    },
    // Polygon Ancillary
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Polygon_Ancillary', {
        endpoint: 'https://api.studio.thegraph.com/query/55784/hats-v1-polygon-ancillary/v0.0.24'
      }),
      transforms: [
        createPrefixTransform({
          value: 'Pol_',
          includeRootOperations: true
        })
      ]
    },
    // Base Main
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Base_Main', {
        endpoint: 'https://gateway.thegraph.com/api/subgraphs/id/FWeAqrp36QYqv9gDWLwr7em8vtvPnPrmRRQgnBb6QbBs',
        operationHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        },
        schemaHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        }
      }),
      transforms: [
        createPrefixTransform({
          value: 'Base_',
          includeRootOperations: true
        })
      ]
    },
    // Base Ancillary
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Base_Ancillary', {
        endpoint: 'https://api.studio.thegraph.com/query/55784/hats-v1-base-ancillary/v0.0.25'
      }),
      transforms: [
        createPrefixTransform({
          value: 'Base_',
          includeRootOperations: true
        })
      ]
    },
    // Celo Main
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Celo_Main', {
        endpoint: 'https://gateway.thegraph.com/api/subgraphs/id/GpKseh3Z4nX2X8W5HjQPp5hpSSxPxsaQ3t1KpEjhvz7t',
        operationHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        },
        schemaHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        }
      }),
      transforms: [
        createPrefixTransform({
          value: 'Celo_',
          includeRootOperations: true
        })
      ]
    },
    // Celo Ancillary
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Celo_Ancillary', {
        endpoint: 'https://api.studio.thegraph.com/query/55784/hats-v1-celo-ancillary/v0.0.25'
      }),
      transforms: [
        createPrefixTransform({
          value: 'Celo_',
          includeRootOperations: true
        })
      ]
    },
    // Sepolia Main
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Sepolia_Main', {
        endpoint: 'https://gateway.thegraph.com/api/subgraphs/id/GphqDnDUibK3keP5vNSDgnKxidvLKtdM7j9FA1Lpe6sX',
        operationHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        },
        schemaHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        }
      }),
      transforms: [
        createPrefixTransform({
          value: 'Sep_',
          includeRootOperations: true
        })
      ]
    },
    // Sepolia Ancillary
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Sepolia_Ancillary', {
        endpoint: 'https://api.studio.thegraph.com/query/55784/hats-v1-sepolia-ancillary/v0.0.25'
      }),
      transforms: [
        createPrefixTransform({
          value: 'Sep_',
          includeRootOperations: true
        })
      ]
    },
    // Base Sepolia Main
    {
      sourceHandler: loadGraphQLHTTPSubgraph('Base_Sepolia_Main', {
        endpoint: 'https://gateway.thegraph.com/api/subgraphs/id/ErLvK6LwwsxkRqd8jvDJ258qfxn1hXhjFGnX78rq1g45',
        operationHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        },
        schemaHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        }
      }),
      transforms: [
        createPrefixTransform({
          value: 'BaseSep_',
          includeRootOperations: true
        })
      ]
    }
  ],

  additionalTypeDefs: /* GraphQL */ `
    extend type Eth_Wearer {
      ensName: String
      isContract: Boolean!
      contractName: String
    }
    extend type Eth_Hat {
      detailsMetadata: String
      authorities: Eth_HatAuthority!
      eligibleWearers: [String!]!
      eligibilityEnsName: String
      toggleEnsName: String
      isImageValid: Boolean!
      nearestImage: String!
      eligibilityIsContract: Boolean!
      eligibilityContractName: String
      toggleIsContract: Boolean!
      toggleContractName: String
      dynamicStatus: Boolean!
    }
    extend type Op_Wearer {
      ensName: String
      isContract: Boolean!
      contractName: String
    }
    extend type Op_Hat {
      detailsMetadata: String
      authorities: Op_HatAuthority!
      eligibleWearers: [String!]!
      eligibilityEnsName: String
      toggleEnsName: String
      isImageValid: Boolean!
      nearestImage: String!
      eligibilityIsContract: Boolean!
      eligibilityContractName: String
      toggleIsContract: Boolean!
      toggleContractName: String
      dynamicStatus: Boolean!
    }
    extend type Arb_Wearer {
      ensName: String
      isContract: Boolean!
      contractName: String
    }
    extend type Arb_Hat {
      detailsMetadata: String
      authorities: Arb_HatAuthority!
      eligibleWearers: [String!]!
      eligibilityEnsName: String
      toggleEnsName: String
      isImageValid: Boolean!
      nearestImage: String!
      eligibilityIsContract: Boolean!
      eligibilityContractName: String
      toggleIsContract: Boolean!
      toggleContractName: String
      dynamicStatus: Boolean!
    }
    extend type Gno_Wearer {
      ensName: String
      isContract: Boolean!
      contractName: String
    }
    extend type Gno_Hat {
      detailsMetadata: String
      authorities: Gno_HatAuthority!
      eligibleWearers: [String!]!
      eligibilityEnsName: String
      toggleEnsName: String
      isImageValid: Boolean!
      nearestImage: String!
      eligibilityIsContract: Boolean!
      eligibilityContractName: String
      toggleIsContract: Boolean!
      toggleContractName: String
      dynamicStatus: Boolean!
    }
    extend type Pol_Wearer {
      ensName: String
      isContract: Boolean!
      contractName: String
    }
    extend type Pol_Hat {
      detailsMetadata: String
      authorities: Pol_HatAuthority!
      eligibleWearers: [String!]!
      eligibilityEnsName: String
      toggleEnsName: String
      isImageValid: Boolean!
      nearestImage: String!
      eligibilityIsContract: Boolean!
      eligibilityContractName: String
      toggleIsContract: Boolean!
      toggleContractName: String
      dynamicStatus: Boolean!
    }
    extend type Base_Wearer {
      ensName: String
      isContract: Boolean!
      contractName: String
    }
    extend type Base_Hat {
      detailsMetadata: String
      authorities: Base_HatAuthority!
      eligibleWearers: [String!]!
      eligibilityEnsName: String
      toggleEnsName: String
      isImageValid: Boolean!
      nearestImage: String!
      eligibilityIsContract: Boolean!
      eligibilityContractName: String
      toggleIsContract: Boolean!
      toggleContractName: String
      dynamicStatus: Boolean!
    }
    extend type Celo_Wearer {
      ensName: String
      isContract: Boolean!
      contractName: String
    }
    extend type Celo_Hat {
      detailsMetadata: String
      authorities: Celo_HatAuthority!
      eligibleWearers: [String!]!
      eligibilityEnsName: String
      toggleEnsName: String
      isImageValid: Boolean!
      nearestImage: String!
      eligibilityIsContract: Boolean!
      eligibilityContractName: String
      toggleIsContract: Boolean!
      toggleContractName: String
      dynamicStatus: Boolean!
    }
    extend type Sep_Wearer {
      ensName: String
      isContract: Boolean!
      contractName: String
    }
    extend type Sep_Hat {
      detailsMetadata: String
      authorities: Sep_HatAuthority!
      eligibleWearers: [String!]!
      eligibilityEnsName: String
      toggleEnsName: String
      isImageValid: Boolean!
      nearestImage: String!
      eligibilityIsContract: Boolean!
      eligibilityContractName: String
      toggleIsContract: Boolean!
      toggleContractName: String
      dynamicStatus: Boolean!
    }
    extend type BaseSep_Wearer {
      ensName: String
      isContract: Boolean!
      contractName: String
    }
    extend type BaseSep_Hat {
      detailsMetadata: String
      eligibleWearers: [String!]!
      eligibilityEnsName: String
      toggleEnsName: String
      isImageValid: Boolean!
      nearestImage: String!
      eligibilityIsContract: Boolean!
      eligibilityContractName: String
      toggleIsContract: Boolean!
      toggleContractName: String
      dynamicStatus: Boolean!
    }
  `
});
