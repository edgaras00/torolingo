import React from "react";
import SpeechBubble from "./SpeechBubble";

const Guidebook = ({ number, children }) => {
  return (
    <div className="guidebook">
      <div className="guide-top">
        <h3>Unit {number} Guidebook</h3>
        <p>Explore grammar tips and keyphrases for this unit</p>
      </div>
      <div className="key-phrases">
        <h4>Key Phrases</h4>
        <h5>form basic sentences</h5>
        <div className="phrase-container">
          <SpeechBubble
            spanishText="Un niño come manzanas."
            englishText="A boy eats apples."
          />
          <SpeechBubble
            spanishText="Una niña bebe agua."
            englishText="A girl drinks water."
          />
          <SpeechBubble
            spanishText="La mujer bebe leche."
            englishText="The woman drinks milk."
          />
          <SpeechBubble
            spanishText="El hombre come pan."
            englishText="The man eats bread."
          />
          <SpeechBubble
            spanishText="¿Tú comes pan?"
            englishText="Do you eat bread?"
          />
          <SpeechBubble
            spanishText="Sí, yo como pan."
            englishText="Yes, I eat bread"
            reverse={true}
          />
        </div>
        <div className="tip-container">{children}</div>
      </div>
    </div>
  );
};

export default Guidebook;
