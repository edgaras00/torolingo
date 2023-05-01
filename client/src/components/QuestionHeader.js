import { Link } from "react-router-dom";
import "../styles/questionHeader.css";

const QuestionHeader = ({ text, locationState, multipleChoice }) => {
  return (
    <div className={`question-header ${multipleChoice ? "mc-header" : null}`}>
      <div className="exit-lesson">
        <Link to={locationState ? `/${locationState.from}` : "/"}>
          <button className="exit-button">X</button>
        </Link>
      </div>
      <div className="question-heading-container">
        <h3 className="question-heading">{text}</h3>
      </div>
    </div>
  );
};

export default QuestionHeader;
