import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "../../styles/practice.css";

const Practice = () => {
  const { user } = useContext(AuthContext);

  // Prepare random lessons for practice
  let lessons = ["u1l1"];
  // Add lessons that the user has already completed
  for (const unit in user.progress) {
    for (const lesson in user.progress[unit]) {
      if (parseInt(unit) !== 1 || parseInt(lesson) !== 1) {
        lessons.push(`u${unit}l${lesson}`);
      }
    }
  }
  // Pick a random lesson
  const randomLesson = lessons[Math.floor(Math.random() * lessons.length)];

  return (
    <div className="practice-section">
      <div className="practice-cards">
        <Link to={`/${randomLesson}`} state={{ from: "practice" }}>
          <div className="practice-card lesson-practice">
            <img
              src={`${process.env.PUBLIC_URL}/images/mascots/mascot-2r.png`}
              className="practice-mascot"
              alt="mascot"
            />
            <div>Lesson</div>
          </div>
        </Link>
        <Link to="/practice/matching" state={{ from: "practice" }}>
          <div className="practice-card vocabulary-practice">
            <img
              src={`${process.env.PUBLIC_URL}/images/mascots/mascot-5r.png`}
              className="practice-mascot"
              alt="mascot"
            />
            <div>Vocabulary</div>
          </div>
        </Link>
        <Link to="/practice/listening" state={{ from: "practice" }}>
          <div className="practice-card listening-practice">
            <img
              src={`${process.env.PUBLIC_URL}/images/mascots/mascot-4l.png`}
              className="practice-mascot"
              alt="mascot"
            />
            <div>Listening</div>
          </div>
        </Link>
        <Link to={`/${randomLesson}`} state={{ from: "practice" }}>
          <div
            className="practice-card test-practice"
            state={{ from: "practice" }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/mascots/mascot-3r.jpg`}
              className="practice-mascot"
              alt="mascot"
            />
            <div>Test</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Practice;
