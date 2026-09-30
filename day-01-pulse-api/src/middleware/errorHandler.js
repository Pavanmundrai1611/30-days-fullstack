// 4 parameters = Express treats this as the error handler. Keep `next` even if unused.
export function errorHandler(err, req, res, next) {
  // If a response already started, let Express's default handler close it
  if (res.headersSent) return next(err);

  const isProd = process.env.NODE_ENV === "production";
  const statusCode = err.statusCode || err.status || 500;
  const isServerError = statusCode >= 500;

  // Unexpected bugs get logged in full for the developer
  if (isServerError) console.error(err);

  res.status(statusCode).json({
    success: false,
    error: {
      // Never show internal error details to users in production
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
