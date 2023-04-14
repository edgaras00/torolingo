import React from "react";
import { Link } from "react-router-dom";
import mascotPhone from "../mascot-phone.png";
import mascotPaper2 from "../mascot-paper2.jpg";
import mascotSitting from "../mascot-sitting.png";
import bullTongue from "../bull-tongue.png";

import "../styles/practice.css";

const Practice = () => {
  const lessons = ["u1l1", "u1l2", "u1l3", "u1l4", "u1l5"];
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
