const Vocabulary = require("../models/vocabulary");

exports.getAllWords = async (req, res) => {
  const words = await Vocabulary.find().select("-__v");

  res.status(200).json({
    status: "success",
    data: {
      words,
    },
  });
};

exports.getWord = async (req, res) => {
  const wordId = req.params.wordId;
  const word = await Vocabulary.findById(wordId);

  // Handle 404
  // if (!word) {...}

  res.status(200).json({
    status: "success",
    data: {
      word,
    },
  });
};

exports.createWord = async (req, res) => {
  const newWord = { ...req.body };
  const word = Vocabulary.create(newWord);

  res.status(201).json({
    message: "success",
    data: {
      word,
    },
  });
};

exports.updateWord = async (req, res) => {
  const wordId = req.params.wordId;
  const word = Vocabulary.findByIdAndUpdate(wordId, req.body, { new: true });

  //   Handle 404
  // if (!word) {...}

  res.status(200).json({
    status: "success",
    data: {
      word,
    },
  });
};

exports.deleteWord = async (req, res) => {
  const wordId = req.params.wordId;
  const word = Vocabulary.findByIdAndDelete(wordId);

  // Handle 404
  // if (!word) {...}

  res.status(204).json({
    status: "success",
    message: "Word deleted successfully",
  });
};
