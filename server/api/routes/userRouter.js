const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

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

router.get(
  "/",
  authController.protectRoute,
  authController.restrictRouteTo("admin"),
  userController.getAllUsers
);

router
  .route("/:userId")
  .get(
    authController.protectRoute,
    authController.restrictRouteTo("admin"),
    userController.getUser
  )
  .delete(
    authController.protectRoute,
    authController.restrictRouteTo("admin"),
    userController.deleteUser
  );

module.exports = router;
