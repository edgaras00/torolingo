const express = require("express");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");

const AppError = require("./utils/appError");

const problemRouter = require("./api/routes/problemRouter");
const vocabularyRouter = require("./api/routes/vocabularyRouter");
const userRouter = require("./api/routes/userRouter");
const errorController = require("./api/controllers/errorController");

require("dotenv").config();

const app = express();

// Global middlewares
// Handle CORS
app.use(cors());

// Security HTTP headers
app.use(helmet());

// Rate limiter to limit /user requests from same IP address
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message:
    "Too many requests from this IP address. Please try again in an hour.",
});
app.use("/api/user", limiter);
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
app.use("/ping", (req, res) => res.status(200).send("Welcome"));

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorController);

module.exports = app;
