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
  getState: vi.fn(),
  log: vi.fn()
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
  let mockProcessCallback: ReturnType<typeof vi.fn>

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
      mockQueue.getJob.mockResolvedValue(undefined) // Default: no existing job
    })

    it('should add new transaction to queue with correct parameters', async () => {
      const txHash = '0x123abc' as `0x${string}`
      const chainId = '1'

      const result = await processor.addTransaction(txHash, chainId, false, 2)

      expect(mockQueue.add).toHaveBeenCalledWith(
        'process-transaction',
        { txHash, chainId, force: false },
        {
          jobId: `${chainId}-${txHash}`,
          priority: 200, // 2 * 100
          delay: 1000, // Not forced, so has delay
        }
      )
      expect(result.jobId).toBe('job-123')
      expect(result.status).toBe('queued')
      expect(result.message).toBe('Transaction queued for processing')
    })

    it('should add forced transaction with higher priority and no delay', async () => {
      const txHash = '0x456def' as `0x${string}`

      const result = await processor.addTransaction(txHash, '1', true, 5)

      expect(mockQueue.add).toHaveBeenCalledWith(
        'process-transaction',
        { txHash, chainId: '1', force: true },
        {
          jobId: '1-0x456def',
          priority: 500, // 5 * 100
          delay: 0, // Forced, so no delay
        }
      )
      expect(result.status).toBe('queued')
    })

    it('should force re-queue existing job when force=true', async () => {
      const txHash = '0xforce123' as `0x${string}`
      const chainId = '1'
      const mockExistingJob = {
        id: 'existing-job',
        getState: vi.fn().mockResolvedValue('completed'),
        remove: vi.fn().mockResolvedValue(undefined)
      }

      mockQueue.getJob.mockResolvedValue(mockExistingJob)
      mockQueue.add.mockResolvedValue({ id: 'new-job-123' })

      const result = await processor.addTransaction(txHash, chainId, true, 1)

      expect(mockExistingJob.remove).toHaveBeenCalled()
      expect(mockQueue.add).toHaveBeenCalled()
      expect(result.jobId).toBe('new-job-123')
      expect(result.status).toBe('requeued')
      expect(result.previousState).toBe('completed')
      expect(result.message).toContain('force re-queued')
    })

    it('should return already_processing for active job without force', async () => {
      const txHash = '0xactive123' as `0x${string}`
      const chainId = '1'
      const mockExistingJob = {
        id: 'active-job',
        getState: vi.fn().mockResolvedValue('active'),
        remove: vi.fn()
      }

      mockQueue.getJob.mockResolvedValue(mockExistingJob)

      const result = await processor.addTransaction(txHash, chainId, false, 1)

      expect(mockExistingJob.remove).not.toHaveBeenCalled()
      expect(mockQueue.add).not.toHaveBeenCalled()
      expect(result.status).toBe('already_processing')
      expect(result.previousState).toBe('active')
      expect(result.message).toBe('Transaction is already being processed')
    })

    it('should return already_queued for waiting job without force', async () => {
      const txHash = '0xwaiting123' as `0x${string}`
      const chainId = '1'
      const mockExistingJob = {
        id: 'waiting-job',
        getState: vi.fn().mockResolvedValue('waiting'),
        remove: vi.fn()
      }

      mockQueue.getJob.mockResolvedValue(mockExistingJob)

      const result = await processor.addTransaction(txHash, chainId, false, 1)

      expect(mockExistingJob.remove).not.toHaveBeenCalled()
      expect(mockQueue.add).not.toHaveBeenCalled()
      expect(result.status).toBe('already_queued')
      expect(result.previousState).toBe('waiting')
      expect(result.message).toContain('already in queue')
    })

    it('should re-queue completed job without force', async () => {
      const txHash = '0xcompleted123' as `0x${string}`
      const chainId = '1'
      const mockExistingJob = {
        id: 'completed-job',
        getState: vi.fn().mockResolvedValue('completed'),
        remove: vi.fn().mockResolvedValue(undefined)
      }

      mockQueue.getJob.mockResolvedValue(mockExistingJob)
      mockQueue.add.mockResolvedValue({ id: 'requeued-job' })

      const result = await processor.addTransaction(txHash, chainId, false, 1)

      expect(mockExistingJob.remove).toHaveBeenCalled()
      expect(mockQueue.add).toHaveBeenCalled()
      expect(result.status).toBe('requeued')
      expect(result.previousState).toBe('completed')
      expect(result.message).toContain('re-queued for processing (was completed)')
    })

    it('should re-queue failed job without force', async () => {
      const txHash = '0xfailed123' as `0x${string}`
      const chainId = '1'
      const mockExistingJob = {
        id: 'failed-job',
        getState: vi.fn().mockResolvedValue('failed'),
        remove: vi.fn().mockResolvedValue(undefined)
      }

      mockQueue.getJob.mockResolvedValue(mockExistingJob)
      mockQueue.add.mockResolvedValue({ id: 'requeued-job' })

      const result = await processor.addTransaction(txHash, chainId, false, 1)

      expect(mockExistingJob.remove).toHaveBeenCalled()
      expect(mockQueue.add).toHaveBeenCalled()
      expect(result.status).toBe('requeued')
      expect(result.previousState).toBe('failed')
      expect(result.message).toContain('re-queued for processing (was failed)')
    })

    it('should handle queue errors', async () => {
      mockQueue.getJob.mockResolvedValue(undefined)
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
        mockJob.data.force,
        expect.objectContaining({
          jobId: 'test-job-id',
          attempt: 1,
          maxAttempts: 3,
          job: mockJob
        })
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