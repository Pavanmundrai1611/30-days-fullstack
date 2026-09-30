import app from "./app.js";

const PORT = Number(process.env.PORT) || 4000;

const server = app.listen(PORT, () => {
  console.log(`pulse-api listening on http://localhost:${PORT}`);
});

let shuttingDown = false;

function shutdown(signal) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.log(`\n${signal} received. Closing server...`);

  server.close(() => {
    console.log("All connections closed. Bye!");
    process.exit(0);
  });

  server.closeIdleConnections();

  setTimeout(() => {
    console.error("Forced shutdown after 10s");
    process.exit(1);
  }, 10_000).unref();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
