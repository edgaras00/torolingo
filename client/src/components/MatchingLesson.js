import React, { useState, useEffect } from "react";
import ListeningCard from "./ListeningCard";
import ListeningWritingCard from "./ListeningWritingCard";

const MatchingLesson = () => {
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    const fetchMatchingQuestions = async () => {
      try {
        const response = await fetch("htttp://localhost:5000/problems/match");
        const data = await response.json();
        setQuestionData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMatchingQuestions();
  }, []);

  const questionCards = questionData.map((question, index) => {
    if (question.problemType === "listening") {
      return (
        <ListeningCard
          onNextQuestion={handleNextQuestion}
          audio={question.audioURL}
          slowAudio={question.slowAudioURL}
          addMistake={handleMistake}
          key={index}
          text={question.text}
          solution={question.solution}
          normalizedSolution={normalizeSolution(question.solution)}
          words={question.wordBank}
          translation={question.translation}
          header="Tap what you hear"
        />
      );
    } else {
      return (
        <ListeningWritingCard
          onNextQuestion={handleNextQuestion}
          audio={question.audioURL}
          slowAudio={question.slowAudioURL}
          addMistake={handleMistake}
          key={index}
          text={question.text}
          solution={question.solution}
          normalizedSolution={normalizeSolution(question.solution)}
          normalizeText={normalizeSolution}
          header="Type what you hear"
          translation={question.translation}
        />
      );
    }
  });

  return (
    <div>
      <div></div>
    </div>
  );
};

export default MatchingLesson;
