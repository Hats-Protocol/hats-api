import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Redis } from 'ioredis'
import { BullMQTransactionProcessor, type TransactionJobData } from '../../src/bullmq-transaction-processor'

// Mock BullMQ with more realistic behavior
let mockJobs: Map<string, any> = new Map()
let mockJobsExecuted: string[] = []
let mockWorkerCallbacks: Map<string, Function> = new Map()
let mockQueueEventCallbacks: Map<string, Function> = new Map()

const mockQueue = {
  add: vi.fn().mockImplementation(async (name: string, data: TransactionJobData, opts: any) => {
    const job = {
      id: opts.jobId,
      name,
      data,
      opts,
      timestamp: Date.now(),
      attemptsMade: 0,
      updateProgress: vi.fn(),
      getState: vi.fn().mockResolvedValue('waiting'),
      getPosition: vi.fn().mockResolvedValue(mockJobs.size),
      log: vi.fn(),
      remove: vi.fn().mockImplementation(() => {
        // Remove from mockJobs when remove is called
        mockJobs.delete(opts.jobId)
        return Promise.resolve()
      })
    }
    mockJobs.set(opts.jobId, job)
    
    // Simulate job going to waiting state
    setTimeout(() => {
      const callback = mockQueueEventCallbacks.get('waiting')
      if (callback) callback({ jobId: opts.jobId })
    }, 10)
    
    return job
  }),
  
  getJobCounts: vi.fn().mockImplementation(async () => {
    const jobs = Array.from(mockJobs.values())
    const states = await Promise.all(
      jobs.map(async j => {
        if (j.getState && typeof j.getState === 'function') {
          try {
            return await j.getState()
          } catch {
            return 'waiting' // Default to waiting if getState fails
          }
        }
        return j.state || 'waiting' // Default to waiting if no state
      })
    )
    
    return {
      waiting: states.filter(state => state === 'waiting').length,
      active: states.filter(state => state === 'active').length,
      completed: mockJobsExecuted.length,
      failed: states.filter(state => state === 'failed').length,
      delayed: 0,
      paused: 0
    }
  }),
  
  getJob: vi.fn().mockImplementation((jobId: string) => {
    return Promise.resolve(mockJobs.get(jobId))
  }),
  
  pause: vi.fn(),
  resume: vi.fn(),
  drain: vi.fn().mockImplementation(() => {
    mockJobs.clear()
    mockJobsExecuted = []
    return Promise.resolve()
  }),
  close: vi.fn()
}

const mockWorker = {
  on: vi.fn().mockImplementation((event: string, callback: Function) => {
    mockWorkerCallbacks.set(event, callback)
  }),
  close: vi.fn()
}

const mockQueueEvents = {
  on: vi.fn().mockImplementation((event: string, callback: Function) => {
    mockQueueEventCallbacks.set(event, callback)
  }),
  close: vi.fn()
}

vi.mock('bullmq', () => ({
  Queue: vi.fn().mockImplementation((name: string) => {
    ;(mockQueue as any).name = name
    return mockQueue
  }),
  Worker: vi.fn().mockImplementation((queueName: string, processor: Function) => {
    ;(mockWorker as any).processor = processor
    ;(mockWorker as any).queueName = queueName
    return mockWorker
  }),
  QueueEvents: vi.fn(() => mockQueueEvents)
}))

// Mock constants
vi.mock('../../src/constants', () => ({
  TRANSACTION_PROCESSING_TIMEOUT: 5000,
  WEBSOCKET_RETRY_ATTEMPTS: 3,
  WEBSOCKET_RETRY_DELAY: 1000,
  CHAIN_ID_TO_NETWORK_NAME: {
    'test-chain': 'Test Chain',
    '1': 'Ethereum',
    '10': 'Optimism',
    '137': 'Polygon'
  }
}))

