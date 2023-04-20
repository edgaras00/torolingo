const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  text: {
    type: String,
    maxLength: 200,
  },
  solution: {
    type: String,
    maxLength: 200,
  },
  pairs: [],
  choices: [],
  wordBank: [],
  unit: Number,
  lesson: Number,
  translation: String,
  pictureURL: String,
  audioURL: String,
  slowAudioURL: String,
  problemType: {
    type: String,
    required: [true, "Problem must have a type"],
    enum: [
      "listening",
      "translation",
      "multipleChoice",
      "multipleChoicePicture",
      "pictureBlank",
      "match",
      "listeningWriting",
      "fillBlank",
    ],
  },
});

const Problem = mongoose.model("Problem", problemSchema);
module.exports = Problem;
