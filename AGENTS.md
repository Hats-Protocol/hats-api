# AI Agent Guide for Hats API Development

This document provides guidance for AI agents working on the Hats Protocol GraphQL API codebase.

## Repository Overview

This is a GraphQL API server that provides access to Hats Protocol data across multiple blockchain networks. It uses GraphQL Mesh to combine on-chain data with subgraph indexing and includes a Redis-based caching layer with automated invalidation.

## Key Architecture Components

### Core Services
- **GraphQL Mesh** (`src/index.ts`): Main API server combining multiple data sources
- **Cache Invalidation** (`src/invalidation.ts`): Monitors blockchain events to invalidate stale cache
- **Redis Cache** (`src/redis.ts`): Pattern-based cache storage and invalidation
- **BullMQ Processing** (`src/bullmq-transaction-processor.ts`): Queue-based transaction processing

### Multi-Chain Support
The system supports multiple networks (Mainnet, Polygon, Gnosis, Base, Optimism, Arbitrum, Celo, Sepolia). Each network has its own:
- Subgraph endpoint
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

Each network has configuration in `src/constants.ts`:
- `CHAIN_ID_TO_SOCKET_URL`: WebSocket RPC endpoints
- `CHAIN_ID_TO_HTTP_URL`: HTTP RPC endpoints  
- `CHAIN_ID_TO_MAIN_SUBGRAPH`: Subgraph endpoints
- `CHAIN_ID_TO_ENTITY_PREFIX`: Entity naming prefixes

When adding a new network:
1. Add entries to all relevant maps in `constants.ts`
2. Create invalidation service instance in `CacheInvalidationManager`
3. Add case in `processTransaction` switch statement
4. Test thoroughly with real network data

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

## Summary

When working on this codebase:
1. Follow existing patterns and conventions
2. Test thoroughly with existing test suite
3. Keep documentation accurate and concise
4. Respect performance limits (cache sizes, scan limits)
5. Handle errors gracefully with proper logging
6. Use TypeScript types effectively
7. Maintain consistency across multi-chain implementations