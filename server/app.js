const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const AppError = require("./utils/appError");
const problemRouter = require("./api/routes/problems");
const vocabularyRouter = require("./api/routes/vocabulary");
const userRouter = require("./api/routes/user");
const errorController = require("./api/controllers/errorController");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
require("dotenv").config();

const app = express();

// Global middlewares

// Security HTTP headers
// app.use(helmet());

// Rate limiter to limit /user requests from same IP address
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message:
    "Too many requests from this IP address. Please try again in an hour.",
});
app.use("/api/user", limiter);
// Handle CORS
app.use(cors());
// Body parser (body --> req.body)
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS-attacks
app.use(xss());

app.use("/api/problems", problemRouter);
app.use("/api/vocab", vocabularyRouter);
app.use("/api/user", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorController);

module.exports = app;
