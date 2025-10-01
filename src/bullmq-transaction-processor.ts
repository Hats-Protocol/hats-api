import { Queue, Worker, Job, QueueEvents } from 'bullmq';
import type { Redis } from 'ioredis';
import logger from './log';
import {
  WEBSOCKET_RETRY_ATTEMPTS,
  WEBSOCKET_RETRY_DELAY,
  CHAIN_ID_TO_NETWORK_NAME,
} from './constants';
import { TransactionNotFoundError, SubgraphSyncError } from './errors';
import { formatTxHash } from './utils';
import { sendSubgraphFailureNotification } from './telegram-notifier';

export interface TransactionJobData {
  txHash: `0x${string}`;
  chainId: string;
  force?: boolean;
}

export interface BullMQProcessorConfig {
  concurrency?: number;
  maxRateLimit?: number;
  rateLimitDuration?: number;
  maxAttempts?: number;
  backoffDelay?: number;
}

export interface BlockInfoProvider {
  getCurrentBlock: () => Promise<bigint | null>;
  getSubgraphBlock: () => Promise<bigint | null>;
}

export interface JobContext {
  jobId: string;
  attempt: number;
  maxAttempts: number;
  job?: Job<TransactionJobData>;
}

export class BullMQTransactionProcessor {
  private queue: Queue<TransactionJobData>;
  private worker: Worker<TransactionJobData>;
  private queueEvents: QueueEvents;
  private redis: Redis;
  private chainId: string;
  private isShuttingDown = false;
  private blockInfoProvider?: BlockInfoProvider;

  constructor(
    chainId: string,
    redis: Redis,
    processCallback: (txHash: `0x${string}`, chainId: string, force?: boolean, jobContext?: JobContext) => Promise<void>,
    config: BullMQProcessorConfig = {},
    blockInfoProvider?: BlockInfoProvider
  ) {
    this.chainId = chainId;
    this.redis = redis;
    this.blockInfoProvider = blockInfoProvider;

    const {
      concurrency = parseInt(process.env.BULLMQ_MAX_CONCURRENCY || '3'),
      maxRateLimit = parseInt(process.env.BULLMQ_RATE_LIMIT_MAX || '10'),
      rateLimitDuration = parseInt(process.env.BULLMQ_RATE_LIMIT_DURATION || '1000'),
      maxAttempts = WEBSOCKET_RETRY_ATTEMPTS,
      backoffDelay = WEBSOCKET_RETRY_DELAY,
    } = config;

    const networkName = CHAIN_ID_TO_NETWORK_NAME[chainId] || `Chain-${chainId}`;
    const queueName = networkName;

    // Create queue with Redis connection
    this.queue = new Queue<TransactionJobData>(queueName, {
      connection: redis,
      defaultJobOptions: {
        removeOnComplete: 200, // Keep last 200 completed jobs for auditability
        removeOnFail: 100,     // Keep last 100 failed jobs for debugging
        attempts: maxAttempts,
        backoff: {
          type: 'exponential',
          delay: backoffDelay,
        },
        delay: 0,
      },
    });

    // Create worker
    this.worker = new Worker<TransactionJobData>(
      queueName,
      async (job: Job<TransactionJobData>) => {
        if (this.isShuttingDown) {
          throw new Error('Worker is shutting down');
        }

        const { txHash, chainId, force } = job.data;

        await job.log(`Processing transaction \`${formatTxHash(txHash)}\` (attempt ${job.attemptsMade + 1}/${job.opts.attempts})`);

        // Update job progress
        await job.updateProgress(10);

        const jobContext: JobContext = {
          jobId: job.id?.toString() || 'unknown',
          attempt: job.attemptsMade + 1,
          maxAttempts: job.opts.attempts || 1,
          job: job,
        };

        try {
          await processCallback(txHash, chainId, force, jobContext);
          await job.updateProgress(100);
        } catch (error) {
          // Don't retry for TransactionNotFoundError - transaction doesn't exist
          if (error instanceof TransactionNotFoundError) {
            await job.log(`Transaction not found, marking as permanently failed (attempt ${job.attemptsMade + 1})`);
            // Mark job as failed without retry by setting attempts to max
            job.opts.attempts = job.attemptsMade + 1;
          }

          await job.log(`Failed to process transaction \`${formatTxHash(txHash)}\` - ${error instanceof Error ? error.message : 'Unknown error'} (attempt ${job.attemptsMade + 1})`);
          throw error; // Re-throw to let BullMQ handle retries (or immediate failure for TransactionNotFoundError)
        }
      },
      {
        connection: redis,
        concurrency,
        limiter: {
          max: maxRateLimit,
          duration: rateLimitDuration,
        },
      }
    );

    // Create queue events for monitoring
    this.queueEvents = new QueueEvents(queueName, {
      connection: redis,
    });

    this.setupEventHandlers();
  }

