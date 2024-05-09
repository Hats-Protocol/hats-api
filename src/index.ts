import express from "express";
import cors from "cors";
import { createBuiltMeshHTTPHandler } from "../.mesh";
import { cacheInvalidationService } from "./invalidation";
import log from "./log";
import "dotenv/config";

cacheInvalidationService();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ maxAge: 86400 }));
app.use("/graphql", createBuiltMeshHTTPHandler());

app.listen(PORT, () => {
  log.info(`server started on port ${PORT}`);
});
