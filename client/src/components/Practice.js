import React from "react";
import mascotPhone from "../mascot-phone.png";
import mascotPaper2 from "../mascot-paper2.jpg";
import mascotSitting from "../mascot-sitting.png";
import bullTongue from "../bull-tongue.png";

import "../styles/practice.css";

const Practice = () => {
  return (
    <div className="practice-section">
      <div className="practice-cards">
        <div className="practice-card lesson-practice">
          <img src={mascotPhone} width="104px" />
          <div>Lesson</div>
        </div>
        <div className="practice-card vocabulary-practice">
          <img src={bullTongue} width="104px" />
          <div>Vocabulary</div>
        </div>
        <div className="practice-card listening-practice">
          <img src={mascotSitting} width="104px" />
          <div>Listening</div>
        </div>
        <div className="practice-card test-practice">
          <img src={mascotPaper2} width="104px" />
          <div>Test</div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
