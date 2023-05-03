const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Problem = require("./api/models/problemModel");
const Vocabulary = require("./api/models/vocabularyModel");
require("dotenv").config({ path: "./.env" });

const readData = (path) => JSON.parse(fs.readFileSync(path, "utf-8"));

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const clearDB = async (Model) => {
  try {
    await Model.deleteMany({});
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const uploadData = async (Model, data) => {
  try {
    await Model.insertMany(data);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    const problemData = readData(path.join(__dirname, "newProblems.json"));

    await connectToDB();

    await clearDB(Problem);
    await uploadData(Problem, problemData);
    console.log("Data imported successfullly.");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();
