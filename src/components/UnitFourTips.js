import React from "react";
import grandmaDogPicture from "../grandma-dog.svg";
import manQuestionPicture from "../man-question.svg";
import womanCatPicture from "../woman-cat.svg";
import catPicture from "../cat.svg";
import "../styles/unitFourTips.css";

const UnitFourTips = () => {
  return (
    <div className="tips">
      <div className="tip-top">
        <div className="tip-head">TIP</div>
        <h3>Questions</h3>
      </div>
      <div className="tip-content">
        <p>
          Asking questions in Spanish is easy! Just change the pronunciation of
          any statement to a question by lifting your voice at the end.
        </p>
        <div className="u2-card">
          <img src={grandmaDogPicture} alt="grandma with her dog" />
          <div className="u2-card-text">
            <div className="spanish-text">Tú tienes un perro.</div>
            <div className="english-text">You have a dog.</div>
          </div>
        </div>
        <div className="u2-card">
          <img src={manQuestionPicture} alt="man asking woman a question" />
          <div className="u2-card-text">
            <div className="spanish-text">¿Tú tienes un perro?</div>
            <div className="english-text">Do you have a dog.</div>
          </div>
        </div>
        <p>
          Notice that all questions in Spanish begin with an upside down
          question mark (<span>¿</span>).
        </p>
        <div className="tip-top">
          <div className="tip-head">TIP</div>
          <h3>Tú vs. tu</h3>
        </div>
        <div className="tip-content">
          <p>
            Accent marks can be really useful! In Spanish, a word might have a
            different meaning depending on whether it does or doesn't have an
            accent mark.
          </p>
          <br />
          <p>
            For example, when <span>tú</span> has an accent, it means you.
          </p>
          <div className="u2-card">
            <img src={womanCatPicture} alt="woman with a cat" />
            <div className="u2-card-text">
              <div className="spanish-text">¿Tú tienes un gato?</div>
              <div className="english-text">Do you have a cat?</div>
            </div>
          </div>
          <p>
            Without an accent, <span>tu</span> means your.
          </p>
          <div className="u2-card">
            <img src={catPicture} alt="cat sleeping" />
            <div className="u2-card-text">
              <div className="spanish-text">¡Tu gato es grande!</div>
              <div className="english-text">Your cat is big!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitFourTips;
