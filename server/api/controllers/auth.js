const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");
const User = require("../models/user");

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const createAndSendToken = (user, statusCode, res) => {
  // Function that creates a token and sends it as a cookie to client

  const token = signToken(user.id);

  // Cookie options
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
  };
  // Make it secure only in production
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  // Send JWT as a cookie
  res.cookie("jwt", token, cookieOptions);

  // Send response
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res) => {
  const newUser = {
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  };

  const user = await User.create(newUser);
  user.password = undefined;

  // const userObject = { name: user.name, email: user.email, id: user._id };

  // Send response and JWT as a cookie
  createAndSendToken(user, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Please provide email or password");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // const userObject = { name: user.name, email: user.email, id: user._id };

  createAndSendToken(user, 200, res);
});

exports.protectRoute = catchAsync(async (req, res, next) => {
  // Get token
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  // Check if received token
  if (!token) {
    return next(new AppError("Please log in to get access", 401));
  }
  // Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if user still exists
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(
      new AppError("The user who this token belongs to no longer exists", 401)
    );
  }

  // Check if user has changed the password after the token was issued
  if (user.changedPasswordAfterToken(decoded.iat)) {
    return next(
      new AppError(
        "User has changed password recently. Please log in again",
        401
      )
    );
  }

  // Grant access to the protected route
  req.user = user;
  next();
});

exports.restrictRouteTo = (...roles) => {
  return (req, res, next) => {
    // roles: ["admin", "user"]
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };
};

exports.updatePassword = catchAsync(async (req, res, next) => {
  // Get user
  const user = await User.findById(req.user._id).select("+password");

  if (!user) {
    return next(new AppError("User does not exist", 404));
  }

  // Check if submitted password is correct
  if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
    return next(new AppError("Incorrect password", 401));
  }

  // Update password
  // const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
  //   new: true,
  // });

  user.password = req.body.password;
  const updatedUser = await user.save();
  updatedUser.password = undefined;

  // Log in user / Send JWT
  const token = await signToken(updatedUser._id);

  res.status(200).json({
    status: "success",
    token,
    data: {
      updatedUser,
    },
  });
});
