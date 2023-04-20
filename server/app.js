const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AppError = require("./utils/appError");
const problemRouter = require("./api/routes/problems");
const vocabularyRouter = require("./api/routes/vocabulary");
const userRouter = require("./api/routes/user");
const errorController = require("./api/controllers/errorController");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/problems", problemRouter);
app.use("/vocab", vocabularyRouter);
app.use("/user", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorController);

module.exports = app;
