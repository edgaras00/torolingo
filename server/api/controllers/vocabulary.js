const Vocabulary = require("../models/vocabulary");

exports.getAllWords = async (req, res) => {
  try {
    const words = await Vocabulary.find().select("-__v");

    res.status(200).json({
      status: "success",
      data: {
        words,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUnitWords = async (req, res) => {
  try {
    const unit = req.query.unit;
    const words = await Vocabulary.find({ unit: unit }).select("-__v");

    res.status(200).json({
      status: "success",
      data: {
        words,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getWord = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

exports.createWord = async (req, res) => {
  try {
    const newWord = { ...req.body };
    const word = await Vocabulary.create(newWord);

    res.status(201).json({
      message: "success",
      data: {
        word,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateWord = async (req, res) => {
  try {
    const wordId = req.params.wordId;
    console.log(wordId);
    const word = await Vocabulary.findByIdAndUpdate(wordId, req.body, {
      new: true,
    });

    //   Handle 404
    // if (!word) {...}

    res.status(200).json({
      status: "success",
      data: {
        word,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteWord = async (req, res) => {
  try {
    const wordId = req.params.wordId;
    const word = await Vocabulary.findByIdAndDelete(wordId);

    // Handle 404
    // if (!word) {...}

    res.status(204).json({
      status: "success",
      message: "Word deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
