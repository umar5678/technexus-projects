// asyncHandler.js (Optimized with optional logging)
const asyncHandler = (requestHandler, logErrors = true) => {
  return async (req, res, next) => {
    try {
      const result = await requestHandler(req, res, next);
      return result; // Explicitly return successful results (optional)
    } catch (err) {
      if (logErrors) {
        console.error("Error:", err.message, err.stack); // Log detailed errors
      }
      next(err); // Propagate the error for further handling
    }
  };
};

export { asyncHandler };


// // v2
// const asyncHandler = (requestHandler) => {
//   return (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
//   };
// };

// export { asyncHandler };