import NotebookLines from "./NotebookLines";
import { createWordBubbles, createSelectedWordBubbles } from "../utils";

import "../styles/wordbankSolution.css";

const WordbankSolution = ({ wordBank, selected, setSelected, setWordBank }) => {
  const wordBubbles = createWordBubbles(wordBank, setSelected, setWordBank);
  const selectedWordBubbles = createSelectedWordBubbles(
    selected,
    wordBank,
    setWordBank,
    setSelected
  );
  return (
    <div className="wordbank-solution">
      <div className="solution-container">
        <div className="selected-words">
          <div className="aligned-words">{selectedWordBubbles}</div>
        </div>
        <div className="line-container">
          <NotebookLines />
        </div>
      </div>
      <div className="bubble-container">
        <div className="bubbles">{wordBubbles}</div>
      </div>
    </div>
  );
};

export default WordbankSolution;
