const express = require("express");
const problemController = require("../controllers/problemController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protectRoute, problemController.getAllProblems)
  .post(
    authController.protectRoute,
    authController.restrictRouteTo("admin"),
    problemController.createProblem
  );

router
  .route("/:problemId")
  .get(authController.protectRoute, problemController.getSingleProblem)
  .patch(
    authController.protectRoute,
    authController.restrictRouteTo("admin"),
    problemController.updateProblem
  )
  .delete(
    authController.protectRoute,
    authController.restrictRouteTo("admin"),
    problemController.deleteProblem
  );

module.exports = router;
