# Automated Testing for Cache Invalidation Reliability

This document describes the automated testing setup implemented to ensure the reliability of the cache invalidation system in the Hats API.

## Overview

The testing suite provides comprehensive coverage of the cache invalidation system using Vitest as the testing framework. The tests focus on ensuring reliability in these critical areas:

- **Redis cache operations** - Entity and tree-level cache invalidation
- **Transaction processing** - BullMQ queue management and job processing 
- **Error handling** - Circuit breakers, retries, and graceful failures
- **Concurrent processing** - High-throughput scenarios and race conditions
- **State management** - Transaction cache states and staleness detection

## Test Structure

```
tests/
├── unit/
│   ├── redis-cache.test.ts         # Comprehensive Redis cache and connection tests
│   ├── transaction-processor.test.ts # BullMQ processor unit tests
│   └── invalidation-service.test.ts  # Cache invalidation service tests
└── integration/
    ├── full-invalidation-flow.test.ts # End-to-end invalidation workflows
    └── bullmq-processing.test.ts      # BullMQ processing integration tests
```


## Configuration

### Dependencies Added

```json
{
  "devDependencies": {
    "@vitest/coverage-v8": "^2.0.5",
    "ioredis-mock": "^8.9.0", 
    "vitest": "^2.0.5"
  }
}
```

### Test Scripts

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run", 
    "test:coverage": "vitest run --coverage"
  }
}
```

### Vitest Configuration

- **Environment**: Node.js with global test functions
- **Timeout**: 30 seconds for long-running integration tests
- **Mocking**: Comprehensive mocks for Redis, BullMQ, and external dependencies
- **Coverage**: V8 provider with exclusions for node_modules and test files

## Key Test Categories

### 1. Redis Cache Reliability

**Tests cache invalidation patterns:**
- Entity-specific invalidation (Hats, Trees, Wearers)
- Tree-wide invalidation for related hats
- Pattern matching and key scanning
- Batch operations for high-volume invalidations
- Error handling for Redis connection failures

**Key Reliability Scenarios:**
```typescript
// Entity invalidation
await cacheClient.invalidateEntity('1', 'tx123', 'Eth_Hat', '0x123')

// Tree invalidation  
await cacheClient.invalidateHatsInTree('1', 'tx123', 'Eth', treeId)
```

### 2. Transaction Processing Reliability

**Tests BullMQ job processing:**
- Job queuing with priority and deduplication
- Concurrent processing with rate limiting
- Job state tracking (waiting, active, completed, failed)
- Retry logic with exponential backoff
- Graceful shutdown and error recovery

**Key Reliability Features:**
- **Priority Processing**: Forced transactions get higher priority
- **Deduplication**: Same transaction hash creates single job
- **Rate Limiting**: Configurable job processing rates per chain
- **Circuit Breakers**: Automatic failure detection and recovery

### 3. State Management Reliability

**Tests transaction cache state:**
```typescript
enum TransactionCacheState {
  NOT_STARTED = 0,
  PROCESSING = 1, 
  COMPLETED = 2,
  FAILED = 3,
  RETRYING = 4
}
```

**Stale Detection Logic:**
- Processing transactions older than 2x timeout are considered stale
- Failed transactions older than 10 minutes are reset
- Force flag bypasses all cache state checks

### 4. Error Handling & Recovery

**Circuit Breaker Pattern:**
- Tracks consecutive failures per service (Socket, HTTP, Subgraph)
- Opens circuit after 5 failures to prevent cascade failures  
- Automatic recovery after 60-second timeout

**Retry Strategy:**
- Exponential backoff with jitter
- Configurable max attempts and delays
- Conditional retries based on error type

## Running Tests

### Unit Tests  
```bash
pnpm test:run tests/unit/
```
**Coverage**: Individual component reliability including Redis connection and cache invalidation

### Integration Tests
```bash
pnpm test:run tests/integration/
```  
**Coverage**: End-to-end workflows and system interactions

### All Tests with Coverage
```bash
pnpm test:coverage
```

## Test Reliability Features

### Mock Strategy
- **Redis**: Uses `ioredis-mock` for deterministic cache operations
- **BullMQ**: Mocks queue operations while preserving job processing logic
- **Network**: Mocks viem clients and GraphQL requests
- **Time**: Deterministic timestamp handling for stale detection

### Concurrent Testing
- Tests handle race conditions in transaction processing
- Validates queue state consistency under concurrent access
- Simulates high-throughput scenarios (50+ transactions)

### Error Simulation
- Network timeouts and connection failures
- Subgraph sync delays and errors  
- Redis operation failures
- BullMQ job processing errors

## Monitoring and Debugging

### Queue Status Tracking
```typescript
const status = await processor.getQueueStatus()
// Returns: { waiting, active, completed, failed, delayed, paused }
```

### Transaction State Queries
```typescript
const isQueued = await service.isTransactionQueued(txHash)
const isProcessing = await service.isTransactionProcessing(txHash)  
```

### Circuit Breaker Monitoring
```typescript
const state = circuitBreaker.getState() // 'CLOSED' | 'OPEN' | 'HALF_OPEN'
const failures = circuitBreaker.getFailures()
```

## Production Considerations

### Environment Variables
```env
# BullMQ Configuration
BULLMQ_MAX_CONCURRENCY=3
BULLMQ_RATE_LIMIT_MAX=10
BULLMQ_RATE_LIMIT_DURATION=1000

# Timeout Configuration  
TRANSACTION_PROCESSING_TIMEOUT=60000
SUBGRAPH_SYNC_TIMEOUT=30000
WEBSOCKET_RETRY_ATTEMPTS=3
WEBSOCKET_RETRY_DELAY=5000
```

### Performance Metrics
- **Transaction Processing**: < 1 second for cache operations
- **Concurrent Throughput**: 50+ transactions processed in parallel
- **Memory Usage**: LRU cache limits in-memory transaction state
- **Error Recovery**: < 60 seconds for circuit breaker recovery

## Future Enhancements

### Potential Test Additions
1. **Load Testing**: Sustained high-volume transaction processing
2. **Chaos Testing**: Random component failures during processing  
3. **Performance Regression**: Benchmark cache operation speeds
4. **Memory Leak Detection**: Long-running test scenarios
5. **Network Partition**: Testing resilience to temporary disconnections

### Monitoring Integration
1. **Metrics Export**: Prometheus metrics for production monitoring
2. **Health Checks**: HTTP endpoints for system health validation
3. **Alerting**: Automated alerts for high failure rates
4. **Dashboard**: Real-time visualization of queue and cache metrics

This testing framework provides a solid foundation for ensuring the reliability and performance of the cache invalidation system in production environments.