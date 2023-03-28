import React from "react";
import boyPicture from "../boy.svg";
import girlPicture from "../girl.svg";
import kidsPicture from "../kids.svg";

const UnitOneTips = () => {
  return (
    <div className="tips">
      <div className="tip-top">
        <div>TIP</div>
        <h3>Gender</h3>
      </div>
      <div className="tip-content">
        <p>
          In Spanish, all nouns are either <span>masculine</span> or{" "}
          <span>feminine.</span> Often nouns end in <span>-o</span> if they're
          masculine and <span>-a</span> if they're feminine
        </p>
        <div className="boy-card">
          <div className="card-text">
            <div className="spanish-text">El nino</div>
            <div className="english-text">The boy</div>
          </div>
          <img src={boyPicture} alt="boy" />
        </div>
        <div className="girl-card">
          <div className="card-text">
            <div className="spanish-text">La nina</div>
            <div className="english-text">The girl</div>
          </div>
          <img src={girlPicture} alt="boy" />
        </div>
        <p>
          Notice how you use <span>el</span> if the word is masculine and{" "}
          <span>la</span> if the word is feminine.
        </p>
      </div>
      <div className="tip-top">
        <div>TIP</div>
        <h3>I think, therefore...</h3>
      </div>
      <div className="tip-content">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Verb (ser)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>yo</div>
                <div>I</div>
              </td>
              <td>
                <div>soy</div>
                <div>I am</div>
              </td>
            </tr>
            <tr>
              <td>
                <div>tu</div>
                <div>you</div>
              </td>
              <td>
                <div>eres</div>
                <div>you are</div>
              </td>
            </tr>
            <tr>
              <td>
                <div>el</div>
                <div>he</div>
              </td>
              <td>
                <div>es</div>
                <div>he is</div>
              </td>
            </tr>
            <tr>
              <td>
                <div>ella</div>
                <div>she</div>
              </td>
              <td>
                <div>es</div>
                <div>she is</div>
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
