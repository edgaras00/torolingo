import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Images
import mascotPhone from "../mascot-phone.png";
import mascotPaper2 from "../mascot-paper2.jpg";
import mascotSitting from "../mascot-sitting.png";
import bullTongue from "../bull-tongue.png";

import "../styles/practice.css";

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
            <img src={mascotPhone} width="104px" alt="mascot" />
            <div>Lesson</div>
          </div>
        </Link>
        <Link to="/practice/matching" state={{ from: "practice" }}>
          <div className="practice-card vocabulary-practice">
            <img src={bullTongue} width="104px" alt="mascot" />
            <div>Vocabulary</div>
          </div>
        </Link>
        <Link to="/practice/listening" state={{ from: "practice" }}>
          <div className="practice-card listening-practice">
            <img src={mascotSitting} width="104px" alt="mascot" />
            <div>Listening</div>
          </div>
        </Link>
        <Link to={`/${randomLesson}`} state={{ from: "practice" }}>
          <div
            className="practice-card test-practice"
            state={{ from: "practice" }}
          >
            <img src={mascotPaper2} width="104px" alt="mascot" />
            <div>Test</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Practice;
