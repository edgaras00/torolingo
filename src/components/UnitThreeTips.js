import React from "react";
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
        <div className="u2-card">
          <img src={waiterPicture} alt="waiter bringing a cup of coffee" />
          <div className="u2-card-text">
            <div className="spanish-text">Una taza de café</div>
            <div className="english-text">A cup of coffee</div>
          </div>
        </div>
        <p>
          You also use de when you're describing what type of food something is.
        </p>
        <div className="u2-card">
          <img src={waiterPicture} alt="boy drinking juice" />
          <div className="u2-card-text">
            <div className="spanish-text">Un jugo de naranja</div>
            <div className="english-text">An orange juice</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitThreeTips;
