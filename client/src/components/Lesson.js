import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TranslationCard from "./TranslationCard";
import ListeningCard from "./ListeningCard";
import ListeningWritingCard from "./ListeningWritingCard";
import MultipleChoiceCard from "./MultipleChoiceCard";
import PicCardMC from "./PicCardMC";
import "../styles/lesson.css";
import PictureCard from "./PictureCard";
import VocabMatchCard from "./VocabMatchCard";
import CompletedCard from "./CompletedCard";
import { shuffleArray, getUnitAndLesson } from "../utils";

const Lesson = ({ matchingOnly, listeningOnly }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [mistakeCount, setMistakeCount] = useState(0);
  const { pathname } = useLocation();

  const location = useLocation();
  const locationState = location.state;
  let [unit, lesson] = getUnitAndLesson(pathname);

  const handleMistake = () => setMistakeCount((prevState) => prevState + 1);

  const normalizeSolution = (solution) => {
    return solution
      .replace(/[^\w\s\u00C0-\u00FF]/g, "")
      .toLowerCase()
      .replace(/ +/g, " ");
  };

  useEffect(() => {
    let [unit, lesson] = getUnitAndLesson(pathname);

    // Reuse questions for now
    if (unit === "1" && lesson === "6") {
      lesson = 5;
    }
    if (unit !== "1") {
      unit = 2;
      lesson = 1;
    }

    const fetchProblemdata = async (unit, lesson) => {
      try {
        let url = `/api/problems?unit=${unit}&lesson=${lesson}`;

        if (matchingOnly) {
          url = "/api/problems/match";
        }

        if (listeningOnly) {
          url = "/api/problems/listening";
        }

        const response = await fetch(url);
        const problemData = await response.json();
        problemData.data.problems.push({ problemType: "completed" });
        setQuestions(problemData.data.problems);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProblemdata(unit, lesson);
  }, [pathname, matchingOnly, listeningOnly]);

  const handleNextQuestion = () =>
    setCurrentQuestion((prevState) => prevState + 1);

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
          onNextQuestion={handleNextQuestion}
          addMistake={handleMistake}
          key={index}
          header="Tap the matching pairs"
          pairs={modifiedPairs}
          english={shuffledEnglish}
          spanish={shuffledSpanish}
          locationState={locationState}
        />
      );
    } else if (question.problemType === "translation") {
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
          locationState={locationState}
          altSolution={question.altSolution}
        />
      );
    } else if (question.problemType === "multipleChoice") {
      return (
        <MultipleChoiceCard
          onNextQuestion={handleNextQuestion}
          addMistake={handleMistake}
          key={index}
          text={question.text}
          solution={question.solution}
          choices={question.choices}
          normalizedSolution={normalizeSolution(question.solution)}
          locationState={locationState}
        />
      );
    } else if (question.problemType === "multipleChoicePicture") {
      return (
        <PicCardMC
          onNextQuestion={handleNextQuestion}
          addMistake={handleMistake}
          key={index}
          text={question.text}
          solution={question.solution}
          choices={question.choices}
          image={question.pictureURL}
          locationState={locationState}
        />
      );
    } else if (question.problemType === "listening") {
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
          locationState={locationState}
        />
      );
    } else if (question.problemType === "listeningWriting") {
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
          locationState={locationState}
        />
      );
    } else if (
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
          translation={question.translation}
          normalizedSolution={normalizeSolution(question.solution)}
          normalizeText={normalizeSolution}
          words={question.wordBank}
          header="Fill in the blank"
          image={question.pictureURL}
          locationState={locationState}
        />
      );
    } else {
      return (
        <CompletedCard
          mistakeCount={mistakeCount}
          questionCount={questions.length - 1}
          key="complete-card"
          unit={unit}
          lesson={lesson}
        />
      );
    }
  });

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
