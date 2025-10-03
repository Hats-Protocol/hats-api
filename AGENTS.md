# AI Agent Guide for Hats API Development

This document provides guidance for AI agents working on the Hats Protocol GraphQL API codebase.

## Repository Overview

This is a GraphQL API server that provides access to Hats Protocol data across multiple blockchain networks. It uses **GraphQL Hive Gateway** with **GraphQL Mesh composition** to combine on-chain data with subgraph indexing and includes a Redis-based caching layer with automated invalidation.

## Key Architecture Components

### GraphQL Layer (v1 Migration - NEW)
- **Composition** (`mesh.config.ts`): Defines subgraph sources and type extensions for all networks
- **Gateway** (`gateway.config.ts`): Configures the unified GraphQL server with custom resolvers
- **Supergraph** (`supergraph.graphql`): Generated unified schema (NOT committed - regenerate with `pnpm build-mesh`)
- **Main Server** (`src/index.ts`): Express server with GraphQL gateway, BullMQ dashboard, and invalidation endpoints

### Core Services
- **Cache Invalidation** (`src/invalidation.ts`): Monitors blockchain events to invalidate stale cache
- **Redis Cache** (`src/redis.ts`): Pattern-based cache storage and invalidation
- **BullMQ Processing** (`src/bullmq-transaction-processor.ts`): Queue-based transaction processing
- **Custom Resolvers** (`src/resolvers.ts`): Additional computed fields for Hat and Wearer types

### Multi-Chain Support
The system supports multiple networks (Mainnet, Polygon, Gnosis, Base, Optimism, Arbitrum, Celo, Sepolia, Base Sepolia). Each network has its own:
- Main and Ancillary subgraph endpoints
- Type prefix (e.g., `Eth_`, `Op_`, `Base_`)
- RPC endpoints (HTTP and WebSocket)
- Cache invalidation service instance

## Important Conventions

### File Naming
- Use **kebab-case** for all TypeScript files (e.g., `bull-dashboard.ts`, not `bullDashboard.ts`)
- Test files follow pattern: `*.test.ts` in `tests/` directory

### Code Style
- TypeScript with strict typing
- Async/await over callbacks
- Descriptive variable names matching file naming (e.g., `bullDashboardSetup` for class from `bull-dashboard.ts`)

### Environment Variables
- Development: `.env`
- Testing: `.env.test` (uses port 6380 for Redis to avoid conflicts)
- Example: `example.env`

### Build Process
- **Composition**: `pnpm build-mesh` generates `supergraph.graphql` from `mesh.config.ts`
- **Compilation**: `pnpm build` runs composition then compiles TypeScript
- **Development**: `pnpm dev` runs with auto-reload (requires `supergraph.graphql` to exist)
- **IMPORTANT**: `supergraph.graphql` is generated, not committed - must be built locally/CI

## Testing Requirements

### Before Making Changes
1. Ensure tests pass: `pnpm test:run`
2. Check Redis is available for tests (port 6380)
3. Understand existing test patterns in `tests/` directory

### Test Structure
```
tests/
├── unit/           # Component-level tests with mocks
└── integration/    # End-to-end workflow tests
```

### Running Tests
```bash
# Run all tests once
pnpm test:run

# Run specific test file
pnpm test:run tests/unit/redis-cache.test.ts

# Run with coverage
pnpm test:coverage
```

## Common Pitfalls to Avoid

### 1. Redis Configuration
- `.env.test` uses plain values, NOT shell substitution syntax
- Test Redis runs on port 6380, not default 6379
- Password is required: `testpassword123`

### 2. File Imports
- Always use kebab-case filenames in imports
- Check if file exists before importing
- Update all imports when renaming files

### 3. Cache Invalidation
- SCAN operations already limited to `count: 100`
- LRU cache has max size of 100 entries
- Don't modify these limits without performance testing

### 4. Documentation
- Don't create documentation about non-existent features
- Keep README concise - details go in separate docs
- Verify all referenced files actually exist

## Making Safe Changes

### 1. Before Starting
- Read existing code in the area you're modifying
- Check for existing patterns and follow them
- Run tests to ensure clean baseline

