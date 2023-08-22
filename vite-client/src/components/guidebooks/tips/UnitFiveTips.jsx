import TipCard from "../TipCard";
import TipTop from "../TipTop";

import shirtImage from "../../../images/shirt.svg";
import dressImage from "../../../images/dress.svg";
import watchImage from "../../../images/watch.svg";
import coatImage from "../../../images/coat.svg";

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
          img={shirtImage}
          type={2}
          spanishText="Un vestido azul"
          englishText="A blue dress"
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase45.mp3"
        />
        <TipCard
          img={dressImage}
          type={2}
          spanishText="Una camisa roja"
          englishText="A red shirt"
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase46.mp3"
        />
        <TipCard
          img={watchImage}
          type={2}
          spanishText="Un reloj caro"
          englishText="An expensive watch"
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase47.mp3"
        />
        <TipCard
          img={coatImage}
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
