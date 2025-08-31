// Example integration of BullMQ transaction processing with Express server
import express from 'express';
import { CacheInvalidationManager } from './invalidation';
import { RedisCacheClient } from './redis';
import { BullDashboardSetup } from './bull-dashboard';
import logger from './log';

export class ServerWithBullMQ {
  private app: express.Express;
  private invalidationManager: CacheInvalidationManager;
  private bullDashboardSetup: BullDashboardSetup;

  constructor() {
    this.app = express();
    this.invalidationManager = new CacheInvalidationManager();
    this.bullDashboardSetup = new BullDashboardSetup();
    
    this.setupMiddleware();
    this.setupRoutes();
    this.setupBullMQDashboard();
    this.setupGracefulShutdown();
  }

  private setupMiddleware(): void {
    this.app.use(express.json());
  }

  private setupRoutes(): void {
    // Health check endpoint
    this.app.get('/health', async (req, res) => {
      try {
        const health = await BullDashboardSetup.healthCheck(this.invalidationManager);
        res.status(health.status === 'healthy' ? 200 : 503).json(health);
      } catch (error) {
        res.status(503).json({ status: 'unhealthy', error: 'Health check failed' });
      }
    });

    // Queue statistics API
    this.app.get('/api/queue-stats', async (req, res) => {
      try {
        const stats = await BullDashboardSetup.getQueueStats(this.invalidationManager);
        res.json(stats);
      } catch (error) {
        res.status(500).json({ error: 'Failed to get queue statistics' });
      }
    });

    // Manual transaction processing endpoint
    this.app.post('/api/process-transaction', async (req, res) => {
      const { txHash, networkId, force } = req.body;
      
      if (!txHash || !networkId) {
        return res.status(400).json({ error: 'txHash and networkId are required' });
      }

      try {
        await this.invalidationManager.processTransaction(txHash, networkId, force);
        res.json({ 
          message: 'Transaction queued for processing', 
          txHash, 
          networkId,
          force: !!force 
        });
      } catch (error) {
        logger.log({
          level: 'error',
          message: 'Failed to queue transaction',
          txHash,
          networkId,
          error,
        });
        res.status(500).json({ error: 'Failed to queue transaction' });
      }
    });

    // Queue management endpoints
    this.app.post('/api/queue/:chainId/pause', async (req, res) => {
      const { chainId } = req.params;
      const service = this.invalidationManager.getServiceForChain(chainId);
      
      if (!service) {
        return res.status(404).json({ error: 'Chain not supported' });
      }

      try {
        await service.pauseTransactionProcessing();
        res.json({ message: `Queue paused for chain ${chainId}` });
      } catch (error) {
        res.status(500).json({ error: 'Failed to pause queue' });
      }
    });

    this.app.post('/api/queue/:chainId/resume', async (req, res) => {
      const { chainId } = req.params;
      const service = this.invalidationManager.getServiceForChain(chainId);
      
      if (!service) {
        return res.status(404).json({ error: 'Chain not supported' });
      }

      try {
        await service.resumeTransactionProcessing();
        res.json({ message: `Queue resumed for chain ${chainId}` });
      } catch (error) {
        res.status(500).json({ error: 'Failed to resume queue' });
      }
    });

    this.app.post('/api/queue/:chainId/clear', async (req, res) => {
      const { chainId } = req.params;
      const service = this.invalidationManager.getServiceForChain(chainId);
      
      if (!service) {
        return res.status(404).json({ error: 'Chain not supported' });
      }

      try {
        await service.clearTransactionQueue();
        res.json({ message: `Queue cleared for chain ${chainId}` });
      } catch (error) {
        res.status(500).json({ error: 'Failed to clear queue' });
      }
    });

    // Transaction status check
    this.app.get('/api/transaction/:chainId/:txHash/status', async (req, res) => {
      const { chainId, txHash } = req.params;
      const service = this.invalidationManager.getServiceForChain(chainId);
      
      if (!service) {
        return res.status(404).json({ error: 'Chain not supported' });
      }

      try {
        const [isQueued, isProcessing] = await Promise.all([
          service.isTransactionQueued(txHash),
          service.isTransactionProcessing(txHash),
        ]);

        let status: string;
        if (isProcessing) {
          status = 'processing';
        } else if (isQueued) {
          status = 'queued';
        } else {
          status = 'not_found';
        }

        res.json({
          txHash,
          chainId,
          status,
          isQueued,
          isProcessing,
        });
      } catch (error) {
        res.status(500).json({ error: 'Failed to check transaction status' });
      }
    });
  }

  private setupBullMQDashboard(): void {
    // Add authentication middleware if credentials are provided
    const dashboardPassword = process.env.BULL_DASHBOARD_PASSWORD;
    const dashboardToken = process.env.BULL_DASHBOARD_TOKEN;
    
    if (dashboardPassword || dashboardToken) {
      this.app.use('/admin/queues', BullDashboardSetup.createAuthMiddleware());
      logger.log({
        level: 'info',
        message: 'BullMQ dashboard protected with authentication',
      });
    } else {
      logger.log({
        level: 'warn',
        message: 'BullMQ dashboard running without authentication - not recommended for production',
      });
    }

    // Setup the dashboard
    this.bullDashboardSetup.setupDashboard(this.app, this.invalidationManager);
  }

  private setupGracefulShutdown(): void {
    const shutdown = async (signal: string) => {
      logger.log({
        level: 'info',
        message: `Received ${signal}, starting graceful shutdown`,
      });

      try {
        // Shutdown invalidation manager (this will close all BullMQ processors)
        await this.invalidationManager.shutdown();
        
        logger.log({
          level: 'info',
          message: 'Graceful shutdown completed successfully',
        });
        
        process.exit(0);
      } catch (error) {
        logger.log({
          level: 'error',
          message: 'Error during graceful shutdown',
          error: error,
        });
        process.exit(1);
      }
    };

    // Handle various termination signals
    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGUSR2', () => shutdown('SIGUSR2')); // Nodemon restart

    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      logger.log({
        level: 'error',
        message: 'Uncaught exception',
        error: error,
      });
      shutdown('uncaughtException');
    });

    process.on('unhandledRejection', (reason, promise) => {
      logger.log({
        level: 'error',
        message: 'Unhandled promise rejection',
        reason: reason,
        promise: promise,
      });
      shutdown('unhandledRejection');
    });
  }

  public start(port: number = 3000): void {
    // Start invalidation services
    this.invalidationManager.startServices();

    // Start Express server
    this.app.listen(port, () => {
      logger.log({
        level: 'info',
        message: `Server started on port ${port}`,
        endpoints: {
          health: `http://localhost:${port}/health`,
          queueStats: `http://localhost:${port}/api/queue-stats`,
          dashboard: `http://localhost:${port}/admin/queues`,
          api: `http://localhost:${port}/api`,
        },
      });
    });
  }

  public getApp(): express.Express {
    return this.app;
  }

  public getInvalidationManager(): CacheInvalidationManager {
    return this.invalidationManager;
  }
}

// Usage example
if (require.main === module) {
  const server = new ServerWithBullMQ();
  server.start(parseInt(process.env.PORT || '3000'));
}