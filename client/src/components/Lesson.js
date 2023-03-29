import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TranslationCard from "./TranslationCard";
import ListeningCard from "./ListeningCard";
// import ListeningWritingCard from "./ListeningWritingCard";
import MultipleChoiceCard from "./MultipleChoiceCard";
// import VocabMatchCard from "./VocabMatchCard";
// import PictureCard from "./PictureCard";
import PicCardMC from "./PicCardMC";
import "../styles/lesson.css";

const Lesson = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const { pathname } = useLocation();
  const unit = pathname.replace("/", "");

  useEffect(() => {
    setQuestions([
      { type: "translation" },
      { type: "mc" },
      { type: "picture" },
      { type: "listening" },
    ]);
    console.log(unit);
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };

  const questionCards = questions.map((question, index) => {
    if (question.type === "translation") {
      return (
        <TranslationCard onNextQuestion={handleNextQuestion} key={index} />
      );
    }
    if (question.type === "mc") {
      return (
        <MultipleChoiceCard onNextQuestion={handleNextQuestion} key={index} />
      );
    }
    if (question.type === "picture") {
      return <PicCardMC onNextQuestion={handleNextQuestion} key={index} />;
    }
    if (question.type === "listening") {
      return <ListeningCard onNextQuestion={handleNextQuestion} key={index} />;
    }
  });

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 1:
        return questionCards[0];
      case 2:
        return questionCards[1];
      case 3:
        return questionCards[2];
      case 4:
        return questionCards[3];
      default:
        return null;
    }
  };
  return <div className="lesson-container">{renderQuestion()}</div>;
};

export default Lesson;
