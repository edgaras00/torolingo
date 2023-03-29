import React from "react";
import TipCard from "./TipCard";
import waiterPicture from "../waiter.svg";
import "../styles/unitThreeTips.css";

const UnitThreeTips = () => {
  return (
    <div className="tips">
      <div className="tip-top">
        <div className="tip-head">TIP</div>
        <h3>A sandwich of fish</h3>
      </div>
      <div className="tip-content">
        <p>
          In English, we might ask for <span>a cup of coffee</span>. In Spanish,
          you do the same thing.
        </p>
        <TipCard
          type={1}
          img={waiterPicture}
          spanishText="Una taza de café."
          englishText="A cup of coffee."
        />
        <p>
          You also use de when you're describing what type of food something is.
        </p>
        <TipCard
          type={1}
          img={waiterPicture}
          spanishText="Un jugo de naranja."
          englishText="An orange juice."
        />
      </div>
    </div>
  );
};

export default UnitThreeTips;
