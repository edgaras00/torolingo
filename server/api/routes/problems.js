const express = require("express");
const problemController = require("../controllers/problems");
const authController = require("../controllers/auth");

const router = express.Router();

router
  .route("/")
  .get(authController.protectRoute, problemController.getAllProblems)
  .post(authController.protectRoute, problemController.createProblem);

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
