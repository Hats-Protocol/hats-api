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

4. Add the invalidation service for the new network:

```typescript
import { CacheInvalidationService } from './invalidation';

switch (networkId) {
  case "networkId":
    await this.networkInvalidationClient.processTransaction(
      txHash.toLowerCase() as `0x${string}`,
      force
    );
    break;

  // ... other networks ...
}

const networkInvalidationService = new CacheInvalidationService(
  new RedisCacheClient(),
  'networkId'
);

networkInvalidationService.start();
```

The resolvers will automatically work for the new network due to the pattern used in `src/resolvers.ts`.

## Development

```bash
pnpm build          # Build GraphQL Mesh and TypeScript
pnpm start          # Start the server
pnpm dev            # Development mode
pnpm test           # Run tests
pnpm test:coverage  # Run tests with coverage
```

### Testing

Tests cover cache invalidation, BullMQ processing, and error handling. See [TESTING.md](./TESTING.md) for details.

Start the test Redis before running tests:

```bash
docker compose -f docker-compose.test.yml up -d
pnpm test
docker compose -f docker-compose.test.yml down -v
```

### Continuous Integration

The project uses GitHub Actions for CI/CD:

- **Test Suite**: Runs on all PRs and pushes to main
  - Installs dependencies and builds the project
  - Starts Redis test container with password authentication
  - Runs the full test suite with coverage reporting
  - Performs TypeScript type checking

The workflow automatically manages Redis lifecycle and provides comprehensive test coverage validation.

### Cache Invalidation

The system monitors blockchain events and invalidates related cache entries using BullMQ for reliable processing across all supported networks.

#### Manual Invalidation Endpoint

The API provides a `/invalidate` endpoint for manually triggering cache invalidation:

```http
POST /invalidate
Content-Type: application/json

{
  "transactionId": "0x...",
  "networkId": "1",
  "force": false
}
```

**Parameters:**
- `transactionId`: The transaction hash to process
- `networkId`: The network chain ID (e.g., "1" for Ethereum, "137" for Polygon)
- `force` (optional): Boolean flag to control job handling behavior

**Force Flag Behavior:**
- `force: true` - Removes any existing job (regardless of state) and re-queues it immediately
- `force: false/undefined` - Smart handling based on job state:
  - If job doesn't exist: Queues normally
  - If job is completed/failed: Re-queues automatically
  - If job is active: Returns 202 (already processing)
  - If job is waiting/delayed: Returns 409 (already queued)

**Response Format:**
```json
{
  "status": "queued|requeued|already_processing|already_queued",
  "jobId": "chainId-txHash",
  "previousState": "completed|failed|active|waiting|null",
  "message": "Human-readable status message"
}
```

**Response Status Codes:**
- `200 OK`: Transaction successfully queued or re-queued
- `202 Accepted`: Transaction is already being processed
- `409 Conflict`: Transaction is already in the queue
- `400 Bad Request`: Invalid parameters or transaction not found
- `500 Internal Server Error`: Processing error

