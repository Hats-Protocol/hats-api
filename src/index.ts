import express from "express";
import { createBuiltMeshHTTPHandler } from "../.mesh";

const app = express();
const PORT = process.env.EXPRESS_PORT || 4000;

app.use("/graphql", createBuiltMeshHTTPHandler());

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
