import React from "react";
import TipCard from "./TipCard";
import TipTop from "./TipTop";
import boyPicture from "../boy.svg";
import girlPicture from "../girl.svg";
import kidsPicture from "../kids.svg";
import "../styles/unitOneTips.css";

const UnitOneTips = () => {
  const audioElement = new Audio(
    "https://tlingobucket.s3.amazonaws.com/phrases/phrase19.mp3"
  );

  const handleClick = () => audioElement.play();

  return (
    <div className="tips">
      <TipTop header="Gender" />
      <div className="tip-content">
        <p>
          In Spanish, all nouns are either <span>masculine</span> or{" "}
          <span>feminine.</span> Often nouns end in <span>-o</span> if they're
          masculine and <span>-a</span> if they're feminine
        </p>
        <TipCard
          img={boyPicture}
          type={2}
          englishText="The Boy"
          spanishText="El niño"
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase17.mp3"
        />
        <TipCard
          img={girlPicture}
          type={2}
          englishText="The girl"
          spanishText="La niña"
          audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase18.mp3"
        />
        <p>
          Notice how you use <span>el</span> if the word is masculine and{" "}
          <span>la</span> if the word is feminine.
        </p>
      </div>
      <TipTop header="I think, therefore..." />
      <div className="tip-content table-container">
        <table className="unit-one-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Verb (ser)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="table-spanish">yo</div>
                <div className="table-english">I</div>
              </td>
              <td>
                <div className="table-spanish">
                  <span>soy</span>
                </div>
                <div className="table-english">I am</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-spanish">tú</div>
                <div className="table-english">you</div>
              </td>
              <td>
                <div className="table-spanish">
                  <span>eres</span>
                </div>
                <div className="table-english">you are</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-spanish">él</div>
                <div className="table-english">he</div>
              </td>
              <td>
                <div className="table-spanish">
                  <span>es</span>
                </div>
                <div className="table-english">he is</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-spanish">ella</div>
                <div className="table-english">she</div>
              </td>
              <td>
                <div className="table-spanish">
                  <span>es</span>
                </div>
                <div className="table-english">she is</div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="conjugation-example">
          <div className="example-img">
            <img src={kidsPicture} alt="kids" />
          </div>
          <div className="conjugation-example-text">
            <div className="spanish-text" onClick={handleClick}>
              Yo soy una niña. Tu eres un niño.
            </div>
            <div className="english-text">I am a girl. You are a boy.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitOneTips;
