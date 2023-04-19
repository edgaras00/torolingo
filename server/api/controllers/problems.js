const Problem = require("../models/problems");
const catchAsync = require("../../utils/catchAsync");
exports.getAllProblems = catchAsync(async (req, res) => {
  const problems = await Problem.find().select("-__v");
  res.status(200).json({
    status: "success",
    results: problems.length,
    data: { problems },
  });
});

exports.getLessonProblems = catchAsync(async (req, res, next) => {
  const unit = req.query.unit;
  const lesson = req.query.lesson;
  const problems = await Problem.find({
    $and: [{ unit: unit }, { lesson: lesson }],
  }).select("-__v");
  res.status(200).json({
    status: "success",
    results: problems.length,
    data: { problems },
  });
});

exports.getMatchingProblems = catchAsync(async (req, res, next) => {
  const problems = await Problem.find({ problemType: "match" });
  res.status(200).json({
    status: "success",
    results: problems.length,
    data: { problems },
  });
});

exports.getListeningProblems = catchAsync(async (req, res, next) => {
  const problems = await Problem.find({
    $or: [{ problemType: "listening" }, { problemType: "listeningWriting" }],
  });
  res.status(200).json({
    status: "success",
    results: problems.length,
    data: { problems },
  });
});

exports.getSingleProblem = catchAsync(async (req, res, next) => {
  const problemId = req.params.problemId;

  const problem = await Problem.findById(problemId);
  res.status(200).json({
    status: "success",
    data: { problem },
  });
});

exports.createProblem = catchAsync(async (req, res, next) => {
  const newProblem = { ...req.body };
  const problem = await Problem.create(newProblem);

  res.status(201).json({
    status: "success",
    data: {
      problem,
    },
  });
});

exports.updateProblem = catchAsync(async (req, res, next) => {
  const problemId = req.params.problemId;

  const problem = await Problem.findByIdAndUpdate(problemId, req.body, {
    new: true,
  });

  // Handle 404
  // if (!problem) {...}

  res.status(200).json({
    status: "success",
    data: {
      problem,
    },
  });
});

exports.deleteProblem = catchAsync(async (req, res, next) => {
  const problemId = req.params.problemId;

  const problem = await Problem.findByIdAndDelete(problemId);

  // Handle 404
  // if (!problem) {...}

  res.status(204).json({
    status: "success",
    message: "Problem was removed successfully",
  });
});
