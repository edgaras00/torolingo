const express = require("express");
const problemController = require("../controllers/problems");
const authController = require("../controllers/auth");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protectRoute,
    authController.restrictRouteTo("admin"),
    problemController.getAllProblems
  )
  .post(authController.protectRoute, problemController.createProblem);

// router.route("/lessons").get(problemController.getLessonProblems);
// router.route("/listening").get(problemController.getListeningProblems);
// router.route("/match").get(problemController.getMatchingProblems);

router
  .route("/:problemId")
  .get(problemController.getSingleProblem)
  .patch(problemController.updateProblem)
  .delete(problemController.deleteProblem);

module.exports = router;
