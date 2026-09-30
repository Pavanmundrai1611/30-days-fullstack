import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV,
  });
});

export default router;
