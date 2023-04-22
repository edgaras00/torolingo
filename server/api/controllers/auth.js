const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");
const User = require("../models/user");

const signToken = async (id) => {
  const token = await jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

exports.signup = catchAsync(async (req, res) => {
  const newUser = {
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  };

  const user = await User.create(newUser);
  user.password = undefined;

  const token = await signToken(user._id);
  const userObject = { name: user.name, email: user.email, id: user._id };

  // Send JWT as a cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
  });

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: userObject,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Please provide email or password");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Bad credentials", 401));
  }

  const token = await signToken(user._id);
  const userObject = { name: user.name, email: user.email, id: user._id };

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: process.env.JWT_COOKIE_EXPIRES_IN,
  });

  res.status(200).json({
    status: "success",
    token,
    data: {
      user: userObject,
    },
  });
});

exports.protectRoute = catchAsync(async (req, res, next) => {
  // Get token
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
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
