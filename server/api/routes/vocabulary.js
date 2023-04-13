const express = require("express");
const vocabularyController = require("../controllers/vocabulary");

const router = express.Router();

router
  .route("/")
  .get(vocabularyController.getAllWords)
  .post(vocabularyController.createWord);

router.route("/unit").get(vocabularyController.getUnitWords);

router
  .route("/:wordId")
  .get(vocabularyController.getWord)
  .patch(vocabularyController.updateWord)
  .delete(vocabularyController.deleteWord);

module.exports = router;
