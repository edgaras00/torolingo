import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NotebookLines from "./NotebookLines";
import CheckAnswer from "./CheckAnswer";

import {
  handleCheckAnswer,
  createUserSolution,
  createWordBubbles,
  createSelectedWordBubbles,
  playAudioOnMount,
} from "../utils";

// Icons
import soundIcon from "../sound.svg";
import turtleICon from "../turtle.svg";

import "../styles/listeningCard.css";

const ListeningCard = ({
  onNextQuestion,
  words,
  solution,
  normalizedSolution,
  audio,
  slowAudio,
  translation,
  addMistake,
  locationState,
}) => {
  const [wordBank, setWordBank] = useState([...words]);
  const [selected, setSelected] = useState([]);
  const [userSolution, setUserSolution] = useState(null);
  const [result, setResult] = useState("");
  const hasPlayedAudioRef = useRef(false);

  const audioElement = new Audio(audio);
  const slowAudioElement = new Audio(slowAudio);

  const handleAudioClick = () => {
    audioElement.play();
  };
  const handleSlowAudioClick = () => {
    slowAudioElement.play();
  };

  useEffect(() => {
    // Have the audio only play once during initial render
    playAudioOnMount(hasPlayedAudioRef, audio);
  }, [audio, hasPlayedAudioRef]);

  useEffect(() => {
    const solution = createUserSolution(selected);
    setUserSolution(solution);
  }, [selected]);

  const wordBubbles = createWordBubbles(wordBank, setSelected, setWordBank);

  const selectedWordBubbles = createSelectedWordBubbles(
    selected,
    wordBank,
    setWordBank,
    setSelected
  );

  return (
    <div className="translation-card">
      <div className="card-top">
        <div className="exit-lesson">
          <Link to={locationState ? `/${locationState.from}` : "/"}>
            <button className="exit-button">X</button>
          </Link>
        </div>
        <div className="problem-header-container">
          <h3 className="problem-header">Tap what you hear</h3>
        </div>
      </div>
      <div className="audio-box-wrapper">
        <div className="audio-box normal-audio" onClick={handleAudioClick}>
          <img src={soundIcon} alt="sound icon" />
        </div>
        <div className="audio-box slow-audio" onClick={handleSlowAudioClick}>
          <img src={turtleICon} alt="turtle icon" />
        </div>
      </div>
      <div className="card-middle">
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
      <CheckAnswer
        listening={true}
        result={result}
        onCheckAnswer={handleCheckAnswer}
        onNextQuestion={onNextQuestion}
        solution={solution}
        normalizedSolution={normalizedSolution}
        userSolution={userSolution}
        translation={translation}
        setResult={setResult}
        addMistake={addMistake}
      />
    </div>
  );
};

export default ListeningCard;
