import React from "react";
import womanTaxiPicture from "../woman_taxi.svg";
import hotelPicture from "../hotel.svg";
import taxiPicture from "../taxi.svg";
import "../styles/unitTwoTips.css";

const UnitTwoTips = () => {
  return (
    <div className="tips">
      <div className="tip-top">
        <div className="tip-head">TIP</div>
        <h3>Esta vs es</h3>
      </div>
      <div className="tip-content">
        <p>
          <span>Está</span> and <span>es</span> both mean is. So what's the
          difference? If you want to say where someone or something is located,
          use <span>está</span> .
        </p>
        <div className="u2-card">
          <img src={womanTaxiPicture} alt="woman by a taxi" />
          <div className="u2-card-text">
            <div className="spanish-text">¡El taxi está aquí!</div>
            <div className="english-text">The taxi is here!</div>
          </div>
        </div>
        <div className="u2-card">
          <p>
            You also use está when you're talking about something that's only
            temporarily true.
          </p>
          <img src={hotelPicture} alt="hotel" />
          <div className="u2-card-text">
            <div className="spanish-text">El hotel está cerrado.</div>
            <div className="english-text">The hotel is closed.</div>
          </div>
        </div>
        <div className="u2-card">
          <img src={taxiPicture} alt="yellow taxi" />
          <div className="u2-card-text">
            <div className="spanish-text">El taxi es amarillo.</div>
            <div className="english-text">The taxi is yellow.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitTwoTips;
