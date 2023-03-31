import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TranslationCard from "./TranslationCard";
import ListeningCard from "./ListeningCard";
import ListeningWritingCard from "./ListeningWritingCard";
import MultipleChoiceCard from "./MultipleChoiceCard";
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

  const exampleAudio = new Audio(audio);

  const normalizeSolution = (solution) => {
    return solution.replace(/[^\w\s\u00C0-\u00FF]/g, "").toLowerCase();
  };

  useEffect(() => {
    const unitLessonArray = pathname.replace("/", "").split("l");
    const unit = unitLessonArray[0].slice(1);
    const lesson = unitLessonArray[1];

    const fetchProblemdata = async (unit, lesson) => {
      try {
        const response = await fetch(
          `http://localhost:5000/problems/lessons?unit=${unit}&lesson=${lesson}`
        );
        const problemData = await response.json();
        setQuestions(problemData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProblemdata(unit, lesson);
  }, [pathname]);

  const handleNextQuestion = (
    correctSolution,
    userSolution,
    successCallback,
    failureCallback
  ) => {
    if (correctSolution === userSolution) {
      successCallback();
    } else {
      failureCallback();
    }
    // setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    return;
  };

  const questionCards = questions.map((question, index) => {
    if (question.problemType === "vocabMatch") {
      const modifiedPairs = question.data.map((pair) => {
        pair.matched = false;
        pair.err = false;
        return pair;
      });

      const englishWords = modifiedPairs.map((pair, index) => ({
        word: pair.english,
        index,
        err: false,
      }));
      const shuffledEnglish = shuffledSpanish(englishWords);

      const spanishWords = modifiedPairs.map((pair, index) => ({
        word: pair.spanish,
        index,
        err: false,
      }));
      const shuffledSpanish = shuffleArray(spanishWords);

      return (
        <VocabMatchCard
          onNextQuestion={handleNextQuestion}
          key={index}
          header="Tap the matching pairs"
          pairs={modifiedPairs}
          english={shuffledEnglish}
          spanish={shuffledSpanish}
        />
      );
    }
    if (question.problemType === "translation") {
      return (
        <TranslationCard
          header="Translate this sentence"
          onNextQuestion={handleNextQuestion}
          key={index}
          text={question.text}
          solution={question.solution}
          normalizedSolution={normalizeSolution(question.solution)}
          words={question.wordBank}
        />
      );
    }
    if (question.problemType === "multipleChoice") {
      return (
        <MultipleChoiceCard
          onNextQuestion={handleNextQuestion}
          key={index}
          text={question.text}
          solution={question.solution}
          normalizedSolution={normalizeSolution(question.solution)}
          choices={question.choices}
        />
      );
    }
    if (question.problemType === "multipleChoicePicture") {
      return (
        <PicCardMC
          onNextQuestion={handleNextQuestion}
          key={index}
          text={question.text}
          solution={question.solution}
          normalizedSolution={normalizeSolution(question.solution)}
          choices={question.choices}
        />
      );
    }
    if (question.problemType === "listening") {
      return (
        <ListeningCard
          onNextQuestion={handleNextQuestion}
          key={index}
          text={question.text}
          solution={question.solution}
          normalizedSolution={normalizeSolution(question.solution)}
          words={question.wordBank}
          audio={exampleAudio}
          slowAudio={exampleAudio}
          header="Tap what you hear"
        />
      );
    }

    if (question.problemType === "listeningWriting") {
      return (
        <ListeningWritingCard
          onNextQuestion={handleNextQuestion}
          key={index}
          text={question.text}
          solution={question.solution}
          normalizedSolution={normalizeSolution(question.solution)}
          audio={question.audio}
          slowAudio={question.audio}
          header="Type what you hear"
        />
      );
    }
    if (question.problemType === "pictureBlank") {
      return (
        <PictureCard
          onNextQuestion={handleNextQuestion}
          key={index}
          text={question.text}
          solution={question.solution}
          normalizedSolution={normalizeSolution(question.solution)}
          words={question.wordBank}
          header="Fill in the blank"
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
      case 8:
        return questionCards[7];
      case 9:
        return questionCards[8];
      case 10:
        return questionCards[9];
      case 11:
        return questionCards[10];
      case 12:
        return questionCards[11];
      default:
        return null;
    }
  };
  return <div className="lesson-container">{renderQuestion()}</div>;
};

export default Lesson;
