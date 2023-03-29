const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  text: {
    type: String,
    maxLength: 200,
  },
  solution: {
    type: String,
    required: [true, "Problem must have a solution"],
    maxLength: 200,
  },
  difficulty: {
    type: Number,
    required: [true, "Problem must have a difficulty level (1-3)"],
    min: 1,
    max: 3,
  },
  choices: [],
  wordBank: [],
  pictureURL: String,
  audioURL: String,
  problemType: {
    type: String,
    required: [true, "Problem must have a type"],
    enum: ["listening", "translation", "picture", "fill", "choice"],
  },
});

const Problem = mongoose.model("Problem", problemSchema);
module.exports = Problem;
