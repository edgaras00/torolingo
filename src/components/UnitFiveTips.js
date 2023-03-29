import React from "react";
import TipCard from "./TipCard";
import TipTop from "./TipTop";
import dressPicture from "../dress.svg";
import shirtPicture from "../shirt.svg";
import watchPicture from "../watch.svg";
import coatPicture from "../coat.svg";
import "../styles/unitFiveTips.css";

const UnitFiveTips = () => {
  return (
    <div className="tips">
      <TipTop header="Adjectives" />
      <div className="tip-content">
        <p>
          In Spanish, adjectives usually come after the noun they're describing.
        </p>
        <TipCard
          img={dressPicture}
          type={2}
          spanishText="Un vestido azul"
          englishText="A blue dress"
        />
        <TipCard
          img={shirtPicture}
          type={2}
          spanishText="Una camisa roja"
          englishText="A red shirt"
        />
        <TipCard
          img={watchPicture}
          type={2}
          spanishText="Un reloj caro"
          englishText="An expensive watch"
        />
        <TipCard
          img={coatPicture}
          type={2}
          englishText="A cheap coat"
          spanishText="Un abrigo barato"
        />
      </div>
    </div>
  );
};

export default UnitFiveTips;
