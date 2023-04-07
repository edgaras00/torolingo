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
import CompletedCard from "./CompletedCard";
import { shuffleArray } from "../utils";

const Lesson = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [mistakeCount, setMistakeCount] = useState(0);
  const { pathname } = useLocation();

  const handleMistake = () => setMistakeCount((prevState) => prevState + 1);

  const exampleAudio = new Audio(audio);

  const normalizeSolution = (solution) => {
    return solution.replace(/[^\w\s\u00C0-\u00FF]/g, "").toLowerCase();
    // .replace(/ +/g, " ");
  };

  console.log(questions);

  useEffect(() => {
    const unitLessonArray = pathname.replace("/", "").split("l");
    let unit = unitLessonArray[0].slice(1);
    let lesson = unitLessonArray[1];

    // Reuse questions for now
    if (unit === "1" && lesson === "6") {
      lesson = 5;
    }
    if (unit !== "1") {
      unit = 2;
      lesson = 1;
    }

    console.log(unit, lesson);
    const fetchProblemdata = async (unit, lesson) => {
      try {
        const response = await fetch(
          `http://localhost:5000/problems/lessons?unit=${unit}&lesson=${lesson}`
        );
        const problemData = await response.json();
        console.log(problemData);
        setQuestions(problemData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProblemdata(unit, lesson);
  }, [pathname]);

  // const handleNextQuestion = (
  //   correctSolution,
  //   userSolution,
  //   successCallback,
  //   failureCallback
  // ) => {
  //   console.log(correctSolution);
  //   console.log(userSolution);
  //   if (correctSolution === userSolution) {
  //     successCallback();
  //     setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  //   } else {
  //     failureCallback();
  //   }
  //   return;
  // };

  const handleNextQuestion = () =>
    setCurrentQuestion((prevState) => prevState + 1);

  const handleNextQuestionMatch = (
    matches,
    successCallback,
    failureCallback
  ) => {
    if (matches.every((pair) => pair.matched)) {
      successCallback();
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    } else {
      failureCallback();
    }
  };

  const questionCards = questions.map((question, index) => {
    if (question.problemType === "match") {
      const modifiedPairs = question.pairs.map((pair) => {
        pair.matched = false;
        pair.err = false;
        return pair;
      });

      const englishWords = modifiedPairs.map((pair, index) => ({
        word: pair.english,
        index,
        err: false,
      }));
      const shuffledEnglish = shuffleArray(englishWords);

      const spanishWords = modifiedPairs.map((pair, index) => ({
        word: pair.spanish,
        index,
        err: false,
      }));
      const shuffledSpanish = shuffleArray(spanishWords);

      return (
        <VocabMatchCard
          // onNextQuestion={handleNextQuestionMatch}
          onNextQuestion={handleNextQuestion}
          addMistake={handleMistake}
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
          addMistake={handleMistake}
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
          addMistake={handleMistake}
          key={index}
          text={question.text}
          solution={question.solution}
          choices={question.choices}
          normalizedSolution={normalizeSolution(question.solution)}
        />
      );
    }
    if (question.problemType === "multipleChoicePicture") {
      return (
        <PicCardMC
          onNextQuestion={handleNextQuestion}
          addMistake={handleMistake}
          key={index}
          text={question.text}
          solution={question.solution}
          choices={question.choices}
        />
      );
    }
    if (question.problemType === "listening") {
      return (
        <ListeningCard
          onNextQuestion={handleNextQuestion}
          addMistake={handleMistake}
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
          addMistake={handleMistake}
          key={index}
          text={question.text}
          solution={question.solution}
          normalizedSolution={normalizeSolution(question.solution)}
          normalizeText={normalizeSolution}
          audio={question.audio}
          slowAudio={question.audio}
          header="Type what you hear"
        />
      );
    }
    if (
      question.problemType === "pictureBlank" ||
      question.problemType === "fillBlank"
    ) {
      return (
        <PictureCard
          onNextQuestion={handleNextQuestion}
          addMistake={handleMistake}
          key={index}
          text={question.text}
          solution={question.solution}
          normalizedSolution={normalizeSolution(question.solution)}
          normalizeText={normalizeSolution}
          words={question.wordBank}
          header="Fill in the blank"
        />
      );
    }
  });

  questionCards.push(
    <CompletedCard
      mistakeCount={mistakeCount}
      questionCount={questionCards.length}
      key="complete-card"
    />
  );

  return (
    <div className="lesson-container">
      {questionCards.map((question, index) => {
        if (index + 1 === currentQuestion) {
          return question;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Lesson;
