import express from "express";
import cors from "cors";
import { createBuiltMeshHTTPHandler } from "../.mesh";
import { CacheInvalidationManager } from "./invalidation";
import log from "./log";
import "dotenv/config";

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

  if (!transactionId || !networkId) {
    return res.status(400).send("Missing transaction hash or network ID");
  }

  await cachaeInvalidationManager.processTransaction(transactionId, networkId);
  res.send("success");
});

app.listen(PORT, () => {
  log.info(`server started on port ${PORT}`);
});
