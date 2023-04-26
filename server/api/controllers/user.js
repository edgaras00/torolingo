const mongoose = require("mongoose");
const User = require("../models/user");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

const filterObject = (object, ...fields) => {
  const newObject = {};
  Object.keys(object).forEach((key) => {
    if (fields.includes(key)) newObject[key] = object[key];
  });
  return newObject;
};

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
  // Don't allow to update password using this route
  if (req.body.password) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updatePassword",
        400
      )
    );
  }

  // Update user
  // Filter data fields
  const filteredBody = filterObject(req.body, "name", "email");
  const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new AppError("User not found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: { user },
  });
});

exports.updateUserScore = catchAsync(async (req, res, next) => {
  const { score } = req.body;
  const unitID = String(req.body.unit);
  const lessonID = String(req.body.lesson);

  const user = await User.findById(req.user.id);
  const progress = user.progress;

  // if (progress.has(unitID)) {
  //   const unit = new Map(progress.get(unitID));
  //   unit.set(lessonID, score);
  //   progress.set(unitID, unit);
  //   user.progress = progress;
  // } else {
  //   const unit = new Map([[lessonID, score]]);
  //   progress.set(unitID, unit);
  //   user.progress = progress;
  // }
  user.updateProgress(unitID, lessonID, score);

  await user.save();
  console.log(user);
  res.status(200).json({ status: "success", data: { user } });
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
