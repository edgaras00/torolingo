const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
  },
  email: {
    type: String,
    required: [true, "User must have an email address"],
    validate: [isEmail, "Invalid email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
    minLength: [6, "Password must be at least 6 characters long"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
