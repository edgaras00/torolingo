const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AppError = require("./utils/appError");
const problemRouter = require("./api/routes/problems");
const vocabularyRouter = require("./api/routes/vocabulary");
const userRouter = require("./api/routes/user");
const errorController = require("./api/controllers/errorController");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();

// Rate limiter to limit /user requests
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message:
    "Too many requests from this IP address. Please try again in an hour.",
});

app.use("/api/user", limiter);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/problems", problemRouter);
app.use("/api/vocab", vocabularyRouter);
app.use("/api/user", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorController);

module.exports = app;
