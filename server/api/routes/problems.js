const express = require("express");
const problemController = require("../controllers/problems");

const router = express.Router();

router
  .route("/")
  .get(problemController.getAllProblems)
  .post(problemController.createProblem);

router
  .route("/:problemId")
  .get(problemController.getSingleProblem)
  .patch(problemController.updateProblem)
  .delete(problemController.deleteProblem);

module.exports = router;
