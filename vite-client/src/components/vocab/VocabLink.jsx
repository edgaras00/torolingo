import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/vocabLink.css";

const VocabLink = ({ unit, color, image, hoverColor }) => {
  const [hovered, setHovered] = useState(false);

  const handleOnMouseEnter = () => setHovered(true);
  const handleOnMouseLeave = () => setHovered(false);

  return (
    <Link to={`vocabulary-${unit}`} className="vocab-link">
      <div
        className="vocab-content"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        style={{ backgroundColor: hovered ? hoverColor : color }}
      >
        <div className="text">UNIT {unit}</div>
        <img src={image} alt="mascot" />
      </div>
    </Link>
  );
};

export default VocabLink;
