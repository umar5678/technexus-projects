import { ApiError } from "../utils/ApiError.js";
const errorHandlerMiddleware = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let errors = err.errors || [];
  let success = false

  if (err instanceof ApiError) {
    // Handle ApiError instances
    success = false
    statusCode = err.statusCode;
    message = err.message;
    errors = err.errors;
  } else {
    // Handle generic errors
    console.error("Unhandled Error:", err.message, err.stack);
  }

  res.status(statusCode).json({
    message,
    errors,
    success,
  });
};

export default errorHandlerMiddleware;
