const express = require("express");
const problemController = require("../controllers/problems");
const authController = require("../controllers/auth");

const router = express.Router();

router
  .route("/")
  .get(problemController.getAllProblems)
  .post(authController.protectRoute, problemController.createProblem);

// router.route("/lessons").get(problemController.getLessonProblems);
router
  .route("/listening")
  .get(authController.protectRoute, problemController.getListeningProblems);
router
  .route("/match")
  .get(authController.protectRoute, problemController.getMatchingProblems);

router
  .route("/:problemId")
  .get(problemController.getSingleProblem)
  .patch(authController.protectRoute, problemController.updateProblem)
  .delete(authController.protectRoute, problemController.deleteProblem);

module.exports = router;
