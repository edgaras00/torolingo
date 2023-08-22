import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { setRequestOptions, AppError } from "../../utils";

import mascotImage from "../../images/mascots/mascot-4r.png";

import "../../styles/completedCard.css";

const CompleteCard = ({
  mistakeCount,
  questionCount,
  unit,
  lesson,
  isPractice,
}) => {
  const [displayScore, setDisplayScore] = useState(0);
  const [displayMistakes, setDisplayMistakes] = useState(0);
  const [isError, setIsError] = useState(false);
  const { setUser, token } = useContext(AuthContext);

  const navigate = useNavigate();

  // Calculate lesson score
  const rightAnswers = questionCount - mistakeCount;
  const score = Math.round((rightAnswers / questionCount) * 100);
  // Set class if there are any mistakes or not (for color)
  const mistakeClass = mistakeCount > 0 ? "has-mistakes" : "no-mistakes";

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 13) {
        navigate("/");
      }
    };
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [navigate]);

  useEffect(() => {
    const updateProgress = async (unit, lesson, score) => {
      try {
        const requestOptions = setRequestOptions(
          "PATCH",
          {
            unit,
            lesson,
            score,
          },
          token
        );
        let url = "https://torolingo-api.onrender.com/api/user/updateScore";
        if (import.meta.env.REACT_APP_ENV === "development") {
          url = "/api/user/updateScore";
        }
        const response = await fetch(url, requestOptions);
        const data = await response.json();

        if (response.status !== 200) {
          throw new AppError(data.message, response.status);
        }

        // Update user data
        setUser(data.data.user);
        localStorage.setItem("user", JSON.stringify(data.data.user));
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
    };

    if (displayMistakes < mistakeCount) {
      const intervalId = setInterval(() => {
        setDisplayMistakes((mistakes) => mistakes + 1);
      }, 6);
      return () => clearInterval(intervalId);
    }

    if (displayScore < score) {
      const intervalId = setInterval(() => {
        setDisplayScore((score) => score + 1);
      }, 5);
      return () => clearInterval(intervalId);
    }
    if (!isPractice) {
      updateProgress(unit, lesson, score);
    }
  }, [
    score,
    displayScore,
    mistakeCount,
    displayMistakes,
    setUser,
    lesson,
    unit,
    isPractice,
    token,
  ]);

  return (
    <div className="completed-card">
      <div className="completed-top">
        <div className="completed-picture">
          <img
            src={mascotImage}
            alt="mascot"
          />
        </div>
      </div>
      <div className="completed-middle">
        <div className="result-wrapper">
          <div className={`result-head ${mistakeClass}`}>Mistakes</div>
          <div className={`result ${mistakeClass}`}>{displayMistakes}</div>
        </div>
        <div className="result-wrapper">
          <div className="result-head total-score">Score</div>
          <div className="result total-score">{displayScore}%</div>
        </div>
      </div>
      <div className="progress-error">
        {isError ? (
          <>
            <div>Something went wrong</div>
            <div>Could not save progress data</div>
          </>
        ) : null}
      </div>
      <div className="completed-bottom">
        <Link to="/">
          <button className="check-answer-btn completed-continue">
            CONTINUE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CompleteCard;
