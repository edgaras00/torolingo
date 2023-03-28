import React from "react";
import dressPicture from "../dress.svg";
import shirtPicture from "../shirt.svg";
import watchPicture from "../watch.svg";
import coatPicture from "../coat.svg";

const UnitFiveTips = () => {
  return (
    <div className="tips">
      <div className="tip-top">
        <div>TIP</div>
        <h3>Adjectives</h3>
      </div>
      <div className="tip-content">
        <p>
          In Spanish, adjectives usually come after the noun they're describing.
        </p>
        <div className="blue-dress-card">
          <div className="card-text">
            <div className="spanish-text">Un vestido azul</div>
            <div className="english-text">A blue dress</div>
          </div>
          <img src={dressPicture} alt="grandma with her dog" />
        </div>
        <div className="red-shirt-card">
          <div className="card-text">
            <div className="spanish-text">Una camisa roja</div>
            <div className="english-text">A red shirt</div>
          </div>
          <img src={shirtPicture} alt="man asking woman a question" />
        </div>
        <div className="watch-card">
          <div className="card-text">
            <div className="spanish-text">Un reloj caro</div>
            <div className="english-text">An expensive watch</div>
          </div>
          <img src={watchPicture} alt="man asking woman a question" />
        </div>
        <div className="coat-card">
          <div className="card-text">
            <div className="spanish-text">Un abrigo barato</div>
            <div className="english-text">A cheap coat</div>
          </div>
          <img src={coatPicture} alt="man asking woman a question" />
        </div>
      </div>
    </div>
  );
};

export default UnitFiveTips;
