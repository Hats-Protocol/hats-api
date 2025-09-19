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
    // Setup dashboard in development (always) or other environments (only with credentials)
    const isDevelopment = process.env.NODE_ENV === 'development';
    const bullUser = process.env.BULL_USER;
    const bullPass = process.env.BULL_PASS;
    const hasCredentials = !!bullUser && !!bullPass;

    if (!isDevelopment && !hasCredentials) {
      logger.log({
        level: 'info',
        message: 'Bull dashboard not enabled',
        reason: 'not in development mode and no bull credentials set',
        nodeEnv: process.env.NODE_ENV,
        hasCredentials
      });
      return;
    }

    if (!isDevelopment && !bullUser) {
      logger.log({
        level: 'warn',
        message: 'BULL_USER not set. Bull Board routes may be unprotected!',
      });
    }

    if (!isDevelopment && !bullPass) {
      logger.log({
        level: 'warn',
        message: 'BULL_PASS not set. Bull Board routes may be unprotected!',
      });
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

      // Mount the dashboard with authentication (only if credentials are set)
      if (hasCredentials) {
        app.use('/admin/queues', BullDashboardSetup.createBasicAuthMiddleware(bullUser!, bullPass!), this.serverAdapter.getRouter());
      } else {
        app.use('/admin/queues', this.serverAdapter.getRouter());
      }

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

  // Add basic authentication middleware
  static createBasicAuthMiddleware(username: string, password: string) {
    return (req: any, res: any, next: any) => {
      const auth = req.get('Authorization');

      if (!auth || !auth.startsWith('Basic ')) {
        res.set('WWW-Authenticate', 'Basic realm="Bull Dashboard"');
        res.status(401).send('Authentication required');
        return;
      }

      const credentials = Buffer.from(auth.substring(6), 'base64').toString();
      const [providedUsername, providedPassword] = credentials.split(':');

      if (providedUsername !== username || providedPassword !== password) {
        res.set('WWW-Authenticate', 'Basic realm="Bull Dashboard"');
        res.status(401).send('Invalid credentials');
        return;
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