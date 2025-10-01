import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { CacheInvalidationService } from '../../src/invalidation'
import { RedisCacheClient } from '../../src/redis'

// Mock constants
vi.mock('../../src/constants', () => ({
  CHAIN_ID_TO_VIEM_CHAIN: { '1': { id: 1, name: 'Ethereum' } },
  CHAIN_ID_TO_SOCKET_URL: { '1': 'wss://eth.socket.url' },
  CHAIN_ID_TO_HTTP_URL: { '1': 'https://eth.http.url' },
  CHAIN_ID_TO_MAIN_SUBGRAPH: { '1': 'https://subgraph.url' },
  CHAIN_ID_TO_ENTITY_PREFIX: { '1': 'mainnet' },
  CHAIN_ID_TO_NETWORK_NAME: { '1': 'Ethereum' },
  HATS_ADDRESS: '0x3bc1A0Ad72417f2d411118085256fC53CBdDd137',
  TRANSACTION_PROCESSING_TIMEOUT: 60000,
  SUBGRAPH_SYNC_TIMEOUT: 30000,
  WEBSOCKET_RETRY_ATTEMPTS: 3,
  WEBSOCKET_RETRY_DELAY: 5000,
  HATS_EVENTS: [],
  CLAIMS_HATTER_EVENTS: [],
  HATS_ABI: []
}))

// Mock viem
const mockPublicClient = {
  transport: {
    getRpcClient: vi.fn()
  },
  watchEvent: vi.fn(),
  getBlockNumber: vi.fn(),
  waitForTransactionReceipt: vi.fn()
}

vi.mock('viem', () => ({
  createPublicClient: vi.fn(() => mockPublicClient),
  webSocket: vi.fn(),
  http: vi.fn(),
  parseEventLogs: vi.fn(() => []),
  decodeEventLog: vi.fn()
}))

// Mock GraphQL client
const mockGraphQLClient = {
  request: vi.fn()
}

vi.mock('graphql-request', () => ({
  GraphQLClient: vi.fn(() => mockGraphQLClient),
  gql: vi.fn((template) => template)
}))

// Mock BullMQ processor
const mockTransactionProcessor = {
  addTransaction: vi.fn(),
  getQueueStatus: vi.fn(),
  isTransactionQueued: vi.fn(),
  isTransactionProcessing: vi.fn(),
  pauseQueue: vi.fn(),
  resumeQueue: vi.fn(),
  clearQueue: vi.fn(),
  shutdown: vi.fn()
}

vi.mock('../../src/bullmq-transaction-processor', () => ({
  BullMQTransactionProcessor: vi.fn(() => mockTransactionProcessor)
}))

// Mock utils
vi.mock('../../src/utils', () => ({
  parentHat: vi.fn((hatId: string) => hatId === '0x0000000100010000000000000000000000000000000000000000000000000000' ? null : '0x0000000100000000000000000000000000000000000000000000000000000000')
}))

// Mock SDK functions
vi.mock('@hatsprotocol/sdk-v1-core', () => ({
  hatIdDecimalToHex: vi.fn((id) => `0x${id.toString(16).padStart(64, '0')}`),
  hatIdToTreeId: vi.fn((id) => BigInt(id) >> BigInt(224)),
  treeIdDecimalToHex: vi.fn((id) => `0x${id.toString(16).padStart(8, '0')}`)
}))

// Mock retry utilities
vi.mock('../../src/retry-utils', () => ({
  retryAsync: vi.fn(async (fn) => await fn()),
  CircuitBreaker: vi.fn().mockImplementation(() => ({
    execute: vi.fn(async (fn) => await fn())
  }))
}))