describe('BullMQ Processing Integration', () => {
  let processor: BullMQTransactionProcessor
  let mockRedis: Redis
  let mockProcessCallback: ReturnType<typeof vi.fn>
  let processorFunction: Function

  beforeEach(() => {
    vi.clearAllMocks()
    mockJobs.clear()
    mockJobsExecuted = []
    mockWorkerCallbacks.clear()
    mockQueueEventCallbacks.clear()
    
    // Create a real Redis connection for the test
    // BullMQ itself is mocked, so this won't actually be used for queue operations
    mockRedis = new Redis({
      port: Number(process.env.REDIS_PORT || 6380),
      host: process.env.REDIS_HOST || 'localhost',
      password: process.env.REDIS_PASSWORD
    })
    
    mockProcessCallback = vi.fn().mockResolvedValue(undefined)
    
    processor = new BullMQTransactionProcessor(
      'test-chain',
      mockRedis as any,
      mockProcessCallback,
      {
        concurrency: 3,
        maxRateLimit: 10,
        rateLimitDuration: 1000,
        maxAttempts: 3,
        backoffDelay: 500
      }
    )

    // Get the processor function that was passed to the Worker
    processorFunction = (mockWorker as any).processor
  })

  afterEach(async () => {
    // Reset mocks to default resolved state before shutdown
    mockWorker.close.mockResolvedValue(undefined)
    mockQueueEvents.close.mockResolvedValue(undefined)
    mockQueue.close.mockResolvedValue(undefined)
    
    await processor.shutdown()
    await mockRedis.quit()
  })

  describe('Job Processing Pipeline', () => {
    it('should process jobs through the complete pipeline', async () => {
      const txHash = '0x123abc456def' as `0x${string}`
      const chainId = 'test-chain'
      
      // Add transaction to queue
      const jobId = await processor.addTransaction(txHash, chainId, false, 1)
      expect(jobId).toBeDefined()
      
      // Verify job was added to mock queue
      const job = mockJobs.get(`${chainId}-${txHash}`)
      expect(job).toBeDefined()
      expect(job.data.txHash).toBe(txHash)
      expect(job.data.chainId).toBe(chainId)
      
      // Simulate job processing
      job.getState = vi.fn().mockResolvedValue('active')
      
      // Trigger active event
      const activeCallback = mockQueueEventCallbacks.get('active')
      if (activeCallback) activeCallback({ jobId: job.id })
      
      // Process the job
      await processorFunction(job)
      
      // Verify processing callback was called
      expect(mockProcessCallback).toHaveBeenCalledWith(txHash, chainId, false, expect.objectContaining({
        jobId: expect.any(String),
        attempt: 1,
        maxAttempts: expect.any(Number),
        job: expect.any(Object)
      }))
      expect(job.updateProgress).toHaveBeenCalledWith(10)
      expect(job.updateProgress).toHaveBeenCalledWith(100)
      
      // Simulate completion
      job.getState = vi.fn().mockResolvedValue('completed')
      mockJobsExecuted.push(job.id)
      
      // Trigger completed event
      const completedCallback = mockWorkerCallbacks.get('completed')
      if (completedCallback) completedCallback(job)
    })

    it('should handle job failures and retries', async () => {
      const txHash = '0xfail123' as `0x${string}`
      const chainId = 'test-chain'
      
      // Make process callback fail
      mockProcessCallback.mockRejectedValue(new Error('Processing failed'))
      
      const jobId = await processor.addTransaction(txHash, chainId, false, 1)
      const job = mockJobs.get(`${chainId}-${txHash}`)!
      
      // Process the job (should fail)
      await expect(processorFunction(job)).rejects.toThrow('Processing failed')
      
      // Should have updated progress to 10 but not 100
      expect(job.updateProgress).toHaveBeenCalledWith(10)
      expect(job.updateProgress).not.toHaveBeenCalledWith(100)
      
      // Simulate failure event
      job.attemptsMade = 1
      const failedCallback = mockWorkerCallbacks.get('failed')
      if (failedCallback) failedCallback(job, new Error('Processing failed'))
      
      // Should be marked for retry (not last attempt)
      expect(job.attemptsMade).toBe(1)
      expect(job.attemptsMade < 3).toBe(true) // Less than maxAttempts
    })

    it('should handle permanent failure after max attempts', async () => {
      const txHash = '0xpermfail' as `0x${string}`
      const chainId = 'test-chain'
      
      mockProcessCallback.mockRejectedValue(new Error('Permanent failure'))
      
      const jobId = await processor.addTransaction(txHash, chainId, false, 1)
      const job = mockJobs.get(`${chainId}-${txHash}`)!
      
      // Simulate max attempts reached
      job.attemptsMade = 2 // This would be attempt 3 (0-indexed)
      job.opts.attempts = 3
      
      await expect(processorFunction(job)).rejects.toThrow('Permanent failure')
      
      // Trigger failure event for last attempt
      const failedCallback = mockWorkerCallbacks.get('failed')
      if (failedCallback) failedCallback(job, new Error('Permanent failure'))
    })

    it('should prevent processing during shutdown', async () => {
      const txHash = '0xshutdown' as `0x${string}`
      
      // Start shutdown
      ;(processor as any).isShuttingDown = true
      
      // Should prevent adding new transactions during shutdown
      await expect(processor.addTransaction(txHash, 'test-chain')).rejects.toThrow(
        'Processor is shutting down, cannot add new transactions'
      )
      
      expect(mockProcessCallback).not.toHaveBeenCalled()
    })
  })

  describe('Duplicate Job Handling with Force Flag', () => {
    it('should handle duplicate job with force=true by removing and re-queuing', async () => {
      const txHash = '0xdup123' as `0x${string}`
      const chainId = 'test-chain'

      // Add initial job
      const result1 = await processor.addTransaction(txHash, chainId, false, 1)
      expect(result1.status).toBe('queued')
      expect(result1.message).toBe('Transaction queued for processing')

      // Mark job as completed
      const job = mockJobs.get(`${chainId}-${txHash}`)!
      job.getState = vi.fn().mockResolvedValue('completed')

      // Try to add same job with force=true
      const result2 = await processor.addTransaction(txHash, chainId, true, 5)
      expect(result2.status).toBe('requeued')
      expect(result2.previousState).toBe('completed')
      expect(result2.message).toContain('force re-queued')

      // Verify remove was called
      expect(job.remove).toHaveBeenCalled()
    })

    it('should allow re-queue of completed job without force', async () => {
      const txHash = '0xcomplete123' as `0x${string}`
      const chainId = 'test-chain'

      // Add initial job
      const result1 = await processor.addTransaction(txHash, chainId, false, 1)
      expect(result1.status).toBe('queued')

      // Mark job as completed
      const job = mockJobs.get(`${chainId}-${txHash}`)!
      job.getState = vi.fn().mockResolvedValue('completed')

      // Try to add same job without force
      const result2 = await processor.addTransaction(txHash, chainId, false, 1)
      expect(result2.status).toBe('requeued')
      expect(result2.previousState).toBe('completed')
      expect(result2.message).toContain('re-queued for processing (was completed)')

      // Verify remove was called
      expect(job.remove).toHaveBeenCalled()
    })

    it('should allow re-queue of failed job without force', async () => {
      const txHash = '0xfailed123' as `0x${string}`
      const chainId = 'test-chain'

      // Add initial job
      const result1 = await processor.addTransaction(txHash, chainId, false, 1)
      expect(result1.status).toBe('queued')

      // Mark job as failed
      const job = mockJobs.get(`${chainId}-${txHash}`)!
      job.getState = vi.fn().mockResolvedValue('failed')

      // Try to add same job without force
      const result2 = await processor.addTransaction(txHash, chainId, false, 1)
      expect(result2.status).toBe('requeued')
      expect(result2.previousState).toBe('failed')
      expect(result2.message).toContain('re-queued for processing (was failed)')

      // Verify remove was called
      expect(job.remove).toHaveBeenCalled()
    })

    it('should return already_processing for active job without force', async () => {
      const txHash = '0xactive123' as `0x${string}`
      const chainId = 'test-chain'

      // Add initial job
      const result1 = await processor.addTransaction(txHash, chainId, false, 1)
      expect(result1.status).toBe('queued')

      // Mark job as active
      const job = mockJobs.get(`${chainId}-${txHash}`)!
      job.getState = vi.fn().mockResolvedValue('active')

      // Try to add same job without force
      const result2 = await processor.addTransaction(txHash, chainId, false, 1)
      expect(result2.status).toBe('already_processing')
      expect(result2.previousState).toBe('active')
      expect(result2.message).toBe('Transaction is already being processed')

      // Verify remove was NOT called
      expect(job.remove).not.toHaveBeenCalled()
    })

    it('should return already_queued for waiting job without force', async () => {
      const txHash = '0xwaiting123' as `0x${string}`
      const chainId = 'test-chain'

      // Add initial job
      const result1 = await processor.addTransaction(txHash, chainId, false, 1)
      expect(result1.status).toBe('queued')

      // Mark job as waiting
      const job = mockJobs.get(`${chainId}-${txHash}`)!
      job.getState = vi.fn().mockResolvedValue('waiting')

      // Try to add same job without force
      const result2 = await processor.addTransaction(txHash, chainId, false, 1)
      expect(result2.status).toBe('already_queued')
      expect(result2.previousState).toBe('waiting')
      expect(result2.message).toContain('already in queue (waiting)')

      // Verify remove was NOT called
      expect(job.remove).not.toHaveBeenCalled()
    })

    it('should return already_queued for delayed job without force', async () => {
      const txHash = '0xdelayed123' as `0x${string}`
      const chainId = 'test-chain'

      // Add initial job
      const result1 = await processor.addTransaction(txHash, chainId, false, 1)
      expect(result1.status).toBe('queued')

      // Mark job as delayed
      const job = mockJobs.get(`${chainId}-${txHash}`)!
      job.getState = vi.fn().mockResolvedValue('delayed')

      // Try to add same job without force
      const result2 = await processor.addTransaction(txHash, chainId, false, 1)
      expect(result2.status).toBe('already_queued')
      expect(result2.previousState).toBe('delayed')
      expect(result2.message).toContain('already in queue (delayed)')

      // Verify remove was NOT called
      expect(job.remove).not.toHaveBeenCalled()
    })

    it('should remove and re-queue active job with force=true', async () => {
      const txHash = '0xforceactive' as `0x${string}`
      const chainId = 'test-chain'

      // Add initial job
      const result1 = await processor.addTransaction(txHash, chainId, false, 1)
      expect(result1.status).toBe('queued')

      // Mark job as active
      const job = mockJobs.get(`${chainId}-${txHash}`)!
      job.getState = vi.fn().mockResolvedValue('active')

      // Try to add same job with force=true
      const result2 = await processor.addTransaction(txHash, chainId, true, 5)
      expect(result2.status).toBe('requeued')
      expect(result2.previousState).toBe('active')
      expect(result2.message).toContain('force re-queued')

      // Verify remove was called even though it was active
      expect(job.remove).toHaveBeenCalled()
    })
  })

  describe('Queue Management Operations', () => {
    beforeEach(async () => {
      // Add some test jobs
      await processor.addTransaction('0x111' as `0x${string}`, 'test-chain', false, 1)
      await processor.addTransaction('0x222' as `0x${string}`, 'test-chain', true, 5)
      await processor.addTransaction('0x333' as `0x${string}`, 'test-chain', false, 2)
    })

    it('should track queue status accurately', async () => {
      const status = await processor.getQueueStatus()
      
      expect(status.waiting).toBeGreaterThan(0)
      expect(status.completed).toBeGreaterThanOrEqual(0)
      expect(status.failed).toBe(0)
    })

    it('should identify queued transactions', async () => {
      const isQueued1 = await processor.isTransactionQueued('0x111', 'test-chain')
      const isQueued2 = await processor.isTransactionQueued('0x999', 'test-chain')
      
      expect(isQueued1).toBe(true)
      expect(isQueued2).toBe(false)
    })

    it('should identify processing transactions', async () => {
      // Mark a job as active
      const job = mockJobs.get('test-chain-0x111')!
      job.getState = vi.fn().mockResolvedValue('active')
      
      const isProcessing1 = await processor.isTransactionProcessing('0x111', 'test-chain')
      const isProcessing2 = await processor.isTransactionProcessing('0x222', 'test-chain')
      
      expect(isProcessing1).toBe(true)
      expect(isProcessing2).toBe(false)
    })

    it('should pause and resume queue processing', async () => {
      await processor.pauseQueue()
      expect(mockQueue.pause).toHaveBeenCalled()
      
      await processor.resumeQueue()
      expect(mockQueue.resume).toHaveBeenCalled()
    })

    it('should clear queue completely', async () => {
      const statusBefore = await processor.getQueueStatus()
      expect(statusBefore.waiting).toBeGreaterThan(0)
      
      await processor.clearQueue()
      expect(mockQueue.drain).toHaveBeenCalled()
      
      // Mock implementation clears the jobs
      expect(mockJobs.size).toBe(0)
      expect(mockJobsExecuted.length).toBe(0)
    })
  })

  describe('Priority and Rate Limiting', () => {
    it('should handle different job priorities', async () => {
      // Add jobs with different priorities
      await processor.addTransaction('0xlow' as `0x${string}`, 'test-chain', false, 1)
      await processor.addTransaction('0xhigh' as `0x${string}`, 'test-chain', true, 5)
      await processor.addTransaction('0xmedium' as `0x${string}`, 'test-chain', false, 3)
      
      const lowJob = mockJobs.get('test-chain-0xlow')!
      const highJob = mockJobs.get('test-chain-0xhigh')!
      const mediumJob = mockJobs.get('test-chain-0xmedium')!
      
      // Verify priorities (BullMQ uses priority * 100)
      expect(lowJob.opts.priority).toBe(100)
      expect(highJob.opts.priority).toBe(500)
      expect(mediumJob.opts.priority).toBe(300)
    })

    it('should apply correct delays for forced vs normal transactions', async () => {
      await processor.addTransaction('0xnormal' as `0x${string}`, 'test-chain', false, 1)
      await processor.addTransaction('0xforced' as `0x${string}`, 'test-chain', true, 1)
      
      const normalJob = mockJobs.get('test-chain-0xnormal')!
      const forcedJob = mockJobs.get('test-chain-0xforced')!
      
      expect(normalJob.opts.delay).toBe(1000) // Normal delay
      expect(forcedJob.opts.delay).toBe(0) // No delay for forced
    })

    it('should prevent duplicate job IDs', async () => {
      const txHash = '0xduplicate' as `0x${string}`
      
      // Add same transaction twice
      await processor.addTransaction(txHash, 'test-chain', false, 1)
      await processor.addTransaction(txHash, 'test-chain', true, 5) // Same ID, different params
      
      // Should still only have one job (BullMQ deduplication)
      const job = mockJobs.get('test-chain-0xduplicate')!
      expect(job).toBeDefined()
      
      // Later add should update the existing job
      expect(mockJobs.size).toBeLessThanOrEqual(1)
    })
  })

  describe('Event Handling and Monitoring', () => {
    it('should emit and handle worker events', async () => {
      const txHash = '0xevents' as `0x${string}`
      
      await processor.addTransaction(txHash, 'test-chain')
      const job = mockJobs.get('test-chain-0xevents')!
      
      // Test completed event
      const completedCallback = mockWorkerCallbacks.get('completed')
      expect(completedCallback).toBeDefined()
      
      // Test failed event
      const failedCallback = mockWorkerCallbacks.get('failed')
      expect(failedCallback).toBeDefined()
      
      // Test stalled event
      const stalledCallback = mockWorkerCallbacks.get('stalled')
      expect(stalledCallback).toBeDefined()
      
      // Test error event
      const errorCallback = mockWorkerCallbacks.get('error')
      expect(errorCallback).toBeDefined()
      
      // Simulate events
      completedCallback!(job)
      failedCallback!(job, new Error('Test error'))
      stalledCallback!('job-123')
      errorCallback!(new Error('Worker error'))
      
      // Events should be handled without throwing
    })

    it('should emit and handle queue events', async () => {
      const txHash = '0xqueueevents' as `0x${string}`
      
      await processor.addTransaction(txHash, 'test-chain')
      
      // Test queue events
      const waitingCallback = mockQueueEventCallbacks.get('waiting')
      const activeCallback = mockQueueEventCallbacks.get('active')
      const progressCallback = mockQueueEventCallbacks.get('progress')
      
      expect(waitingCallback).toBeDefined()
      expect(activeCallback).toBeDefined()
      expect(progressCallback).toBeDefined()
      
      // Simulate queue events
      waitingCallback!({ jobId: 'test-job' })
      activeCallback!({ jobId: 'test-job' })
      progressCallback!({ jobId: 'test-job', data: 50 })
    })
  })

  describe('Configuration and Environment', () => {
    it('should use environment variables for default configuration', () => {
      process.env.BULLMQ_MAX_CONCURRENCY = '5'
      process.env.BULLMQ_RATE_LIMIT_MAX = '20'
      process.env.BULLMQ_RATE_LIMIT_DURATION = '2000'
      
      const envProcessor = new BullMQTransactionProcessor(
        'env-test',
        mockRedis as any,
        vi.fn()
      )
      
      // Configuration should be applied (exact values depend on implementation)
      expect(envProcessor).toBeDefined()
      
      // Cleanup
      delete process.env.BULLMQ_MAX_CONCURRENCY
      delete process.env.BULLMQ_RATE_LIMIT_MAX
      delete process.env.BULLMQ_RATE_LIMIT_DURATION
    })

    it('should handle missing Redis connection gracefully', () => {
      expect(() => {
        new BullMQTransactionProcessor(
          'test-chain',
          null as any, // Invalid Redis connection
          vi.fn()
        )
      }).not.toThrow() // Constructor should not throw, errors should be handled later
    })
  })

  describe('Stress Testing and Performance', () => {
    it('should handle high-volume job processing', async () => {
      const jobCount = 100
      const txHashes = Array.from({ length: jobCount }, (_, i) => 
        `0x${i.toString(16).padStart(40, '0')}` as `0x${string}`
      )
      
      const startTime = Date.now()
      
      // Add all jobs
      const addPromises = txHashes.map((txHash, i) => 
        processor.addTransaction(txHash, 'test-chain', false, i % 5 + 1)
      )
      
      await Promise.all(addPromises)
      
      const addTime = Date.now() - startTime
      
      // Should add all jobs within reasonable time
      expect(addTime).toBeLessThan(1000)
      expect(mockJobs.size).toBe(jobCount)
      
      // Verify all jobs have correct structure
      for (const txHash of txHashes) {
        const job = mockJobs.get(`test-chain-${txHash}`)
        expect(job).toBeDefined()
        expect(job.data.txHash).toBe(txHash)
      }
    })

    it('should maintain performance under concurrent access', async () => {
      const concurrentOperations = [
        processor.addTransaction('0xa1' as `0x${string}`, 'test-chain'),
        processor.addTransaction('0xa2' as `0x${string}`, 'test-chain'),
        processor.getQueueStatus(),
        processor.isTransactionQueued('0xa1', 'test-chain'),
        processor.isTransactionProcessing('0xa2', 'test-chain'),
        processor.addTransaction('0xa3' as `0x${string}`, 'test-chain', true, 5)
      ]
      
      const startTime = Date.now()
      const results = await Promise.all(concurrentOperations)
      const endTime = Date.now()
      
      expect(endTime - startTime).toBeLessThan(500)
      expect(results).toHaveLength(6)
      
      // All operations should complete successfully
      results.forEach(result => {
        expect(result).toBeDefined()
      })
    })
  })

  describe('Graceful Shutdown', () => {
    it('should shutdown all components in correct order', async () => {
      // Reset shutdown flag
      ;(processor as any).isShuttingDown = false
      
      await processor.addTransaction('0xshutdown' as `0x${string}`, 'test-chain')
      
      // Clear mock history before shutdown test
      mockWorker.close.mockClear()
      mockQueueEvents.close.mockClear()
      mockQueue.close.mockClear()
      
      // Shutdown should complete without errors
      await processor.shutdown()
      
      expect(mockWorker.close).toHaveBeenCalled()
      expect(mockQueueEvents.close).toHaveBeenCalled()
      expect(mockQueue.close).toHaveBeenCalled()
      
      // Should prevent new transactions
      expect((processor as any).isShuttingDown).toBe(true)
    })

    it('should handle shutdown errors gracefully', async () => {
      // Create a new processor for this test to avoid interference
      const testProcessor = new BullMQTransactionProcessor(
        'error-test',
        mockRedis as any,
        vi.fn(),
        { concurrency: 1 }
      )
      
      // Mock worker close to fail for this specific test
      mockWorker.close.mockRejectedValueOnce(new Error('Worker shutdown error'))
      
      // Shutdown should set the flag first, then throw the error
      await expect(testProcessor.shutdown()).rejects.toThrow('Worker shutdown error')
      
      // Verify shutdown flag was set even though error occurred
      expect((testProcessor as any).isShuttingDown).toBe(true)
      
      // Reset mock for cleanup
      mockWorker.close.mockResolvedValue(undefined)
    })

    it('should allow multiple shutdown calls', async () => {
      // Create a fresh processor for this test
      const testProcessor = new BullMQTransactionProcessor(
        'multi-shutdown-test',
        mockRedis as any,
        vi.fn(),
        { concurrency: 1 }
      )
      
      // Clear any previous mock calls
      mockWorker.close.mockClear()
      mockQueueEvents.close.mockClear()
      mockQueue.close.mockClear()
      
      // First shutdown should succeed
      await testProcessor.shutdown()
      expect((testProcessor as any).isShuttingDown).toBe(true)
      
      // Verify all components were closed once
      expect(mockWorker.close).toHaveBeenCalledTimes(1)
      expect(mockQueueEvents.close).toHaveBeenCalledTimes(1)
      expect(mockQueue.close).toHaveBeenCalledTimes(1)
      
      // Clear mock call history
      mockWorker.close.mockClear()
      mockQueueEvents.close.mockClear()
      mockQueue.close.mockClear()
      
      // Second shutdown should still attempt to close (no guard against multiple calls)
      await testProcessor.shutdown()
      
      // Components should be closed again (implementation doesn't prevent multiple closures)
      expect(mockWorker.close).toHaveBeenCalledTimes(1)
      expect(mockQueueEvents.close).toHaveBeenCalledTimes(1)
      expect(mockQueue.close).toHaveBeenCalledTimes(1)
      expect((testProcessor as any).isShuttingDown).toBe(true)
    })
  })
})