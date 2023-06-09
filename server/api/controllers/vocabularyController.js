const Vocabulary = require("../models/vocabularyModel");

// Utils
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

exports.getAllWords = catchAsync(async (req, res, next) => {
  const words = await Vocabulary.find(req.query).select("-__v");

  res.status(200).json({
    status: "success",
    results: words.length,
    data: {
      words,
    },
  });
});

exports.getWord = catchAsync(async (req, res, next) => {
  const word = await Vocabulary.findById(req.params.wordId);

  if (!word) {
    return next(new AppError("Word not found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      word,
    },
  });
});

exports.createWord = catchAsync(async (req, res, next) => {
  const newWord = { ...req.body };
  const word = await Vocabulary.create(newWord);

  res.status(201).json({
    message: "success",
    data: {
      word,
    },
  });
});

exports.updateWord = catchAsync(async (req, res, next) => {
  const word = await Vocabulary.findByIdAndUpdate(req.params.wordId, req.body, {
    new: true,
  });

  if (!word) {
    return next(new AppError("Word not found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      word,
    },
  });
});

exports.deleteWord = catchAsync(async (req, res, next) => {
  const word = await Vocabulary.findByIdAndDelete(req.params.wordId);

  if (!word) {
    return next(new AppError("Word not found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    message: "Word deleted successfully",
  });
});
