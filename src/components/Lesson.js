import React, { useState } from "react";
import TranslationCard from "./TranslationCard";
import ListeningCard from "./ListeningCard";
import ListeningWritingCard from "./ListeningWritingCard";
import MultipleChoiceCard from "./MultipleChoiceCard";
import VocabMatchCard from "./VocabMatchCard";
import PictureCard from "./PictureCard";
import PicCardMC from "./PicCardMC";
import "../styles/lesson.css";

const Lesson = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  console.log(currentQuestion);

  const handleNextQuestion = () => {
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 1:
        return <TranslationCard onNextQuestion={handleNextQuestion} />;
      case 2:
        return <ListeningCard onNextQuestion={handleNextQuestion} />;
      case 3:
        return <MultipleChoiceCard onNextQuestion={handleNextQuestion} />;
      case 4:
        return <PicCardMC onNextQuestion={handleNextQuestion} />;
      default:
        return null;
    }
  };
  return <div className="lesson-container">{renderQuestion()}</div>;
};

export default Lesson;
