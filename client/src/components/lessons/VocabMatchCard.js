import React, { useState, useEffect } from "react";
import QuestionHeader from "./QuestionHeader";

import "../../styles/vocabMatchCard.css";

const VocabMatchCard = ({
  header,
  onNextQuestion,
  pairs,
  english,
  spanish,
  addMistake,
  locationState,
}) => {
  // Make a deep copy of the passed in pairs array
  const [match, setMatch] = useState(JSON.parse(JSON.stringify(pairs)));
  const [firstSelected, setFirstSelected] = useState(null);
  const [englishWords, setEnglishWords] = useState([...english]);
  const [spanishWords, setSpanishWords] = useState([...spanish]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 13) {
        if (match.every((pair) => pair.matched)) {
          onNextQuestion();
          return;
        }
      }
    };
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [match, onNextQuestion]);

  //   Helper function
  const resetWrongWords = (array) => {
    const modifiedArray = array.map((word) => {
      word.err = false;
      return word;
    });
    return modifiedArray;
  };

  const resetAllWrongWords = () => {
    // Reset words that are marked wrong
    const englishWordsRenewed = resetWrongWords([...englishWords]);
    const spanishWordsRenewed = resetWrongWords([...spanishWords]);
    setEnglishWords(englishWordsRenewed);
    setSpanishWords(spanishWordsRenewed);
    return;
  };

  const matchWords = (pair) => {
    const pairIndex = match.findIndex((item) => item === pair);
    const matchCopy = [...match];
    matchCopy[pairIndex].matched = true;
    setMatch(matchCopy);
  };

  const markWrongMatch = () => {
    addMistake();
    const englishIndex = englishWords.findIndex(
      (word) => word.word === firstSelected
    );
    const spanishIndex = spanishWords.findIndex(
      (word) => word.word === firstSelected
    );
    if (englishIndex !== -1) {
      const englishCopy = [...englishWords];
      englishCopy[englishIndex].err = true;
      setEnglishWords(englishCopy);
      return;
    }
    if (spanishIndex !== -1) {
      const spanishCopy = [...spanishWords];
      spanishCopy[spanishIndex].err = true;
      setSpanishWords(spanishCopy);
      return;
    }
  };

  const handleClick = (event) => {
    const word = event.target.textContent;
    // Mark as firstSelected if no other words are selected
    if (!firstSelected) {
      // Reset words that are marked wrong | err --> false
      resetAllWrongWords();
      //   Select new word
      setFirstSelected(word);
      return;
    }
    if (firstSelected) {
      // Check if pairs are matched | Set as {matched: true} if true
      match.forEach((pair) => {
        if (
          (pair.english === word && pair.spanish === firstSelected) ||
          (pair.english === firstSelected && pair.spanish === word)
        ) {
          matchWords(pair);
          setFirstSelected(null);
          return;
        }
        // Wrong match
        if (
          (pair.english === firstSelected && pair.spanish !== word) ||
          (pair.english === word && pair.spanish !== firstSelected)
        ) {
          markWrongMatch();
          setFirstSelected(null);
          return;
        }
      });
    }
  };

  //   English cards
  const englishCards = englishWords.map((word, index) => {
    const matchBool = match[word.index].matched;
    const matchClass = matchBool ? "matched" : null;
    const selectedClass = firstSelected === word.word ? "selected" : null;
    const wrong = word.err ? "wrong" : null;

    return (
      <div
        key={index}
        className={`match-card ${matchClass} ${selectedClass} ${wrong}`}
        onClick={matchBool ? null : handleClick}
      >
        {word.word}
      </div>
    );
  });

  //   Spanish cards
  const spanishCards = spanishWords.map((word, index) => {
    const matchBool = match[word.index].matched;
    const matchClass = matchBool ? "matched" : null;
    const selectedClass = firstSelected === word.word ? "selected" : null;
    const wrong = word.err ? "wrong" : null;

    return (
      <div
        key={index}
        className={`match-card ${matchClass} ${selectedClass} ${wrong}`}
        // onClick={handleClick}
        onClick={matchBool ? null : handleClick}
      >
        {word.word}
      </div>
    );
  });

  return (
    <div className="vocab-match">
      <QuestionHeader text={header} locationState={locationState} />
      <div className="vocab-card-middle">
        <div className="match-container">
          <div className="left-side">{englishCards}</div>
          <div className="right-side">{spanishCards}</div>
        </div>
      </div>
      <div className="card-bottom match-bottom">
        {match.every((pair) => pair.matched) ? (
          <button
            className="check-answer-btn match-check"
            onClick={onNextQuestion}
          >
            CONTINUE
          </button>
        ) : null}
      </div>
    </div>
  );
};
export default VocabMatchCard;
