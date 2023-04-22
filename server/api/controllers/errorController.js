const AppError = require("../../utils/appError");

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateDB = (err, errmsg) => {
  const value = errmsg.match(/"([^"\\]*(?:\\.[^"\\]*)*)"/);
  const message = `Duplicate value: ${value}`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError("Invalid token. Pleae log in again", 401);

const handleJWTExpiredError = () =>
  new AppError("Your token has expird. Please log in again", 401);

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  // Operational errors can be sent to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // Programming or other errors should be hidden from the client
    // console.error(err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    // More info about the error in development mode
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateDB(error, err.message);
    if (error.statusCode === 404) error.message = "Resource not found";
    if (error.name === "JsonWebTokenError") error = handleJWTError(error);
    if (error.name === "TokenExpiredError") error = handleJWTExpired(error);
    sendErrorProd(error, res);
  }
};
