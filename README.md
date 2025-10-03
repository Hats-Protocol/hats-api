# Hats Protocol GraphQL API

This API uses GraphQL Hive Gateway with GraphQL Mesh composition to unify multiple subgraphs across different networks into a single GraphQL endpoint. It provides a consistent interface for querying Hats Protocol data with additional computed fields.

## Structure

### Core Components

- `mesh.config.ts`: Mesh composition configuration that defines:

  - Subgraph sources for each network
  - Type prefix transformations (e.g., `Eth_`, `Op_`)
  - Type extensions for computed fields

- `gateway.config.ts`: Gateway server configuration that defines:

  - Supergraph schema reference
  - Custom resolver integration
  - GraphiQL playground settings

- `src/resolvers.ts`: Contains resolver implementations for computed fields

  - Network-agnostic resolver factories
  - Automatic resolver generation for all networks
  - Web3 utility function integration

### Directory Structure

```
.
├── mesh.config.ts         # GraphQL Mesh composition config
├── gateway.config.ts      # Gateway server config
├── supergraph.graphql     # Generated unified schema (not committed)
├── src/
│   ├── index.ts          # Main server entry point
│   ├── resolvers.ts      # Resolver implementations
│   ├── utils/
│   │   └── ipfs.ts       # IPFS utility functions
│   └── web3.ts           # Web3 utility functions
└── dist/                 # Compiled TypeScript output
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

1. Add subgraph sources to `mesh.config.ts`:

```typescript
export const composeConfig = defineConfig({
  subgraphs: [
    // ... existing networks ...

    // New Network Main
    {
      sourceHandler: loadGraphQLHTTPSubgraph('NewNetwork_Main', {
        endpoint: 'https://gateway.thegraph.com/api/subgraphs/id/...',
        operationHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        },
        schemaHeaders: {
          Authorization: `Bearer ${process.env.GRAPH_NETWORK_API_KEY}`
        }
      }),
      transforms: [
        createPrefixTransform({
          value: 'New_',
          includeRootOperations: true
        })
      ]
    },

    // New Network Ancillary
    {
      sourceHandler: loadGraphQLHTTPSubgraph('NewNetwork_Ancillary', {
        endpoint: 'https://api.studio.thegraph.com/query/...'
      }),
      transforms: [
        createPrefixTransform({
          value: 'New_',
          includeRootOperations: true
        })
      ]
    }
  ],
  // ...
});
```

2. Add type extensions in `mesh.config.ts` `additionalTypeDefs`:

```typescript
additionalTypeDefs: /* GraphQL */ `
  extend type New_Wearer {
    ensName: String
    isContract: Boolean!
    contractName: String
  }
  extend type New_Hat {
    detailsMetadata: String
    authorities: New_HatAuthority!
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

3. Regenerate the supergraph schema:

```bash
pnpm build-mesh
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
pnpm build-mesh     # Generate supergraph.graphql from mesh.config.ts
pnpm build          # Build supergraph and compile TypeScript
pnpm start          # Start the server
pnpm dev            # Development mode with auto-reload
pnpm test           # Run tests
pnpm test:coverage  # Run tests with coverage
```

**Note:** The `supergraph.graphql` file is generated from `mesh.config.ts` and should not be committed to version control. Run `pnpm build-mesh` to generate it locally or in CI/CD before building.

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

## Event Listeners and RPC Events

The system automatically monitors blockchain events via WebSocket connections to each supported network, triggering cache invalidation when Hats Protocol transactions occur. This real-time event monitoring ensures the cache stays synchronized with on-chain state changes.

### Architecture Overview

Each network has a dedicated `CacheInvalidationService` instance that:
- Establishes WebSocket connections to network RPC endpoints
- Sets up event watchers for specific contract events
- Automatically processes detected transactions through BullMQ queues
- Falls back to HTTP connections when WebSocket is unavailable

### Monitored Event Types

#### Hats Protocol Events

The system monitors events from the main Hats Protocol contract (`0x3bc1A0Ad72417f2d411118085256fC53CBdDd137`):

**Hat Lifecycle Events:**
- `HatCreated` - New hat creation, triggers tree and admin hat invalidation
- `HatStatusChanged` - Hat activation/deactivation status changes
- `HatMutabilityChanged` - Changes to hat mutability settings

**Hat Configuration Events:**
- `HatDetailsChanged` - Updates to hat metadata and details
- `HatImageURIChanged` - Hat image URI modifications
- `HatMaxSupplyChanged` - Maximum supply limit changes
- `HatEligibilityChanged` - Eligibility contract address changes
- `HatToggleChanged` - Toggle contract address changes

**Hat Transfer Events:**
- `TransferSingle` - Hat transfers between wearers (ERC-1155 standard)
- `WearerStandingChanged` - Changes to wearer standing status

**Tree Management Events:**
- `TopHatLinkRequested` - Tree linking requests
- `TopHatLinked` - Completed tree linking operations

#### Claims Hatter Events

The system also monitors events from Claims Hatter contract instances:

- `HatsClaimabilitySet` - Bulk claimability changes for multiple hats
- `HatClaimabilitySet` - Individual hat claimability changes

### Technical Implementation

```typescript
// WebSocket event watchers are set up for each network
unwatchHats = this.publicSocketClient.watchEvent({
  address: HATS_ADDRESS,
  events: HATS_EVENTS,
  onLogs: (logs) => {
    // Process each transaction automatically
    logs.forEach(log => {
      this.processTransaction(log.transactionHash);
    });
  },
});

