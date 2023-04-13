const mongoose = require("mongoose");

const vocabularySchema = mongoose.Schema({
  spanish: {
    type: String,
    required: [true, "Spanish word required"],
    maxLength: 30,
  },
  english: {
    type: String,
    required: [true, "Engish word required"],
    maxLength: 30,
  },
  unit: Number,
});

const Vocabulary = mongoose.model("Vocabulary", vocabularySchema);
module.exports = Vocabulary;
