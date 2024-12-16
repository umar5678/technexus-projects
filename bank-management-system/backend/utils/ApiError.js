// apiError.js (Optimized inheritance and stack trace)
class ApiError extends Error {
  constructor(statusCode, message = "Something went wrong", errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
    this.errors = errors;
    Error.captureStackTrace(this, ApiError); // Ensure stack trace is captured
  }
}

export { ApiError };
