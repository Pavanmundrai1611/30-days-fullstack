// Express recognises an error handler by its 4 parameters — keep `next`.
export function errorHandler(err, req, res, next) {
  if (res.headersSent) return next(err);

  const isProd = process.env.NODE_ENV === "production";
  const statusCode = err.statusCode || err.status || 500;
  const isServerError = statusCode >= 500;

  if (isServerError) console.error(err);

  res.status(statusCode).json({
    success: false,
    error: {
      message: isServerError && isProd ? "Internal server error" : err.message,
      code: err.isOperational
        ? err.code
        : isServerError
          ? "INTERNAL_ERROR"
          : "BAD_REQUEST",
      ...(!isProd && isServerError && { stack: err.stack }),
    },
  });
}
