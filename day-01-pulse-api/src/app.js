import express from "express";
import { requestLogger } from "./middleware/requestLogger.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import healthRouter from "./routes/health.routes.js";

const app = express();

app.disable("x-powered-by");

// 1. Checkpoints that run for every request
app.use(requestLogger);
app.use(express.json());

// 2. Routes
app.use("/api/health", healthRouter);

// Demo: an async route that crashes. Express 5 catches it automatically.
app.get("/api/boom", async () => {
  throw new Error("Boom! Simulated failure");
});

// 3. Nothing matched → 404
app.use(notFound);

// 4. Error handler — ALWAYS last
app.use(errorHandler);

export default app;
