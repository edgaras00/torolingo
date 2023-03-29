import React, { useState, useEffect, useTransition } from "react";
import { useLocation } from "react-router-dom";
import TranslationCard from "./TranslationCard";
import ListeningCard from "./ListeningCard";
import ListeningWritingCard from "./ListeningWritingCard";
import MultipleChoiceCard from "./MultipleChoiceCard";
// import VocabMatchCard from "./VocabMatchCard";
// import PictureCard from "./PictureCard";
import PicCardMC from "./PicCardMC";
import audio from "../hombre.mp3";
import "../styles/lesson.css";
import PictureCard from "./PictureCard";
import VocabMatchCard from "./VocabMatchCard";
import { shuffleArray } from "../utils";

const Lesson = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const { pathname } = useLocation();
  const unit = pathname.replace("/", "");

  const exampleAudio = new Audio(audio);

  useEffect(() => {
    setQuestions([
      {
        type: "vocabMatch",
        header: "Tap the matching pairs",
        data: [
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
        ],
      },
      {
        type: "translation",
        text: "Yo bebo leche",
        solution: "I drink milk",
        header: "Translate this sentence",
        unit: 1,
        lesson: 1,
        wordBank: ["I", "milk", "eat", "drink", "You", "apple"],
      },
      {
        type: "mc",
        text: "How do you say `I am`?",
        solution: "soy",
        unit: 1,
        lesson: 1,
        choices: ["soy", "comer", "es"],
      },
      {
        type: "picture",
        text: "Select the correct option",
        solution: "hombre",
        unit: 1,
        lesson: 1,
        choices: ["hombre", "mujer", "pan"],
      },
      {
        type: "listening",
        text: "Tap what you hear",
        solution: "Yo soy un hombre",
        audio: exampleAudio,
        unit: 1,
        lesson: 1,
        wordBank: [
          "hombre",
          "Yo",
          "eres",
          "soy",
          "comer",
          "una",
          "mujer",
          "un",
        ],
      },
      {
        type: "listeningWriting",
        text: "Type what you hear",
        solution: "Yo soy un hombre",
        audio: exampleAudio,
        unit: 1,
        lesson: 1,
      },
      {
        type: "picture2",
        header: "Fill in the blank",
        text: "Aqui esta el",
        solution: "carro",
        unit: 1,
        lesson: 1,
        wordBank: ["carro", "tren", "pan", "hombre"],
      },
    ]);
    console.log(unit);
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };

  const questionCards = questions.map((question, index) => {
    if (question.type === "vocabMatch") {
      const modifiedPairs = question.data.map((pair) => {
        pair.matched = false;
        pair.err = false;
        return pair;
      });
      const shuffledEnglish = shuffleArray(
        modifiedPairs.map((pair, index) => ({
          word: pair.english,
          index,
          err: false,
        }))
      );
      const shuffledSpanish = shuffleArray(
        modifiedPairs.map((pair, index) => ({
          word: pair.spanish,
          index,
          err: false,
        }))
      );
      return (
        <VocabMatchCard
          onNextQuestion={handleNextQuestion}
          key={index}
          header={question.header}
          pairs={modifiedPairs}
          english={shuffledEnglish}
          spanish={shuffledSpanish}
        />
      );
    }
    if (question.type === "translation") {
      return (
        <TranslationCard
          onNextQuestion={handleNextQuestion}
          key={index}
          text={question.text}
          solution={question.solution}
          words={question.wordBank}
        />
      );
    }
    if (question.type === "mc") {
      return (
        <MultipleChoiceCard
          onNextQuestion={handleNextQuestion}
          key={index}
          text={question.text}
          solution={question.solution}
          choices={question.choices}
        />
      );
    }
    if (question.type === "picture") {
      return (
        <PicCardMC
          onNextQuestion={handleNextQuestion}
          key={index}
          text={question.text}
          solution={question.solution}
          choices={question.choices}
        />
      );
    }
    if (question.type === "listening") {
      return (
        <ListeningCard
          onNextQuestion={handleNextQuestion}
          key={index}
          text={question.text}
          solution={question.solution}
          words={question.wordBank}
          audio={exampleAudio}
          slowAudio={exampleAudio}
        />
      );
    }

    if (question.type === "listeningWriting") {
      return (
        <ListeningWritingCard
          onNextQuestion={handleNextQuestion}
          key={index}
          text={question.text}
          solution={question.solution}
          audio={question.audio}
          slowAudio={question.audio}
        />
      );
    }
    if (question.type === "picture2") {
      return (
        <PictureCard
          onNextQuestion={handleNextQuestion}
          key={index}
          text={question.text}
          header={question.header}
          solution={question.solution}
          words={question.wordBank}
        />
      );
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
      case 5:
        return questionCards[4];
      case 6:
        return questionCards[5];
      case 7:
        return questionCards[6];
      default:
        return null;
    }
  };
  return <div className="lesson-container">{renderQuestion()}</div>;
};

export default Lesson;
