const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "User must have an email address"],
    validate: [isEmail, "Enter a valid email address"],
    lovercase: true,
  },
  password: {
    type: String,
    mingLength: 6,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  passwordChangedAt: Date,
});

// Middleware
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.pre("save", async function (next) {
  // Skip if password was not modified or if created new document
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// Instance method
userSchema.methods.correctPassword = async function (
  inputPassword,
  userPassword
) {
  const isPasswordCorrect = await bcrypt.compare(inputPassword, userPassword);
  return isPasswordCorrect;
};

userSchema.methods.changedPasswordAfterToken = function (timestampJWT) {
  if (this.passwordChangedAt) {
    const modifiedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return timestampJWT < modifiedTimestamp;
  }
  return false;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
