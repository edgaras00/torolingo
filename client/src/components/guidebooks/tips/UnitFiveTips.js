import TipCard from "../TipCard";
import TipTop from "../TipTop";

import "../../../styles/tips.css";

const UnitFiveTips = () => {
  return (
    <div className="tips">
      <TipTop header="Adjectives" />
      <div className="tip-content">
        <p>
          In Spanish, adjectives usually come after the noun they're describing.
        </p>
        <TipCard
          img={`${process.env.PUBLIC_URL}/images/dress.svg`}
          type={2}
          spanishText="Un vestido azul"
          englishText="A blue dress"
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase45.mp3"
        />
        <TipCard
          img={`${process.env.PUBLIC_URL}/images/shirt.svg`}
          type={2}
          spanishText="Una camisa roja"
          englishText="A red shirt"
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase46.mp3"
        />
        <TipCard
          img={`${process.env.PUBLIC_URL}/images/watch.svg`}
          type={2}
          spanishText="Un reloj caro"
          englishText="An expensive watch"
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase47.mp3"
        />
        <TipCard
          img={`${process.env.PUBLIC_URL}/images/coat.svg`}
          type={2}
          englishText="A cheap coat"
          spanishText="Un abrigo barato"
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase48.mp3"
        />
      </div>
    </div>
  );
};

export default UnitFiveTips;
