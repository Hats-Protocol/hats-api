import express from "express";
import cors from "cors";
import "dotenv/config";
import { createBuiltMeshHTTPHandler } from "../.mesh";
import { CacheInvalidationManager } from "./invalidation";
import { BullDashboardSetup } from "./bull-dashboard";
import logger from "./log";
import {
  // ValidationError,
  TransactionNotFoundError,
  SubgraphSyncError,
  InvalidationError,
} from "./errors";

const cacheInvalidationManager = new CacheInvalidationManager();
cacheInvalidationManager.startServices();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ maxAge: 86400 }));
app.use(express.json());

app.use("/graphql", createBuiltMeshHTTPHandler());

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

app.listen(PORT, () => {
  logger.log({ level: "info", message: `server started on port ${PORT}` });
});
