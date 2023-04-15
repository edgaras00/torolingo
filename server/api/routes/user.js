const express = require("express");
const userController = require("../controllers/user");
const authController = require("../controllers/auth");

const router = express.Router();

router.post("/signup", authController.signup);
// router.post("/login", authController.login);
// router.post("/logout", authController.logout);

router.get("/", userController.getAllUsers);

router
  .route("/:userId")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
