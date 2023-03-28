import React from "react";
import womanTaxiPicture from "../woman_taxi.svg";
import hotelPicture from "../hotel.svg";
import taxiPicture from "../taxi.svg";

const UnitTwoTips = () => {
  return (
    <div className="tips">
      <div className="tip-top">
        <div>TIP</div>
        <h3>Esta vs es</h3>
      </div>
      <div className="tip-content">
        <p>
          <span>Está</span> and <span>es</span> both mean is. So what's the
          difference? If you want to say where someone or something is located,
          use <span>está</span> .
        </p>
        <div className="woman-taxi-card">
          <img src={womanTaxiPicture} alt="woman by a taxi" />
          <div className="spanish-text">¡El taxi está aquí!</div>
          <div className="english-text">The taxi is here!</div>
        </div>
        <div className="hotel-card">
          <p>
            You also use está when you're talking about something that's only
            temporarily true.
          </p>
          <img src={hotelPicture} alt="hotel" />
          <div className="spanish-text">El hotel está cerrado.</div>
          <div className="english-text">The hotel is closed.</div>
        </div>
        <div className="taxi-card">
          <img src={taxiPicture} alt="yellow taxi" />
          <div className="spanish-text">El taxi es amarillo.</div>
          <div className="english-text">The taxi is yellow.</div>
        </div>
      </div>
    </div>
  );
};

export default UnitTwoTips;