unwatchClaimsHatter = this.publicSocketClient.watchEvent({
  events: CLAIMS_HATTER_EVENTS,
  onLogs: (logs) => {
    // Process Claims Hatter transactions
    logs.forEach(log => {
      this.processTransaction(log.transactionHash);
    });
  },
});
```

### Connection Management

**WebSocket Reliability:**
- Automatic reconnection with exponential backoff on connection failures
- Circuit breaker pattern to handle persistent connection issues
- Heartbeat monitoring every 5 minutes to detect stale connections

**Error Handling:**
- Graceful fallback to HTTP-only mode when WebSocket unavailable
- Connection state tracking and automatic recovery
- Detailed logging for monitoring and debugging

**Network-Specific Configuration:**
- Each network uses dedicated RPC endpoints (WebSocket and HTTP)
- Independent connection management per chain
- Configurable retry attempts and delays via environment variables

### Event Processing Flow

1. **Event Detection**: WebSocket listeners detect relevant blockchain events
2. **Transaction Queuing**: Event transactions are automatically added to BullMQ processing queues
3. **Cache Invalidation**: Transaction processor handles cache invalidation based on event types
4. **Subgraph Synchronization**: System waits for subgraph sync before invalidating cache
5. **Targeted Invalidation**: Cache entries are invalidated based on affected entities (hats, trees, wearers)

This automated event monitoring ensures that cached GraphQL responses are invalidated immediately when on-chain state changes, maintaining data consistency without manual intervention.

## Manual Invalidation

The system monitors blockchain events and invalidates related cache entries using BullMQ for reliable processing across all supported networks.

### Transaction-Specific Cache Invalidation Endpoint

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

### Network-Wide Cache Invalidation Endpoint

For emergency situations when normal invalidation fails, the API provides an `/invalidate-all` endpoint that clears all cached values for a specific network while preserving queue data and other networks' cache:

```http
POST /invalidate-all
Content-Type: application/json

{
  "networkId": "1"
}
```

**Parameters:**
- `networkId`: The network chain ID (e.g., "1" for Ethereum, "137" for Polygon, "8453" for Base)

**Response Format:**
```json
{
  "status": "success",
  "message": "Successfully invalidated 42 cache entries for network 1",
  "deletedCount": 42,
  "networkId": "1"
}
```

**Response Status Codes:**
- `200 OK`: Cache invalidation completed successfully
- `400 Bad Request`: Missing or unsupported network ID
- `500 Internal Server Error`: Processing error
