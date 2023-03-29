import React from "react";
import TipCard from "./TipCard";
import boyPicture from "../boy.svg";
import girlPicture from "../girl.svg";
import kidsPicture from "../kids.svg";
import "../styles/unitOneTips.css";

const UnitOneTips = () => {
  return (
    <div className="tips">
      <div className="tip-top">
        <div className="tip-head">TIP</div>
        <h3>Gender</h3>
      </div>
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
          spanishText="El nino"
        />
        <TipCard
          img={girlPicture}
          type={2}
          englishText="The girl"
          spanishText="La nina"
        />
        <p>
          Notice how you use <span>el</span> if the word is masculine and{" "}
          <span>la</span> if the word is feminine.
        </p>
      </div>
      <div className="tip-top">
        <div className="tip-head">TIP</div>
        <h3>I think, therefore...</h3>
      </div>
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
                <div className="table-spanish">tu</div>
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
                <div className="table-spanish">el</div>
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
            <div className="spanish-text">
              Yo soy una nina. Tu eres un nino.
            </div>
            <div className="english-text">I am a girl. You are a boy.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitOneTips;
