const express = require("express");
const userController = require("../controllers/user");
const authController = require("../controllers/auth");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.patch(
  "/changePassword",
  authController.protectRoute,
  authController.updatePassword
);
router.patch(
  "/updateUser",
  authController.protectRoute,
  userController.updateUser
);
router.patch(
  "/updateScore",
  authController.protectRoute,
  userController.updateUserScore
);

router.get("/", userController.getAllUsers);

router
  .route("/:userId")
  .get(userController.getUser)
  // .patch(userController.updateUserAdmin)
  .delete(userController.deleteUser);

module.exports = router;
