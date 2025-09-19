import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';
import type { Express } from 'express';
import type { CacheInvalidationManager } from './invalidation';
import logger from './log';

export class BullDashboardSetup {
  private serverAdapter: ExpressAdapter;
  private bullBoard: any;

  constructor() {
    this.serverAdapter = new ExpressAdapter();
    this.serverAdapter.setBasePath('/admin/queues');
  }

  setupDashboard(app: Express, invalidationManager: CacheInvalidationManager): void {
    // Only setup dashboard in development and when password is set
    const isDevelopment = process.env.NODE_ENV === 'development';
    const hasPassword = !!process.env.BULL_DASHBOARD_PASSWORD;

    if (!isDevelopment || !hasPassword) {
      logger.log({
        level: 'info',
        message: 'Bull dashboard not enabled',
        reason: !isDevelopment ? 'not in development mode' : 'no dashboard password set',
        nodeEnv: process.env.NODE_ENV,
        hasPassword
      });
      return;
    }

    try {
      // Get all invalidation services
      const services = invalidationManager.getAllServices();

      // Create BullMQ adapters for all queues
      const queueAdapters = services
        .map((service) => {
          try {
            const processor = service.getTransactionProcessor();
            const queue = processor.getQueue();
            return new BullMQAdapter(queue);
          } catch (error) {
            logger.log({
              level: 'warn',
              message: 'Failed to create BullMQ adapter for service',
              error: error,
            });
            return null;
          }
        })
        .filter((adapter) => adapter !== null);

      if (queueAdapters.length === 0) {
        logger.log({
          level: 'warn',
          message: 'No BullMQ queues found for dashboard',
        });
        return;
      }

      // Create Bull Board
      this.bullBoard = createBullBoard({
        queues: queueAdapters,
        serverAdapter: this.serverAdapter,
        options: {
          uiConfig: {
            boardTitle: 'Hats API Transaction Processing Queues',
            boardLogo: {
              path: 'https://hatsprotocol.xyz/favicon.ico',
              width: '100px',
              height: '100px',
            },
            miscLinks: [
              {
                text: 'Hats Protocol',
                url: 'https://hatsprotocol.xyz',
              },
            ],
          },
        },
      });

      // Mount the dashboard
      app.use('/admin/queues', this.serverAdapter.getRouter());

      logger.log({
        level: 'info',
        message: `BullMQ Dashboard mounted at /admin/queues`,
        queuesCount: queueAdapters.length,
        queues: queueAdapters.map((adapter) => adapter.getName()),
      });
    } catch (error) {
      logger.log({
        level: 'error',
        message: 'Failed to setup BullMQ dashboard',
        error: error,
      });
    }
  }

  // Add authentication middleware for production
  static createAuthMiddleware() {
    return (req: any, res: any, next: any) => {
      // In production, you might want to check API keys, JWT tokens, etc.
      const adminPassword = process.env.BULL_DASHBOARD_PASSWORD;

      if (!adminPassword) {
        // If no password is set, require authentication
        const auth = req.get('Authorization');
        if (!auth || !auth.startsWith('Bearer ')) {
          res.status(401).json({ error: 'Authentication required' });
          return;
        }

        // You can implement your own auth logic here
        const token = auth.substring(7);
        if (token !== process.env.BULL_DASHBOARD_TOKEN) {
          res.status(401).json({ error: 'Invalid credentials' });
          return;
        }
      } else {
        // Simple password-based auth
        const providedPassword = req.query.password || req.headers['x-admin-password'];
        if (providedPassword !== adminPassword) {
          res.status(401).json({ error: 'Invalid admin password' });
          return;
        }
      }

      next();
    };
  }

  // Get queue statistics for API endpoints
  static async getQueueStats(invalidationManager: CacheInvalidationManager): Promise<any> {
    try {
      const services = invalidationManager.getAllServices();
      const stats = await Promise.all(
        services.map(async (service, index) => {
          try {
            const queueStatus = await service.getQueueStatus();
            return {
              chainId: ['1', '137', '100', '11155111', '8453', '42220', '10', '42161', '84532'][index],
              chainName: ['Ethereum', 'Polygon', 'Gnosis', 'Sepolia', 'Base', 'Celo', 'Optimism', 'Arbitrum', 'Base Sepolia'][index],
              ...queueStatus,
            };
          } catch (error) {
            return {
              chainId: ['1', '137', '100', '11155111', '8453', '42220', '10', '42161', '84532'][index],
              chainName: ['Ethereum', 'Polygon', 'Gnosis', 'Sepolia', 'Base', 'Celo', 'Optimism', 'Arbitrum', 'Base Sepolia'][index],
              error: error instanceof Error ? error.message : String(error),
            };
          }
        })
      );

      return {
        timestamp: new Date().toISOString(),
        queues: stats,
        summary: {
          totalWaiting: stats.reduce((sum, s) => sum + ('waiting' in s ? s.waiting : 0), 0),
          totalActive: stats.reduce((sum, s) => sum + ('active' in s ? s.active : 0), 0),
          totalCompleted: stats.reduce((sum, s) => sum + ('completed' in s ? s.completed : 0), 0),
          totalFailed: stats.reduce((sum, s) => sum + ('failed' in s ? s.failed : 0), 0),
        },
      };
    } catch (error) {
      logger.log({
        level: 'error',
        message: 'Failed to get queue stats',
        error: error,
      });
      throw error;
    }
  }

  // Health check endpoint
  static async healthCheck(invalidationManager: CacheInvalidationManager): Promise<{
    status: 'healthy' | 'degraded' | 'unhealthy';
    queues: Array<{ chainId: string; status: string; error?: string }>;
  }> {
    const services = invalidationManager.getAllServices();
    const chainIds = ['1', '137', '100', '11155111', '8453', '42220', '10', '42161', '84532'];

    const queueHealthChecks = await Promise.all(
      services.map(async (service, index) => {
        try {
          const status = await service.getQueueStatus();
          const hasIssues = status.failed > 100 || status.waiting > 1000; // Thresholds

          return {
            chainId: chainIds[index],
            status: hasIssues ? 'degraded' : 'healthy',
            waiting: status.waiting,
            active: status.active,
            failed: status.failed,
          };
        } catch (error) {
          return {
            chainId: chainIds[index],
            status: 'unhealthy',
            error: error instanceof Error ? error.message : String(error),
          };
        }
      })
    );

    const unhealthyCount = queueHealthChecks.filter(q => q.status === 'unhealthy').length;
    const degradedCount = queueHealthChecks.filter(q => q.status === 'degraded').length;

    let overallStatus: 'healthy' | 'degraded' | 'unhealthy';
    if (unhealthyCount > 0) {
      overallStatus = 'unhealthy';
    } else if (degradedCount > 0) {
      overallStatus = 'degraded';
    } else {
      overallStatus = 'healthy';
    }

    return {
      status: overallStatus,
      queues: queueHealthChecks,
    };
  }
}