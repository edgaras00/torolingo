const Problem = require("../models/problemModel");

// Utils
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");

// Get all problems
exports.getAllProblems = catchAsync(async (req, res, next) => {
  const problems = await Problem.find(req.query).select("-__v");

  res.status(200).json({
    status: "success",
    results: problems.length,
    data: { problems },
  });
});

exports.getSingleProblem = catchAsync(async (req, res, next) => {
  const problem = await Problem.findById(req.params.problemId);

  if (!problem) {
    return next(new AppError("Problem not found with that ID", 404));
  }

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
  const problem = await Problem.findByIdAndUpdate(
    req.params.problemId,
    req.body,
    {
      new: true,
    }
  );

  if (!problem) {
    return next(new AppError("Problem not found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      problem,
    },
  });
});

exports.deleteProblem = catchAsync(async (req, res, next) => {
  const problem = await Problem.findByIdAndDelete(req.params.problemId);

  if (!problem) {
    return next(new AppError("Problem not found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    message: "Problem was removed successfully",
  });
});
