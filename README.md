# Hats Protocol GraphQL API

This API uses GraphQL Mesh to unify multiple subgraphs across different networks into a single GraphQL endpoint. It provides a consistent interface for querying Hats Protocol data with additional computed fields.

## Structure

### Core Components

- `.meshrc.yaml`: Configuration file that defines:

  - Subgraph sources for each network
  - Type prefix transformations (e.g., `Eth_`, `Op_`)
  - Type extensions for computed fields

- `src/resolvers.ts`: Contains resolver implementations for computed fields

  - Network-agnostic resolver factories
  - Automatic resolver generation for all networks
  - Web3 utility function integration

- `src/config/networks.ts`: Single source of truth for network configurations
  - Chain IDs
  - Network prefixes
  - Subgraph endpoints
  - Network-specific settings

### Directory Structure

```
.
├── .meshrc.yaml           # GraphQL Mesh configuration
├── src/
│   ├── resolvers.ts      # Resolver implementations
│   ├── config/
│   │   └── networks.ts   # Network configurations
│   ├── types/
│   │   └── resolvers.ts  # TypeScript types for resolvers
│   ├── utils/
│   │   └── ipfs.ts       # IPFS utility functions
│   └── web3.ts           # Web3 utility functions
└── .mesh/                # Generated GraphQL Mesh files
```

## Extended Types

For each network (prefixed with `Eth_`, `Op_`, etc.), we extend the following types:

### Wearer

```graphql
extend type [Network]_Wearer {
  ensName: String           # ENS name if available
  isContract: Boolean!      # Whether the address is a contract
  contractName: String      # Contract name if available
}
```

### Hat

```graphql
extend type [Network]_Hat {
  detailsMetadata: String                    # Parsed IPFS metadata
  authorities: [Network]_HatAuthority!       # Hat authorities
  eligibleWearers: [String!]!               # Currently eligible wearers
  eligibilityEnsName: String                # ENS name of eligibility contract
  toggleEnsName: String                     # ENS name of toggle contract
  isImageValid: Boolean!                    # Image URI validation
  nearestImage: String!                     # Nearest valid image in tree
  eligibilityIsContract: Boolean!           # Eligibility address contract check
  eligibilityContractName: String          # Eligibility contract name
  toggleIsContract: Boolean!                # Toggle address contract check
  toggleContractName: String               # Toggle contract name
  dynamicStatus: Boolean!                   # Current hat status
}
```

## Adding Support for a New Network

To add support for a new network:

1. Update `src/config/networks.ts`:

```typescript
export const NETWORKS: Record<string, NetworkConfig> = {
  // ... existing networks ...
  newNetwork: {
    prefix: 'New_', // Prefix for GraphQL types
    chainId: '12345', // Network chain ID
    name: 'New Network', // Human-readable name
    mainSubgraphEndpoint: '...', // Main subgraph endpoint
    ancillarySubgraphEndpoint: '...', // Ancillary subgraph endpoint
  },
};
```

2. Add sources to `.meshrc.yaml`:

```yaml
sources:
  - name: NewNetwork_Main
    handler:
      graphql:
        endpoint: ${mainSubgraphEndpoint}
    transforms:
      - prefix:
          mode: wrap
          value: New_
          includeRootOperations: true
  - name: NewNetwork_Ancillary
    handler:
      graphql:
        endpoint: ${ancillarySubgraphEndpoint}
    transforms:
      - prefix:
          mode: wrap
          value: New_
          includeRootOperations: true
```

3. Add type extensions in `.meshrc.yaml`:

```graphql
additionalTypeDefs: |
  extend type New_Wearer {
    ensName: String
    isContract: Boolean!
    contractName: String
  }
  extend type New_Hat {
    detailsMetadata: String
    authorities: New_HatAuthority!
    eligibleWearers: [String!]!
    # ... other fields ...
  }
```

The resolvers will automatically work for the new network due to the factory pattern in `src/resolvers.ts`.

## Environment Variables

Required environment variables:

- `GRAPH_NETWORK_API_KEY`: API key for The Graph Network
- `WEB3_RPC_[NETWORK]`: RPC endpoint for each network (e.g., `WEB3_RPC_ETHEREUM`)

## Development

1. Install dependencies:

```bash
yarn install
```

2. Generate GraphQL Mesh files:

```bash
yarn mesh generate
```

3. Start the development server:

```bash
yarn dev
```

## Testing

1. Run tests:

```bash
yarn test
```

2. Test a specific network:

```bash
yarn test:network [network-name]
```

## Production

1. Build the project:

```bash
yarn build
```

2. Start the production server:

```bash
yarn start
```

## Common Issues

1. **Subgraph Sync Issues**: If a subgraph is not synced, some data might be missing or outdated. Check the subgraph status on The Graph's explorer.

2. **RPC Rate Limits**: Web3 calls are rate-limited. Consider using a paid RPC provider for production.

3. **IPFS Timeouts**: IPFS requests might timeout. The API implements retries and fallbacks.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

[Insert License Information]
