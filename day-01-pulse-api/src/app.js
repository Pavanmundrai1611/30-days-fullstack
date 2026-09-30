import express from "express";
import { requestLogger } from "./middleware/requestLogger.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import healthRouter from "./routes/health.routes.js";

const app = express();

app.disable("x-powered-by");

// 1. Middleware that runs for every request
app.use(requestLogger);
app.use(express.json());

// 2. Routes
app.use("/api/health", healthRouter);

// Demo: async route that throws. Express 5 forwards it to errorHandler.
app.get("/api/boom", async () => {
  throw new Error("Boom! Simulated failure");
});

// 3. No route matched → 404
app.use(notFound);

// 4. Error handler — must be last
app.use(errorHandler);

export default app;
