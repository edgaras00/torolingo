import React from "react";
import TipCard from "./TipCard";
import TipTop from "./TipTop";
import grandmaDogPicture from "../grandma-dog.svg";
import manQuestionPicture from "../man-question.svg";
import womanCatPicture from "../woman-cat.svg";
import catPicture from "../cat.svg";
import "../styles/unitFourTips.css";

const UnitFourTips = () => {
  return (
    <div className="tips">
      <TipTop header="Questions" />
      <div className="tip-content">
        <p>
          Asking questions in Spanish is easy! Just change the pronunciation of
          any statement to a question by lifting your voice at the end.
        </p>
        <TipCard
          img={grandmaDogPicture}
          type={1}
          spanishText="Tú tienes un perro."
          englishText="You have a dog."
        />
        <TipCard
          img={manQuestionPicture}
          type={1}
          spanishText="¿Tú tienes un perro?"
          englishText="Do you have a dog?"
        />
        <p>
          Notice that all questions in Spanish begin with an upside down
          question mark (<span>¿</span>).
        </p>
        <TipTop header="Tú vs. tu" />
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
          <TipCard
            type={1}
            img={womanCatPicture}
            spanishText="¿Tú tienes un gato?"
            englishText="Do you have a cat?"
          />
          <p>
            Without an accent, <span>tu</span> means your.
          </p>
          <TipCard
            img={catPicture}
            spanishText="¡Tu gato es grande!"
            englishText="Your cat is big!"
            type={1}
          />
        </div>
      </div>
    </div>
  );
};

export default UnitFourTips;