### 2. During Development
- Make incremental changes
- Test each change before proceeding
- Use TypeScript types - avoid `any`
- Follow existing error handling patterns

### 3. After Changes
- Run all tests: `pnpm test:run`
- Check for TypeScript errors: `pnpm build`
- Verify no broken imports
- Update relevant documentation

## Key Patterns to Follow

### Error Handling
```typescript
// Use custom error classes
throw new InvalidationError(`Error message with context: ${details}`);

// Log errors with context
logger.log({
  level: 'error',
  message: 'Descriptive error message',
  txHash,
  networkId,
  error
});
```

### Circuit Breakers
- Already implemented for external services
- 5 failure threshold, 60-second recovery
- Don't modify without understanding impact

### Queue Processing
- BullMQ handles transaction processing
- Max 3 concurrent per chain
- Rate limited to 10/second
- Jobs have automatic retry with exponential backoff

## Network-Specific Considerations

Each network has configuration in two places:

### `mesh.config.ts` (Composition Layer)
- Main and Ancillary subgraph sources with endpoints
- Type prefix transforms (e.g., `Eth_`, `Op_`, `Base_`)
- Extended type definitions for custom fields

### `src/constants.ts` (Invalidation Layer)
- `CHAIN_ID_TO_SOCKET_URL`: WebSocket RPC endpoints
- `CHAIN_ID_TO_HTTP_URL`: HTTP RPC endpoints
- `CHAIN_ID_TO_MAIN_SUBGRAPH`: Subgraph endpoints
- `CHAIN_ID_TO_ENTITY_PREFIX`: Entity naming prefixes

When adding a new network:
1. Add subgraph sources to `mesh.config.ts` with proper prefix transform
2. Add type extensions in `mesh.config.ts` `additionalTypeDefs`
3. Regenerate supergraph: `pnpm build-mesh`
4. Add entries to all relevant maps in `src/constants.ts`
5. Create invalidation service instance in `CacheInvalidationManager`
6. Add case in `processTransaction` switch statement
7. Test thoroughly with real network data

## Debugging Tips

### Redis Issues
- Check connection: `redis-cli -p 6380 -a testpassword123 ping`
- Monitor keys: `redis-cli -p 6380 -a testpassword123 --scan --pattern "response-cache:*"`
- Clear test data: `redis-cli -p 6380 -a testpassword123 flushall`

### Test Failures
- Check if Redis test instance is running
- Verify mock implementations match real interfaces
- Look for timing issues in async tests
- Check for hardcoded values that should be configurable

### Import Errors
- Verify file exists at specified path
- Check for case sensitivity issues
- Ensure kebab-case naming is consistent
- Look for circular dependencies

## Getting Started

### First Time Setup
1. Install dependencies: `pnpm install`
2. Copy environment file: `cp example.env .env` and configure
3. Generate supergraph: `pnpm build-mesh`
4. Build TypeScript: `pnpm build`
5. Run development server: `pnpm dev`

### Common Commands
```bash
pnpm build-mesh      # Generate supergraph.graphql
pnpm build           # Build supergraph + TypeScript
pnpm dev             # Development mode
pnpm test:run        # Run tests once
pnpm test:coverage   # Tests with coverage
```

### Understanding the GraphQL Layer
- **Mesh Composition** (`mesh.config.ts`) combines multiple subgraphs into one supergraph
- **Gateway Server** (`gateway.config.ts`) serves the supergraph with custom resolvers
- **Resolvers** (`src/resolvers.ts`) add computed fields like `ensName`, `detailsMetadata`, etc.
- The supergraph is like a compiled artifact - regenerate when changing `mesh.config.ts`

## Summary

When working on this codebase:
1. **Always generate supergraph first** (`pnpm build-mesh`) when starting or changing mesh config
2. Follow existing patterns and conventions
3. Test thoroughly with existing test suite
4. Keep documentation accurate and concise
5. Respect performance limits (cache sizes, scan limits)
6. Handle errors gracefully with proper logging
7. Use TypeScript types effectively
8. Maintain consistency across multi-chain implementations