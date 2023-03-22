import React, { useState, useEffect } from "react";
import WordBubble from "./WordBubble";
import NotebookLines from "./NotebookLines";
import "../styles/translationCard.css";

const TranslationCard = () => {
  const [wordBank, setWordBank] = useState([]);
  const [selected, setSelected] = useState([]);
  const [correctSolution, setCorrectSolution] = useState("");

  useEffect(() => {
    const sol = "Hello, bye.";
    const modifiedSol = sol.replace(/[^\w\s\u00C0-\u00FF]/g, "").toLowerCase();
    setCorrectSolution(modifiedSol);

    const data = [
      "hello",
      "bye",
      "test",
      "microphone",
      "goodbye",
      "school",
      "automatic",
    ];
    setWordBank(data);
  }, []);

  const handleClick = (event) => {
    const selectedWord = event.target.cloneNode();
    const wordIndex = selectedWord.dataset.position * 1;
    selectedWord.textContent = event.target.textContent;
    selectedWord.setAttribute("data-position", wordIndex);
    console.log(selectedWord);
    setSelected((prevState) => [...prevState, selectedWord]);

    const w = [...wordBank];
    w[wordIndex] = "0".repeat(selectedWord.textContent.length);
    setWordBank(w);
  };

  const handleSelectedClick = (event) => {
    const word = event.target.textContent;
    const wordIndex = event.target.dataset.position * 1;
    const w = [...wordBank];
    w[wordIndex] = word;
    setWordBank(w);

    const s = [...selected];
    const index = s.findIndex((arrayWord) => {
      return (
        arrayWord.textContent === word &&
        arrayWord.dataset.position === String(wordIndex)
      );
    });
    s.splice(index, 1);
    setSelected(s);
  };

  const bubbles = wordBank.map((word, index) => (
    <WordBubble
      text={word}
      key={index}
      position={index}
      handleClick={handleClick}
    />
  ));

  let selectedBubbles = [];
  if (selected.length > 0) {
    selectedBubbles = selected.map((element, index) => {
      const word = element.textContent;
      return (
        <WordBubble
          text={word}
          key={index}
          handleClick={handleSelectedClick}
          position={element.dataset.position}
        />
      );
    });
  }

  return (
    <div className="translation-card">
      <div className="card-top">
        <div className="exit-lesson">
          <button className="exit-button">X</button>
        </div>
        <div className="problem-header-container">
          <h3 className="problem-header">Write this in English</h3>
        </div>
        <div className="problem-wrapper">
          <div className="mascot"></div>
          <div className="speech-bubble">
            <p>Hello world!</p>
          </div>
        </div>
      </div>
      <div className="card-middle">
        <div className="solution-container">
          <div className="selected-words">
            <div className="aligned-words">{selectedBubbles}</div>
          </div>
          <div className="line-container">
            <NotebookLines />
          </div>
        </div>
        <div className="bubble-container">
          <div className="bubbles">{bubbles}</div>
        </div>
      </div>
      <div className="card-bottom">
        <button className="check-answer">CHECK</button>
      </div>
    </div>
  );
};

export default TranslationCard;