  private setupEventHandlers(): void {
    // Worker events
    this.worker.on('completed', (job: Job<TransactionJobData>) => {
      // Completion message is logged by the transaction processor itself
    });

    this.worker.on('failed', async (job: Job<TransactionJobData> | undefined, err: Error) => {
      if (!job) return;

      const isLastAttempt = (job.attemptsMade + 1) >= (job.opts.attempts || 1);

      // Calculate retry delay for non-final attempts
      let retryDelayMs: number | null = null;
      let nextRunTime: Date | null = null;

      if (!isLastAttempt && job.opts.backoff) {
        if (typeof job.opts.backoff === 'object' && job.opts.backoff.type === 'exponential') {
          const baseDelay = job.opts.backoff.delay || WEBSOCKET_RETRY_DELAY;
          retryDelayMs = Math.min(baseDelay * Math.pow(2, job.attemptsMade), 60000); // Cap at 60 seconds
          nextRunTime = new Date(Date.now() + retryDelayMs);
        } else if (typeof job.opts.backoff === 'object' && job.opts.backoff.type === 'fixed') {
          retryDelayMs = job.opts.backoff.delay || WEBSOCKET_RETRY_DELAY;
          nextRunTime = new Date(Date.now() + retryDelayMs);
        } else if (typeof job.opts.backoff === 'number') {
          // Simple delay
          retryDelayMs = job.opts.backoff;
          nextRunTime = new Date(Date.now() + retryDelayMs);
        }
      }

      // Enhanced logging for subgraph timeouts with retry details
      if (err instanceof SubgraphSyncError && !isLastAttempt) {
        const retryMessage = retryDelayMs
          ? `Subgraph sync timeout, will retry in ${Math.round(retryDelayMs / 1000)} seconds at ${nextRunTime?.toLocaleString()}`
          : 'Subgraph sync timeout, will retry';

        await job.log(retryMessage);

        logger.log({
          level: 'warn',
          message: `BullMQ: Subgraph sync timeout, will retry with delay`,
          jobId: job.id,
          chainId: job.data.chainId,
          txHash: job.data.txHash,
          error: err.message,
          attempt: job.attemptsMade + 1,
          maxAttempts: job.opts.attempts,
          retryDelayMs,
          retryDelaySeconds: retryDelayMs ? Math.round(retryDelayMs / 1000) : null,
          nextRunTime: nextRunTime?.toISOString(),
          nextRunTimeLocal: nextRunTime?.toLocaleString(),
        });
      } else {
        if (!isLastAttempt && retryDelayMs) {
          const retryMessage = `Processing failed, will retry in ${Math.round(retryDelayMs / 1000)} seconds at ${nextRunTime?.toLocaleString()}`;
          await job.log(retryMessage);
        }

        logger.log({
          level: isLastAttempt ? 'error' : 'warn',
          message: `BullMQ: Transaction processing ${isLastAttempt ? 'failed permanently' : 'failed, will retry'}`,
          jobId: job.id,
          chainId: job.data.chainId,
          txHash: job.data.txHash,
          error: err,
          attempt: job.attemptsMade + 1,
          maxAttempts: job.opts.attempts,
          retryDelayMs,
          retryDelaySeconds: retryDelayMs ? Math.round(retryDelayMs / 1000) : null,
          nextRunTime: nextRunTime?.toISOString(),
          nextRunTimeLocal: nextRunTime?.toLocaleString(),
        });
      }

      // Send notification for subgraph sync failures on final attempt
      if (isLastAttempt && err instanceof SubgraphSyncError && this.blockInfoProvider) {
        try {
          await job.log('Sending subgraph failure notification to team');

          // Get current blockchain and subgraph block numbers
          const [currentBlock, subgraphBlock] = await Promise.allSettled([
            this.blockInfoProvider.getCurrentBlock(),
            this.blockInfoProvider.getSubgraphBlock(),
          ]);

          const currentBlockNumber = currentBlock.status === 'fulfilled' ? currentBlock.value : null;
          const subgraphBlockNumber = subgraphBlock.status === 'fulfilled' ? subgraphBlock.value : null;

          const notificationSent = await sendSubgraphFailureNotification({
            chainId: job.data.chainId,
            txHash: job.data.txHash,
            currentBlock: currentBlockNumber,
            subgraphBlock: subgraphBlockNumber,
            error: err.message,
            attempt: job.attemptsMade + 1,
            maxAttempts: job.opts.attempts || 1,
          });

          await job.log(`Subgraph failure notification ${notificationSent ? 'sent successfully' : 'failed or rate limited'}`);

          logger.log({
            level: 'info',
            message: `Subgraph failure notification ${notificationSent ? 'sent' : 'skipped'}`,
            jobId: job.id,
            chainId: job.data.chainId,
            txHash: job.data.txHash,
            currentBlock: currentBlockNumber?.toString(),
            subgraphBlock: subgraphBlockNumber?.toString(),
          });
        } catch (notificationError) {
          await job.log(`Failed to send subgraph failure notification: ${notificationError instanceof Error ? notificationError.message : 'Unknown error'}`);

          logger.log({
            level: 'error',
            message: 'Failed to send subgraph failure notification',
            jobId: job.id,
            chainId: job.data.chainId,
            txHash: job.data.txHash,
            error: notificationError,
          });
        }
      }
    });

    this.worker.on('stalled', (jobId: string) => {
      logger.log({
        level: 'warn',
        message: `BullMQ: Job stalled and will be retried`,
        jobId,
        chainId: this.chainId,
      });
    });

    this.worker.on('error', (error: Error) => {
      logger.log({
        level: 'error',
        message: `BullMQ: Worker error`,
        chainId: this.chainId,
        error,
      });
    });

    // Queue events for additional monitoring
    this.queueEvents.on('waiting', ({ jobId }) => {
      logger.log({
        level: 'debug',
        message: `BullMQ: Job added to queue`,
        jobId,
        chainId: this.chainId,
      });
    });

    this.queueEvents.on('active', ({ jobId }) => {
      logger.log({
        level: 'debug',
        message: `BullMQ: Job started processing`,
        jobId,
        chainId: this.chainId,
      });
    });

    this.queueEvents.on('progress', ({ jobId, data }) => {
      logger.log({
        level: 'debug',
        message: `BullMQ: Job progress update`,
        jobId,
        chainId: this.chainId,
        progress: data,
      });
    });
  }

