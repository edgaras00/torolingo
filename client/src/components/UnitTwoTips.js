import React from "react";
import TipCard from "./TipCard";
import TipTop from "./TipTop";
import womanTaxiPicture from "../woman_taxi.svg";
import hotelPicture from "../hotel.svg";
import taxiPicture from "../taxi.svg";
import "../styles/unitTwoTips.css";

const UnitTwoTips = () => {
  return (
    <div className="tips">
      <TipTop header="Esta vs es" />
      <div className="tip-content">
        <p>
          <span>Está</span> and <span>es</span> both mean is. So what's the
          difference? If you want to say where someone or something is located,
          use <span>está</span> .
        </p>
        <TipCard
          img={womanTaxiPicture}
          spanishText="¡El taxi está aquí!"
          englishText="The taxi is here!"
          type={1}
        />
        <p>
          You also use está when you're talking about something that's only
          temporarily true.
        </p>
        <TipCard
          type={1}
          img={hotelPicture}
          spanishText="El hotel está cerrado."
          englishText="The hotel is closed."
        />
        <TipCard
          type={1}
          img={taxiPicture}
          spanishText="El taxi es amarillo."
          englishText="The taxi is yellow."
        />
      </div>
    </div>
  );
};

export default UnitTwoTips;
