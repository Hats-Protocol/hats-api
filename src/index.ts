import express from "express";
import { createBuiltMeshHTTPHandler } from "../.mesh";
import { cacheInvalidationService } from "./invalidation";

async function main() {
  cacheInvalidationService();

  const app = express();
  const PORT = process.env.EXPRESS_PORT || 4000;

  app.use("/graphql", createBuiltMeshHTTPHandler());

  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
}

main();
