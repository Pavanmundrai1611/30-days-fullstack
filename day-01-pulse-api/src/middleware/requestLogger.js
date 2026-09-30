export function requestLogger(req, res, next) {
  const start = performance.now();

  res.on("finish", () => {
    const ms = performance.now() - start;
    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} ${ms.toFixed(2)}ms`,
    );
  });

  next();
}
