import React, { useState, useEffect } from "react";
import WordBubble from "./WordBubble";
import "../styles/pictureCard.css";

const PictureCard = () => {
  const [wordBank, setWordBank] = useState([]);
  const [selected, setSelected] = useState(null);
  const [correctSolution, setCorrectSolution] = useState("");

  useEffect(() => {
    const sol = "tren";
    const modifiedSol = sol.replace(/[^\w\s\u00C0-\u00FF]/g, "").toLowerCase();
    setCorrectSolution(modifiedSol);

    const data = ["hombre", "carro", "tren", "pan"];
    setWordBank(data);
  }, []);

  const handleClick = (event) => {
    const selectedWord = event.target.cloneNode();
    const wordIndex = selectedWord.dataset.position * 1;
    selectedWord.textContent = event.target.textContent;
    selectedWord.setAttribute("data-position", wordIndex);
    setSelected(selectedWord);

    const w = [...wordBank];
    if (!selected || selected.textContent !== event.target.textContent) {
      w[wordIndex] = "0".repeat(selectedWord.textContent.length);
    }
    if (selected && selected.textContent !== event.target.textContent) {
      const word = selected.textContent;
      const wordIndex = selected.dataset.position * 1;
      w[wordIndex] = word;
    }
    setWordBank(w);
  };

  const handleSelectedClick = (event) => {
    const word = event.target.textContent;
    const wordIndex = event.target.dataset.position * 1;
    const w = [...wordBank];
    w[wordIndex] = word;
    setWordBank(w);

    setSelected(null);
  };

  const bubbles = wordBank.map((word, index) => (
    <WordBubble
      text={word}
      key={index}
      position={index}
      handleClick={handleClick}
    />
  ));

  let selectedBubble = null;
  if (selected) {
    selectedBubble = (
      <WordBubble
        text={selected.textContent}
        position={selected.dataset.position}
        handleClick={handleSelectedClick}
      />
    );
  }
  console.log(correctSolution);

  return (
    <div className="translation-card">
      <div className="card-top">
        <div className="exit-lesson">
          <button className="exit-button">X</button>
        </div>
        <div className="problem-header-container">
          <h3 className="problem-header">Fill in the blank</h3>
        </div>
        <div className="picture-problem">
          <div className="image-container">
            <div className="image"></div>
          </div>
          <div className="pic-sentence-container">
            <div className="pic-sentence">Aqui esta el</div>
            <div className="pic-blank">{selectedBubble}</div>
          </div>
        </div>
      </div>
      <div className="card-middle pic-middle">
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

export default PictureCard;
