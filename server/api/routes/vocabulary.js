const express = require("express");
const vocabularyController = require("../controllers/vocabulary");
const authController = require("../controllers/auth");

const router = express.Router();

router
  .route("/")
  .get(authController.protectRoute, vocabularyController.getAllWords)
  .post(
    authController.protectRoute,
    authController.restrictRouteTo("admin"),
    vocabularyController.createWord
  );

router
  .route("/:wordId")
  .get(authController.protectRoute, vocabularyController.getWord)
  .patch(
    authController.protectRoute,
    authController.restrictRouteTo("admin"),
    vocabularyController.updateWord
  )
  .delete(
    authController.protectRoute,
    authController.restrictRouteTo("admin"),
    vocabularyController.deleteWord
  );

module.exports = router;
