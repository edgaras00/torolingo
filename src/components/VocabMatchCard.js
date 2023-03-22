import React from "react";
import "../styles/vocabMatchCard.css";

const VocabMatchCard = () => {
  const data = [
    {
      english: "man",
      spanish: "hombre",
    },
    {
      english: "woman",
      spanish: "mujer",
    },
    {
      english: "hello",
      spanish: "hola",
    },
    {
      english: "thank you",
      spanish: "gracias",
    },
  ];

  return (
    <div className="vocab-match">
      <div className="card-top">
        <div className="exit-lesson">
          <button className="exit-button">X</button>
          <div className="problem-header-container">
            <h3 className="problem-header">Tap the matching pairs</h3>
          </div>
        </div>
      </div>
      <div className="vocab-card-middle">
        <div className="match-grid"></div>
      </div>
    </div>
  );
};

export default VocabMatchCard;
