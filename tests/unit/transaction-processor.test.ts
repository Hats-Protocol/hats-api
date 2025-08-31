import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import RedisMock from 'ioredis-mock'
import { BullMQTransactionProcessor, type TransactionJobData } from '../../src/bullmq-transaction-processor'

// Mock BullMQ
const mockQueue = {
  add: vi.fn(),
  getJobCounts: vi.fn(),
  getJob: vi.fn(),
  pause: vi.fn(),
  resume: vi.fn(),
  drain: vi.fn(),
  close: vi.fn().mockResolvedValue(undefined)
}

const mockWorker = {
  on: vi.fn(),
  close: vi.fn().mockResolvedValue(undefined)
}

const mockQueueEvents = {
  on: vi.fn(),
  close: vi.fn().mockResolvedValue(undefined)
}

const mockJob = {
  id: 'test-job-id',
  data: { txHash: '0xtest' as `0x${string}`, chainId: '1', force: false },
  timestamp: Date.now(),
  attemptsMade: 0,
  opts: { attempts: 3 },
  updateProgress: vi.fn(),
  getState: vi.fn()
}

// Store the job processor function
let jobProcessorFn: any = null

vi.mock('bullmq', () => ({
  Queue: vi.fn().mockImplementation(() => mockQueue),
  Worker: vi.fn().mockImplementation((queueName: string, processor: any) => {
    jobProcessorFn = processor
    return mockWorker
  }),
  QueueEvents: vi.fn().mockImplementation(() => mockQueueEvents)
}))

