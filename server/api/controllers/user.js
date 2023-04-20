const mongoose = require("mongoose");
const User = require("../models/user");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: { users },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    return next(new AppError("User not found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: { user },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
    new: true,
  });

  if (!user) {
    return next(new AppError("User not found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: { user },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.userId);

  if (!user) {
    return next(new AppError("User not found with that ID", 404));
  }

  res.status(204).json({
    status: "Success",
    message: "Successful deletion",
  });
});
