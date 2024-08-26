import express from "express";
import cors from "cors";
import "dotenv/config";
import { createBuiltMeshHTTPHandler } from "../.mesh";
import { CacheInvalidationManager } from "./invalidation";
import logger from "./log";
import {
  ValidationError,
  TransactionNotFoundError,
  SubgraphSyncError,
  InvalidationError,
} from "./errors";

const cachaeInvalidationManager = new CacheInvalidationManager();
// cachaeInvalidationManager.startServices();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ maxAge: 86400 }));
app.use(express.json());

app.use("/graphql", createBuiltMeshHTTPHandler());

app.post("/invalidate", async (req, res) => {
  const {
    transactionId,
    networkId,
  }: { transactionId: `0x${string}`; networkId: string } = req.body;

  logger.log({
    level: "info",
    message: "POST /invalidate",
    transactionId: transactionId,
    networkId: networkId,
  });

  if (!transactionId || !networkId) {
    return res.status(400).send("Missing transaction hash or network ID");
  }

  try {
    await cachaeInvalidationManager.processTransaction(
      transactionId,
      networkId
    );
    res.send("success");
  } catch (error) {
    if (error instanceof TransactionNotFoundError) {
      res.status(400).send(error.message);
    } else if (error instanceof SubgraphSyncError) {
      res.status(400).send(error.message);
    } else if (error instanceof InvalidationError) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

app.listen(PORT, () => {
  logger.log({ level: "info", message: `server started on port ${PORT}` });
});