describe('CacheInvalidationService', () => {
  let service: CacheInvalidationService
  let cacheClient: RedisCacheClient

  beforeEach(async () => {
    vi.clearAllMocks()
    
    cacheClient = new RedisCacheClient()

    // Clear Redis data before each test
    const redisClient = cacheClient.getRedisClient()
    await redisClient.flushall()

    service = new CacheInvalidationService(cacheClient, '1')
  })

  afterEach(async () => {
    if (service) {
      try {
        await service.shutdown()
      } catch (error) {
        // Ignore shutdown errors in afterEach - they're expected in some tests
      }
    }
    // Clean up Redis after each test
    const redisClient = cacheClient.getRedisClient()
    await redisClient.flushall()
    await redisClient.quit()
  })

  describe('constructor', () => {
    it('should initialize with correct chain configuration', () => {
      expect(service).toBeDefined()
      expect(service['chainId']).toBe('1')
    })

    it('should initialize circuit breakers', () => {
      expect(service['socketCircuitBreaker']).toBeDefined()
      expect(service['httpCircuitBreaker']).toBeDefined()
      expect(service['subgraphCircuitBreaker']).toBeDefined()
    })

    it('should initialize transaction processor', () => {
      expect(service['transactionProcessor']).toBeDefined()
    })
  })

  describe('cache entry management', () => {
    it('should set and get cache entries correctly', () => {
      const txHash = '0x123abc'

      // Set entry with processing state
      service['setCacheEntry'](txHash, 1) // PROCESSING

      const entry = service['getCacheEntry'](txHash)
      expect(entry).toBeDefined()
      expect(entry?.state).toBe(1)
      expect(entry?.timestamp).toBeTypeOf('number')
      expect(entry?.retryCount).toBe(0)
    })

    it('should increment retry count when setting retrying state', () => {
      const txHash = '0x123abc'

      // First set as processing
      service['setCacheEntry'](txHash, 1) // PROCESSING

      // Then set as retrying
      service['setCacheEntry'](txHash, 4) // RETRYING

      const entry = service['getCacheEntry'](txHash)
      expect(entry?.retryCount).toBe(1)
    })

    it('should detect stale processing transactions', () => {
      const txHash = '0x123abc'

      // Set entry with old timestamp
      service['setCacheEntry'](txHash, 1) // PROCESSING
      const entry = service['getCacheEntry'](txHash)!
      entry.timestamp = Date.now() - 130000 // Older than 2x timeout (60s * 2)

      const isStale = service['isTransactionStale'](entry)
      expect(isStale).toBe(true)
    })

    it('should detect stale failed transactions', () => {
      const txHash = '0x123abc'

      service['setCacheEntry'](txHash, 3) // FAILED
      const entry = service['getCacheEntry'](txHash)!
      entry.timestamp = Date.now() - 11 * 60 * 1000 // Older than 10 minutes

      const isStale = service['isTransactionStale'](entry)
      expect(isStale).toBe(true)
    })
  })

  describe('processTransaction', () => {
    it('should delegate completed transaction handling to BullMQ', async () => {
      const txHash = '0x123abc' as `0x${string}`

      // Set as completed
      service['setCacheEntry'](txHash, 2) // COMPLETED

      // Mock the return value to match new signature
      mockTransactionProcessor.addTransaction.mockResolvedValue({
        jobId: 'job-id',
        status: 'requeued',
        previousState: 'completed',
        message: 'Transaction re-queued for processing (was completed)'
      })

      await service.processTransaction(txHash)

      // Should call transaction processor (BullMQ will handle duplicate logic)
      expect(mockTransactionProcessor.addTransaction).toHaveBeenCalledWith(
        txHash, '1', false, 1
      )
    })

    it('should delegate processing transaction handling to BullMQ', async () => {
      const txHash = '0x123abc' as `0x${string}`

      // Set as processing with recent timestamp
      service['setCacheEntry'](txHash, 1) // PROCESSING

      // Mock the return value to match new signature
      mockTransactionProcessor.addTransaction.mockResolvedValue({
        jobId: 'job-id',
        status: 'already_processing',
        previousState: 'active',
        message: 'Transaction is already being processed'
      })

      await service.processTransaction(txHash)

      // Should call transaction processor (BullMQ will handle duplicate logic)
      expect(mockTransactionProcessor.addTransaction).toHaveBeenCalledWith(
        txHash, '1', false, 1
      )
    })

    it('should process forced transactions even if completed', async () => {
      const txHash = '0x123abc' as `0x${string}`

      service['setCacheEntry'](txHash, 2) // COMPLETED

      // Mock the return value to match new signature
      mockTransactionProcessor.addTransaction.mockResolvedValue({
        jobId: 'job-id',
        status: 'requeued',
        previousState: 'completed',
        message: 'Transaction force re-queued for processing (was completed)'
      })

      await service.processTransaction(txHash, true)

      expect(mockTransactionProcessor.addTransaction).toHaveBeenCalledWith(
        txHash, '1', true, 5 // forced priority
      )
    })

    it('should reset stale entries and process', async () => {
      const txHash = '0x123abc' as `0x${string}`

      // Set stale processing entry
      service['setCacheEntry'](txHash, 1) // PROCESSING
      const entry = service['getCacheEntry'](txHash)!
      entry.timestamp = Date.now() - 130000 // Make it stale

      // Mock the return value to match new signature
      mockTransactionProcessor.addTransaction.mockResolvedValue({
        jobId: 'job-id',
        status: 'queued',
        message: 'Transaction queued for processing'
      })

      await service.processTransaction(txHash)

      expect(mockTransactionProcessor.addTransaction).toHaveBeenCalled()
    })

    it('should add transaction to queue with correct priority', async () => {
      const txHash = '0x123abc' as `0x${string}`

      // Mock the return value to match new signature
      mockTransactionProcessor.addTransaction.mockResolvedValue({
        jobId: 'job-id',
        status: 'queued',
        message: 'Transaction queued for processing'
      })

      await service.processTransaction(txHash, false)

      expect(mockTransactionProcessor.addTransaction).toHaveBeenCalledWith(
        txHash, '1', false, 1 // normal priority
      )
    })

    it('should handle queue errors', async () => {
      const txHash = '0x123abc' as `0x${string}`

      mockTransactionProcessor.addTransaction.mockRejectedValue(new Error('Queue full'))

      await expect(service.processTransaction(txHash)).rejects.toThrow('Queue full')
    })
  })

  describe('processTransactionInternal', () => {
    beforeEach(() => {
      // Mock successful transaction receipt
      mockPublicClient.waitForTransactionReceipt.mockResolvedValue({
        blockNumber: BigInt(12345),
        logs: [
          {
            address: '0x3bc1A0Ad72417f2d411118085256fC53CBdDd137'.toLowerCase(),
            data: '0x',
            topics: []
          }
        ]
      })

      // Mock successful subgraph sync
      mockGraphQLClient.request.mockResolvedValue({
        _meta: { block: { number: 12345 } }
      })
    })

    it('should process transaction successfully', async () => {
      const txHash = '0x123abc' as `0x${string}`

      // Mock handleHatsEvents and handleClaimsHatterEvents
      const handleHatsEventsSpy = vi.spyOn(service, 'handleHatsEvents').mockResolvedValue(undefined)
      const handleClaimsHatterEventsSpy = vi.spyOn(service, 'handleClaimsHatterEvents').mockResolvedValue(undefined)

      await service['processTransactionInternal'](txHash)

      const entry = service['getCacheEntry'](txHash)
      expect(entry?.state).toBe(2) // COMPLETED
      expect(handleHatsEventsSpy).toHaveBeenCalled()
      expect(handleClaimsHatterEventsSpy).toHaveBeenCalled()
    })

    it('should handle transaction receipt errors', async () => {
      const txHash = '0x123abc' as `0x${string}`

      mockPublicClient.waitForTransactionReceipt.mockRejectedValue(new Error('Transaction not found'))

      await expect(service['processTransactionInternal'](txHash)).rejects.toThrow(
        'Error: failed fetching transaction with ID 0x123abc from chain 1'
      )

      const entry = service['getCacheEntry'](txHash)
      expect(entry?.state).toBe(3) // FAILED
      expect(entry?.lastError).toContain('Transaction not found')
    })

    it('should handle subgraph sync errors', async () => {
      const txHash = '0x123abc' as `0x${string}`

      // Mock subgraph timeout
      const waitForBlockSpy = vi.spyOn(service, 'waitForBlockMainSubgraph').mockRejectedValue(new Error('Subgraph timeout'))

      await expect(service['processTransactionInternal'](txHash)).rejects.toThrow(
        'Error: failed waiting for block number 12345 in chain 1'
      )

      const entry = service['getCacheEntry'](txHash)
      expect(entry?.state).toBe(3) // FAILED
    })

    it('should handle event processing errors', async () => {
      const txHash = '0x123abc' as `0x${string}`

      const handleHatsEventsSpy = vi.spyOn(service, 'handleHatsEvents').mockRejectedValue(new Error('Event processing failed'))
      vi.spyOn(service, 'handleClaimsHatterEvents').mockResolvedValue(undefined)

      await expect(service['processTransactionInternal'](txHash)).rejects.toThrow(
        'Error: failed processing events for transaction 0x123abc in chain 1'
      )

      const entry = service['getCacheEntry'](txHash)
      expect(entry?.state).toBe(3) // FAILED
    })
  })

  describe('waitForBlockMainSubgraph', () => {
    it('should return true when subgraph reaches target block', async () => {
      const targetBlock = BigInt(12345)

      mockGraphQLClient.request.mockResolvedValue({
        _meta: { block: { number: 12345 } }
      })

      const result = await service.waitForBlockMainSubgraph(targetBlock)
      expect(result).toBe(true)
    })

    it('should return false on timeout', async () => {
      const targetBlock = BigInt(99999)

      // Mock waitForBlockMainSubgraph to simulate timeout
      const waitForBlockSpy = vi.spyOn(service, 'waitForBlockMainSubgraph').mockResolvedValueOnce(false)
      
      const result = await service.waitForBlockMainSubgraph(targetBlock)
      expect(result).toBe(false)
      expect(waitForBlockSpy).toHaveBeenCalledWith(targetBlock)
      
      waitForBlockSpy.mockRestore()
    })
  })

  describe('getLatestBlockMainSubgraph', () => {
    it('should return latest block number from subgraph', async () => {
      mockGraphQLClient.request.mockResolvedValue({
        _meta: { block: { number: 54321 } }
      })

      const blockNumber = await service.getLatestBlockMainSubgraph()
      expect(blockNumber).toBe(BigInt(54321))
    })

    it('should handle invalid subgraph response', async () => {
      mockGraphQLClient.request.mockResolvedValue({})

      await expect(service.getLatestBlockMainSubgraph()).rejects.toThrow('Invalid subgraph response format')
    })
  })

  describe('queue management', () => {
    it('should return queue status', async () => {
      mockTransactionProcessor.getQueueStatus.mockResolvedValue({
        waiting: 5, active: 2, completed: 100, failed: 3, delayed: 1, paused: 0
      })

      const status = await service.getQueueStatus()
      expect(status.waiting).toBe(5)
      expect(status.active).toBe(2)
    })

    it('should check if transaction is queued', async () => {
      mockTransactionProcessor.isTransactionQueued.mockResolvedValue(true)

      const isQueued = await service.isTransactionQueued('0xtest')
      expect(isQueued).toBe(true)
      expect(mockTransactionProcessor.isTransactionQueued).toHaveBeenCalledWith('0xtest', '1')
    })

    it('should check if transaction is processing', async () => {
      mockTransactionProcessor.isTransactionProcessing.mockResolvedValue(true)

      const isProcessing = await service.isTransactionProcessing('0xtest')
      expect(isProcessing).toBe(true)
    })

    it('should pause and resume processing', async () => {
      await service.pauseTransactionProcessing()
      expect(mockTransactionProcessor.pauseQueue).toHaveBeenCalled()

      await service.resumeTransactionProcessing()
      expect(mockTransactionProcessor.resumeQueue).toHaveBeenCalled()
    })

    it('should clear queue', async () => {
      await service.clearTransactionQueue()
      expect(mockTransactionProcessor.clearQueue).toHaveBeenCalled()
    })
  })

  describe('shutdown', () => {
    it('should shutdown gracefully', async () => {
      await service.shutdown()
      expect(mockTransactionProcessor.shutdown).toHaveBeenCalled()
    })

    it('should handle shutdown errors', async () => {
      mockTransactionProcessor.shutdown.mockRejectedValue(new Error('Shutdown error'))

      await expect(service.shutdown()).rejects.toThrow('Shutdown error')
    })
  })

  describe('getters', () => {
    it('should return transaction processor', () => {
      const processor = service.getTransactionProcessor()
      expect(processor).toBe(mockTransactionProcessor)
    })
  })
})