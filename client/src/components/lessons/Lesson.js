import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import TranslationCard from "./TranslationCard";
import ListeningCard from "./ListeningCard";
import ListeningWritingCard from "./ListeningWritingCard";
import MultipleChoiceCard from "./MultipleChoiceCard";
import PicCardMC from "./PicCardMC";
import PictureCard from "./PictureCard";
import VocabMatchCard from "./VocabMatchCard";
import CompletedCard from "./CompletedCard";
import ErrorPage from "../errors/ErrorPage";

import {
  getUnitAndLesson,
  normalizeSolution,
  createMatchWords,
  AppError,
} from "../../utils";

import "../../styles/lesson.css";

const Lesson = ({ matchingOnly, listeningOnly }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [mistakeCount, setMistakeCount] = useState(0);
  const [isError, setIsError] = useState(false);

  const { pathname } = useLocation();
  const location = useLocation();
  const locationState = location.state;

  // Get unit and lesson numbers
  let [unit, lesson] = getUnitAndLesson(pathname);

  // Increase mistake count
  const handleMistake = () => setMistakeCount((mistakes) => mistakes + 1);

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
          url = "/api/problems?problemType=match";
        }

        if (listeningOnly) {
          url =
            "/api/problems?problemType=listening&problemType=listeningWriting";
        }

        const response = await fetch(url);
        const data = await response.json();

        if (response.status !== 200) {
          throw new AppError(data.message, response.status);
        }

        data.data.problems.push({ problemType: "completed" });
        setQuestions(data.data.problems);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
    };
    fetchProblemdata(unit, lesson);
  }, [pathname, matchingOnly, listeningOnly]);

  const handleNextQuestion = () =>
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);

  const questionCards = questions.map((question, index) => {
    if (question.problemType === "match") {
      // Modify word pair object for match marking
      const [modifiedPairs, englishWords, spanishWords] = createMatchWords(
        question.pairs
      );
      return (
        <VocabMatchCard
          onNextQuestion={handleNextQuestion}
          addMistake={handleMistake}
          key={index}
          header="Tap the matching pairs"
          pairs={modifiedPairs}
          english={englishWords}
          spanish={spanishWords}
          locationState={locationState}
          mpairs={question.pairs}
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
          altSolution={
            question.altSolution
              ? normalizeSolution(question.altSolution)
              : null
          }
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
    } else if (
      question.problemType === "multipleChoicePicture" ||
      question.problemType === "pictureChoice"
    ) {
      return (
        <PicCardMC
          onNextQuestion={handleNextQuestion}
          addMistake={handleMistake}
          key={index}
          text={question.text}
          solution={question.solution}
          choices={question.choices}
          image={question.pictureURL}
          imageChoices={question.pictures}
          locationState={locationState}
          pictureChoice={
            question.problemType === "pictureChoice" ? true : false
          }
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
          isPractice={matchingOnly || listeningOnly ? true : null}
        />
      );
    }
  });

  return (
    <div className="lesson-container">
      {!isError ? (
        questionCards.slice(10).map((question, index) => {
          if (index + 1 === currentQuestion) {
            return question;
          } else {
            return null;
          }
        })
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Lesson;
