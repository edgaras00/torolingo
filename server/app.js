const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const problemRouter = require("./api/routes/problems");
const vocabularyRouter = require("./api/routes/vocabulary");
const userRouter = require("./api/routes/user");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(process.env.DB_CONNECT);

app.use("/problems", problemRouter);
app.use("/vocab", vocabularyRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
