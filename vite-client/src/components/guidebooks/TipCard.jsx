import "../../styles/tipCard.css";

const TipCard = ({ type, img, spanishText, englishText, audio }) => {
  const audioElement = new Audio(audio);
  const handleClick = () => audioElement.play();

  if (type === 1) {
    return (
      <div className="tip-card-one">
        <img src={img} alt="card" />
        <div className="tip-card-text">
          <div className="spanish-text" onClick={handleClick}>
            {spanishText}
          </div>
          <div className="english-text">{englishText}</div>
        </div>
      </div>
    );
  }

  if (type === 2) {
    return (
      <div className="tip-card-two">
        <div className="tip-card-two-text">
          <div className="spanish-text" onClick={handleClick}>
            {spanishText}
          </div>
          <div className="english-text">{englishText}</div>
        </div>
        <img src={img} alt="card" />
      </div>
    );
  }
};

export default TipCard;