  async addTransaction(
    txHash: `0x${string}`,
    chainId: string,
    force = false,
    priority = 1
  ): Promise<{
    jobId: string;
    status: 'queued' | 'requeued' | 'already_processing' | 'already_queued';
    previousState?: string;
    message: string;
  }> {
    if (this.isShuttingDown) {
      throw new Error('Processor is shutting down, cannot add new transactions');
    }

    const jobId = `${chainId}-${txHash}`;

    try {
      // Check if job already exists
      const existingJob = await this.queue.getJob(jobId);

      if (existingJob) {
        const existingState = await existingJob.getState();

        // Handle force flag
        if (force) {
          // Force: Remove existing job regardless of state and re-queue
          await existingJob.remove();

          const newJob = await this.queue.add(
            'process-transaction',
            { txHash, chainId, force },
            {
              jobId,
              priority: priority * 100,
              delay: 0, // Immediate processing when forced
              removeOnComplete: false,
              removeOnFail: false,
            }
          );

          logger.log({
            level: 'info',
            message: `BullMQ: Transaction force re-queued (was ${existingState})`,
            jobId: newJob.id,
            chainId,
            txHash,
            force,
            priority,
            previousState: existingState,
          });

          return {
            jobId: newJob.id!,
            status: 'requeued',
            previousState: existingState,
            message: `Transaction force re-queued for processing (was ${existingState})`,
          };
        } else {
          // No force: Handle based on existing state
          if (existingState === 'active') {
            logger.log({
              level: 'info',
              message: `BullMQ: Transaction already processing`,
              jobId,
              chainId,
              txHash,
            });

            return {
              jobId,
              status: 'already_processing',
              previousState: existingState,
              message: 'Transaction is already being processed',
            };
          } else if (existingState === 'waiting' || existingState === 'delayed') {
            logger.log({
              level: 'info',
              message: `BullMQ: Transaction already queued`,
              jobId,
              chainId,
              txHash,
              state: existingState,
            });

            return {
              jobId,
              status: 'already_queued',
              previousState: existingState,
              message: `Transaction is already in queue (${existingState})`,
            };
          } else if (existingState === 'completed' || existingState === 'failed') {
            // Completed or failed: Allow re-queue
            await existingJob.remove();

            const newJob = await this.queue.add(
              'process-transaction',
              { txHash, chainId, force },
              {
                jobId,
                priority: priority * 100,
                delay: 1000, // Normal delay when not forced
                removeOnComplete: false,
                removeOnFail: false,
              }
            );

            logger.log({
              level: 'info',
              message: `BullMQ: Transaction re-queued (was ${existingState})`,
              jobId: newJob.id,
              chainId,
              txHash,
              force,
              priority,
              previousState: existingState,
            });

            return {
              jobId: newJob.id!,
              status: 'requeued',
              previousState: existingState,
              message: `Transaction re-queued for processing (was ${existingState})`,
            };
          } else {
            // Unknown state, log warning and try to re-queue
            logger.log({
              level: 'warn',
              message: `BullMQ: Unknown job state, attempting re-queue`,
              jobId,
              chainId,
              txHash,
              state: existingState,
            });

            await existingJob.remove();
            const newJob = await this.queue.add(
              'process-transaction',
              { txHash, chainId, force },
              {
                jobId,
                priority: priority * 100,
                delay: 1000,
                removeOnComplete: false,
                removeOnFail: false,
              }
            );

            return {
              jobId: newJob.id!,
              status: 'requeued',
              previousState: existingState,
              message: `Transaction re-queued for processing (was ${existingState})`,
            };
          }
        }
      } else {
        // No existing job, add normally
        const job = await this.queue.add(
          'process-transaction',
          { txHash, chainId, force },
          {
            jobId,
            priority: priority * 100,
            delay: force ? 0 : 1000,
            removeOnComplete: false,
            removeOnFail: false,
          }
        );

        logger.log({
          level: 'info',
          message: `BullMQ: Transaction added to queue`,
          jobId: job.id,
          chainId,
          txHash,
          force,
          priority,
        });

        return {
          jobId: job.id!,
          status: 'queued',
          message: 'Transaction queued for processing',
        };
      }
    } catch (error) {
      logger.log({
        level: 'error',
        message: `BullMQ: Failed to add transaction to queue`,
        chainId,
        txHash,
        error,
      });
      throw error;
    }
  }

