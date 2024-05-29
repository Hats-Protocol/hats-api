import express from "express";
import cors from "cors";
import { createBuiltMeshHTTPHandler } from "../.mesh";
import { CacheInvalidationClient } from "./invalidation";
import log from "./log";
import "dotenv/config";

const cachaeInvalidationClient = new CacheInvalidationClient();
cachaeInvalidationClient.watchEvents();
cachaeInvalidationClient.keepAlive();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ maxAge: 86400 }));

app.use("/graphql", createBuiltMeshHTTPHandler());

app.listen(PORT, () => {
  log.info(`server started on port ${PORT}`);
});
