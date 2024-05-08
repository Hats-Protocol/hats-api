import express from "express";
import cors from "cors";
import { createBuiltMeshHTTPHandler } from "../.mesh";
import { cacheInvalidationService } from "./invalidation";
import "dotenv/config";

cacheInvalidationService();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ maxAge: 86400 }));
app.use("/graphql", createBuiltMeshHTTPHandler());

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
