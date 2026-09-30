import express from "express";

const app = express();

app.disable("x-powered-by");
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV,
  });
});

export default app;
