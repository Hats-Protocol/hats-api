import express from "express";
import cors from "cors";
import "dotenv/config";
import { createGatewayRuntime } from "@graphql-hive/gateway";
import { gatewayConfig } from "../gateway.config";
import { CacheInvalidationManager } from "./invalidation";
import { BullDashboardSetup } from "./bull-dashboard";
import logger from "./log";
import {
  // ValidationError,
  TransactionNotFoundError,
  SubgraphSyncError,
  InvalidationError,
} from "./errors";
import { initializeRateLimiters } from "./rate-limiter";

const cacheInvalidationManager = new CacheInvalidationManager();
cacheInvalidationManager.startServices();

// Initialize rate limiters for RPC calls
initializeRateLimiters();

// Initialize Hive Gateway
const gateway = createGatewayRuntime(gatewayConfig as any); // Type mismatch between CLI and runtime config

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ maxAge: 86400 }));
app.use(express.json()); // Parse JSON request bodies

// Mount GraphQL Gateway
app.use(gateway.graphqlEndpoint, gateway);

// Setup Bull Dashboard for queue monitoring
const bullDashboardSetup = new BullDashboardSetup();
bullDashboardSetup.setupDashboard(app, cacheInvalidationManager);

app.post("/invalidate", async (req, res) => {
  const {
    transactionId,
    networkId,
    force,
  }: {
    transactionId: `0x${string}`;
    networkId: string;
    force: boolean | undefined;
  } = req.body;

  logger.log({
    level: "info",
    message: "POST /invalidate",
    transactionId: transactionId,
    networkId: networkId,
    force: force,
  });

  if (!transactionId || !networkId) {
    return res.status(400).json({
      error: "Missing transaction hash or network ID"
    });
  }

  try {
    const result = await cacheInvalidationManager.processTransaction(
      transactionId,
      networkId,
      force
    );

    // Determine appropriate status code based on result
    let statusCode = 200;
    if (result && typeof result === 'object' && 'status' in result) {
      switch (result.status) {
        case 'already_processing':
          statusCode = 202; // Accepted - already being processed
          break;
        case 'already_queued':
          statusCode = 409; // Conflict - duplicate request
          break;
        case 'queued':
        case 'requeued':
          statusCode = 200; // OK - successfully queued
          break;
      }
      res.status(statusCode).json(result);
    } else {
      // Backward compatibility - old format response
      res.status(200).json({
        status: 'queued',
        message: 'Transaction queued for processing'
      });
    }
  } catch (error) {
    if (error instanceof TransactionNotFoundError) {
      res.status(400).json({
        error: error.message
      });
    } else if (error instanceof SubgraphSyncError) {
      res.status(400).json({
        error: error.message
      });
    } else if (error instanceof InvalidationError) {
      res.status(500).json({
        error: error.message
      });
    } else {
      res.status(500).json({
        error: "Internal Server Error"
      });
    }
  }
});

app.post("/invalidate-all", async (req, res) => {
  const { networkId }: { networkId: string } = req.body;

  logger.log({
    level: "info",
    message: "POST /invalidate-all",
    networkId: networkId,
  });

  if (!networkId) {
    return res.status(400).json({
      error: "Missing network ID"
    });
  }

  try {
    const deletedCount = await cacheInvalidationManager.redisClient.invalidateAllForNetwork(networkId);

    res.status(200).json({
      status: 'success',
      message: `Successfully invalidated ${deletedCount} cache entries for network ${networkId}`,
      deletedCount: deletedCount,
      networkId: networkId
    });
  } catch (error) {
    if (error instanceof Error && error.message.includes('Unsupported network ID')) {
      res.status(400).json({
        error: error.message
      });
    } else {
      logger.log({
        level: "error",
        message: "Error in /invalidate-all endpoint",
        networkId: networkId,
        error: error,
      });

      res.status(500).json({
        error: "Internal Server Error"
      });
    }
  }
});

app.listen(PORT, () => {
  logger.log({ level: "info", message: `server started on port ${PORT}` });
});
