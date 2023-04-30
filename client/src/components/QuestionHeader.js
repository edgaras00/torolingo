import { Link } from "react-router-dom";
import "../styles/questionHeader.css";

const QuestionHeader = ({ text, locationState }) => {
  return (
    <div className="question-header">
      <div className="exit-lesson">
        <Link to={locationState ? `/${locationState.from}` : "/"}>
          <button className="exit-button">X</button>
        </Link>
      </div>
      <div className="question-header-container">
        <h3 className="question-header">{text}</h3>
      </div>
    </div>
  );
};

export default QuestionHeader;
