// const { promisify } = require("utils");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const signToken = async (id) => {
  const token = await jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

exports.signup = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide email or password");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || (await user.correctPassword(password, user.password))) {
      throw new Error("Bad credentials");
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
  } catch (error) {
    console.log(error);
  }
};
