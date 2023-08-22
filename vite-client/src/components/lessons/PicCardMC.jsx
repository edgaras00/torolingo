import React, { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import Choice from "./Choice";
import CheckAnswer from "./CheckAnswer";
import { capitalize, handleCheckAnswer } from "../../utils";

import "../../styles/question.css";
import "../../styles/picCardMC.css";

const PicCardMC = ({
  onNextQuestion,
  text,
  solution,
  choices,
  addMistake,
  image,
  imageChoices,
  locationState,
  pictureChoice,
}) => {
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");

  const handleOptionChange = (event) => setUserChoice(event.target.value);

  const answerChoices = choices.map((choice, index) => (
    <Choice
      key={index}
      value={choice}
      choiceState={userChoice}
      onOptionChange={handleOptionChange}
      image={pictureChoice ? imageChoices[index] : null}
    />
  ));

  return (
    <div className="question-card">
      <QuestionHeader locationState={locationState} text={text} />
      <div className="mc-card-middle">
        {pictureChoice ? null : (
          <div className="mc-picture-wrapper">
            <img src={image} alt="question" />
          </div>
        )}
        <div className="choices-container">
          <form className={pictureChoice ? "mc-pic-form" : "mc-form"}>
            {answerChoices}
          </form>
        </div>
      </div>
      <CheckAnswer
        result={result}
        onCheckAnswer={handleCheckAnswer}
        onNextQuestion={onNextQuestion}
        solution={capitalize(solution)}
        normalizedSolution={solution}
        userSolution={userChoice}
        setResult={setResult}
        addMistake={addMistake}
      />
    </div>
  );
};

export default PicCardMC;
