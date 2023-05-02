import React from "react";

import "../styles/guidebook.css";

const Guidebook = ({ number, children }) => {
  const childrenArray = React.Children.toArray(children);
  const phrases = childrenArray[0];
  const tips = childrenArray[1];
  return (
    <div className="guidebook">
      <div className="guidebook-content">
        <div className="guide-top">
          <div className="guide-top-image">
            <img
              src={`${process.env.PUBLIC_URL}/images/mascots/mascot-3l.png`}
              alt="mascot"
            />
          </div>
          <div className="guide-top-text">
            <h3>Unit {number} Guidebook</h3>
            <p>Explore grammar tips and keyphrases for this unit</p>
          </div>
        </div>
        <div className="key-phrases">
          <h4>KEY PHRASES</h4>
          <h5>form basic sentences</h5>
          <div className="phrase-container">{phrases}</div>
          <div className="tip-container">{tips}</div>
        </div>
      </div>
    </div>
  );
};

export default Guidebook;