describe('BullMQTransactionProcessor', () => {
  let processor: BullMQTransactionProcessor
  let mockRedis: RedisMock
  let mockProcessCallback: vi.Mock

  beforeEach(() => {
    vi.clearAllMocks()
    mockRedis = new RedisMock()
    mockProcessCallback = vi.fn().mockResolvedValue(undefined)
    
    processor = new BullMQTransactionProcessor(
      '1', // chainId
      mockRedis as any,
      mockProcessCallback,
      {
        concurrency: 2,
        maxRateLimit: 5,
        rateLimitDuration: 1000,
        maxAttempts: 3,
        backoffDelay: 1000
      }
    )
  })

  afterEach(async () => {
    await processor.shutdown()
  })

  describe('constructor', () => {
    it('should initialize with correct configuration', () => {
      expect(mockWorker.on).toHaveBeenCalledTimes(4) // completed, failed, stalled, error
      expect(mockQueueEvents.on).toHaveBeenCalledTimes(3) // waiting, active, progress
    })

    it('should use environment variables for default config', () => {
      process.env.BULLMQ_MAX_CONCURRENCY = '5'
      process.env.BULLMQ_RATE_LIMIT_MAX = '20'
      process.env.BULLMQ_RATE_LIMIT_DURATION = '2000'

      const defaultProcessor = new BullMQTransactionProcessor('1', mockRedis as any, mockProcessCallback)
      
      // Should use env values
      expect(defaultProcessor).toBeDefined()
      
      delete process.env.BULLMQ_MAX_CONCURRENCY
      delete process.env.BULLMQ_RATE_LIMIT_MAX
      delete process.env.BULLMQ_RATE_LIMIT_DURATION
    })
  })

  describe('addTransaction', () => {
    beforeEach(() => {
      mockQueue.add.mockResolvedValue({ id: 'job-123' })
    })

    it('should add transaction to queue with correct parameters', async () => {
      const txHash = '0x123abc' as `0x${string}`
      const chainId = '1'
      
      const jobId = await processor.addTransaction(txHash, chainId, false, 2)

      expect(mockQueue.add).toHaveBeenCalledWith(
        'process-transaction',
        { txHash, chainId, force: false },
        {
          jobId: `${chainId}-${txHash}`,
          priority: 200, // 2 * 100
          delay: 1000, // Not forced, so has delay
          removeOnComplete: true,
          removeOnFail: false
        }
      )
      expect(jobId).toBe('job-123')
    })

    it('should add forced transaction with higher priority and no delay', async () => {
      const txHash = '0x456def' as `0x${string}`
      
      await processor.addTransaction(txHash, '1', true, 5)

      expect(mockQueue.add).toHaveBeenCalledWith(
        'process-transaction',
        { txHash, chainId: '1', force: true },
        {
          jobId: '1-0x456def',
          priority: 500, // 5 * 100
          delay: 0, // Forced, so no delay
          removeOnComplete: true,
          removeOnFail: false
        }
      )
    })

    it('should handle queue errors', async () => {
      mockQueue.add.mockRejectedValue(new Error('Queue full'))

      await expect(
        processor.addTransaction('0xtest' as `0x${string}`, '1')
      ).rejects.toThrow('Queue full')
    })

    it('should reject when shutting down', async () => {
      ;(processor as any).isShuttingDown = true

      await expect(
        processor.addTransaction('0xtest' as `0x${string}`, '1')
      ).rejects.toThrow('Processor is shutting down, cannot add new transactions')
    })
  })

  describe('getQueueStatus', () => {
    it('should return queue status with default values', async () => {
      mockQueue.getJobCounts.mockResolvedValue({
        waiting: 5,
        active: 2,
        completed: 100,
        failed: 3,
        delayed: 1
        // paused is undefined
      })

      const status = await processor.getQueueStatus()

      expect(status).toEqual({
        waiting: 5,
        active: 2,
        completed: 100,
        failed: 3,
        delayed: 1,
        paused: 0 // Default value
      })
    })

    it('should handle empty job counts', async () => {
      mockQueue.getJobCounts.mockResolvedValue({})

      const status = await processor.getQueueStatus()

      expect(status).toEqual({
        waiting: 0,
        active: 0,
        completed: 0,
        failed: 0,
        delayed: 0,
        paused: 0
      })
    })
  })

  describe('job processing', () => {
    it('should process jobs and call the callback', async () => {
      // Use the captured job processor function
      expect(jobProcessorFn).toBeDefined()
      await jobProcessorFn(mockJob)

      expect(mockProcessCallback).toHaveBeenCalledWith(
        mockJob.data.txHash,
        mockJob.data.chainId,
        mockJob.data.force
      )
      expect(mockJob.updateProgress).toHaveBeenCalledWith(10)
      expect(mockJob.updateProgress).toHaveBeenCalledWith(100)
    })

    it('should handle job processing errors', async () => {
      mockProcessCallback.mockRejectedValue(new Error('Processing failed'))

      expect(jobProcessorFn).toBeDefined()
      await expect(jobProcessorFn(mockJob)).rejects.toThrow('Processing failed')
      expect(mockJob.updateProgress).toHaveBeenCalledWith(10)
      expect(mockJob.updateProgress).not.toHaveBeenCalledWith(100)
    })

    it('should reject jobs when shutting down', async () => {
      ;(processor as any).isShuttingDown = true

      expect(jobProcessorFn).toBeDefined()
      await expect(jobProcessorFn(mockJob)).rejects.toThrow('Worker is shutting down')
      expect(mockProcessCallback).not.toHaveBeenCalled()
    })
  })

  describe('transaction state queries', () => {
    it('should check if transaction is queued', async () => {
      const mockJobQueued = { ...mockJob, getState: vi.fn().mockResolvedValue('waiting') }
      mockQueue.getJob.mockResolvedValue(mockJobQueued)

      const isQueued = await processor.isTransactionQueued('0xtest', '1')

      expect(mockQueue.getJob).toHaveBeenCalledWith('1-0xtest')
      expect(isQueued).toBe(true)
    })

    it('should return false for completed transactions', async () => {
      const mockJobCompleted = { ...mockJob, getState: vi.fn().mockResolvedValue('completed') }
      mockQueue.getJob.mockResolvedValue(mockJobCompleted)

      const isQueued = await processor.isTransactionQueued('0xtest', '1')

      expect(isQueued).toBe(false)
    })

    it('should return false when job not found', async () => {
      mockQueue.getJob.mockResolvedValue(undefined)

      const isQueued = await processor.isTransactionQueued('0xtest', '1')

      expect(isQueued).toBe(false)
    })

    it('should check if transaction is processing', async () => {
      const mockJobActive = { ...mockJob, getState: vi.fn().mockResolvedValue('active') }
      mockQueue.getJob.mockResolvedValue(mockJobActive)

      const isProcessing = await processor.isTransactionProcessing('0xtest', '1')

      expect(isProcessing).toBe(true)
    })
  })

  describe('queue management', () => {
    it('should pause queue', async () => {
      await processor.pauseQueue()
      expect(mockQueue.pause).toHaveBeenCalled()
    })

    it('should resume queue', async () => {
      await processor.resumeQueue()
      expect(mockQueue.resume).toHaveBeenCalled()
    })

    it('should clear queue', async () => {
      await processor.clearQueue()
      expect(mockQueue.drain).toHaveBeenCalled()
    })
  })

  describe('shutdown', () => {
    it('should shutdown gracefully', async () => {
      await processor.shutdown()

      expect(mockWorker.close).toHaveBeenCalled()
      expect(mockQueueEvents.close).toHaveBeenCalled()
      expect(mockQueue.close).toHaveBeenCalled()
      expect((processor as any).isShuttingDown).toBe(true)
    })

    it('should handle shutdown errors', async () => {
      mockWorker.close.mockRejectedValueOnce(new Error('Worker close error'))

      await expect(processor.shutdown()).rejects.toThrow('Worker close error')
    })
  })

  describe('getters', () => {
    it('should return queue instance', () => {
      const queue = processor.getQueue()
      expect(queue).toBe(mockQueue)
    })

    it('should return worker instance', () => {
      const worker = processor.getWorker()
      expect(worker).toBe(mockWorker)
    })
  })
})