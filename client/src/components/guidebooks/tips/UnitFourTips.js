import TipCard from "../TipCard";
import TipTop from "../TipTop";

import "../../../styles/tips.css";

const UnitFourTips = () => {
  return (
    <div className="tips">
      <TipTop header="Questions" />
      <div className="tip-content unit-four-content">
        <p>
          Asking questions in Spanish is easy! Just change the pronunciation of
          any statement to a question by lifting your voice at the end.
        </p>
        <TipCard
          img={`${process.env.PUBLIC_URL}/images/grandma-dog.svg`}
          type={1}
          spanishText="Tú tienes un perro."
          englishText="You have a dog."
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase35.mp3"
        />
        <TipCard
          img={`${process.env.PUBLIC_URL}/images/man-question.svg`}
          type={1}
          spanishText="¿Tú tienes un perro?"
          englishText="Do you have a dog?"
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase36.mp3"
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
            img={`${process.env.PUBLIC_URL}/images/woman-cat.svg`}
            spanishText="¿Tú tienes un gato?"
            englishText="Do you have a cat?"
            audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase37.mp3"
          />
          <p>
            Without an accent, <span>tu</span> means your.
          </p>
          <TipCard
            img={`${process.env.PUBLIC_URL}/images/cat.svg`}
            spanishText="¡Tu gato es grande!"
            englishText="Your cat is big!"
            audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase38.mp3"
            type={1}
          />
        </div>
      </div>
    </div>
  );
};

export default UnitFourTips;
