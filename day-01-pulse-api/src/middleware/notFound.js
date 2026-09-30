import { AppError } from "../utils/AppError.js";

// Runs only if no route answered → pass a 404 error to the error handler
export function notFound(req, res, next) {
  next(
    new AppError(
      `Route not found: ${req.method} ${req.originalUrl}`,
      404,
      "NOT_FOUND",
    ),
  );
}
