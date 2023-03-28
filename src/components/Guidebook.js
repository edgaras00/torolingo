import React from "react";
import UnitOnePhrases from "./UnitOnePhrases";
import UnitOneTips from "./UnitOneTips";
import SpeechBubble from "./SpeechBubble";

const Guidebook = ({ number, children }) => {
  const childrenArray = React.Children.toArray(children);
  const phrases = childrenArray[0];
  const tips = childrenArray[1];
  return (
    <div className="guidebook">
      <div className="guide-top">
        <h3>Unit {number} Guidebook</h3>
        <p>Explore grammar tips and keyphrases for this unit</p>
      </div>
      <div className="key-phrases">
        <h4>Key Phrases</h4>
        <h5>form basic sentences</h5>
        <div className="phrase-container">{phrases}</div>
        <div className="tip-container">{tips}</div>
      </div>
    </div>
  );
};

export default Guidebook;