  async getQueueStatus(): Promise<{
    waiting: number;
    active: number;
    completed: number;
    failed: number;
    delayed: number;
    paused: number;
  }> {
    const counts = await this.queue.getJobCounts();
    return {
      waiting: counts.waiting || 0,
      active: counts.active || 0,
      completed: counts.completed || 0,
      failed: counts.failed || 0,
      delayed: counts.delayed || 0,
      paused: counts.paused || 0,
    };
  }

  async getJob(jobId: string): Promise<Job<TransactionJobData> | undefined> {
    return await this.queue.getJob(jobId);
  }

  async isTransactionQueued(txHash: string, chainId: string): Promise<boolean> {
    const jobId = `${chainId}-${txHash}`;
    const job = await this.queue.getJob(jobId);
    return job !== undefined && !['completed', 'failed'].includes(await job.getState());
  }

  async isTransactionProcessing(txHash: string, chainId: string): Promise<boolean> {
    const jobId = `${chainId}-${txHash}`;
    const job = await this.queue.getJob(jobId);
    return job !== undefined && (await job.getState()) === 'active';
  }

  async pauseQueue(): Promise<void> {
    await this.queue.pause();
    logger.log({
      level: 'info',
      message: `BullMQ: Queue paused`,
      chainId: this.chainId,
    });
  }

  async resumeQueue(): Promise<void> {
    await this.queue.resume();
    logger.log({
      level: 'info',
      message: `BullMQ: Queue resumed`,
      chainId: this.chainId,
    });
  }

  async clearQueue(): Promise<void> {
    await this.queue.drain();
    logger.log({
      level: 'info',
      message: `BullMQ: Queue cleared`,
      chainId: this.chainId,
    });
  }

  async shutdown(): Promise<void> {
    this.isShuttingDown = true;

    logger.log({
      level: 'info',
      message: `BullMQ: Starting graceful shutdown`,
      chainId: this.chainId,
    });

    try {
      // Close worker first to stop processing new jobs
      await this.worker.close();

      // Close queue events
      await this.queueEvents.close();

      // Close queue
      await this.queue.close();

      logger.log({
        level: 'info',
        message: `BullMQ: Graceful shutdown completed`,
        chainId: this.chainId,
      });
    } catch (error) {
      logger.log({
        level: 'error',
        message: `BullMQ: Error during shutdown`,
        chainId: this.chainId,
        error,
      });
      throw error;
    }
  }

  // Getter for the queue instance (useful for monitoring dashboard)
  getQueue(): Queue<TransactionJobData> {
    return this.queue;
  }

  getWorker(): Worker<TransactionJobData> {
    return this.worker;
  }
}