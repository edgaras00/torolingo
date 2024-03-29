import TipCard from "../TipCard";
import TipTop from "../TipTop";

import womanImage from "../../../images/woman_taxi.svg";
import taxiImage from "../../../images/taxi.svg";
import hotelImage from "../../../images/hotel.svg";

import "../../../styles/tips.css";

const UnitTwoTips = () => {
  return (
    <div className="tips">
      <TipTop header="Está vs es" />
      <div className="tip-content unit-two-content">
        <p>
          <span>Está</span> and <span>es</span> both mean is. So what's the
          difference? If you want to say where someone or something is located,
          use <span>está</span>.
        </p>
        <TipCard
          img={womanImage}
          spanishText="¡El taxi está aquí!"
          englishText="The taxi is here!"
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase8.mp3"
          type={1}
        />
        <p>
          You also use está when you're talking about something that's only
          temporarily true.
        </p>
        <TipCard
          type={1}
          img={hotelImage}
          spanishText="El hotel está cerrado."
          englishText="The hotel is closed."
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase9.mp3"
        />
        <TipCard
          type={1}
          img={taxiImage}
          spanishText="El taxi es amarillo."
          englishText="The taxi is yellow."
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase10.mp3"
        />
      </div>
    </div>
  );
};

export default UnitTwoTips;
