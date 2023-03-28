import React from "react";
import SpeechBubble from "./SpeechBubble";

const UnitFivePhrases = () => {
  return (
    <div className="phrases">
      <SpeechBubble
        spanishText="Yo quiero una camisa."
        englishText="I want a shirt."
      />
      <SpeechBubble
        spanishText="¿Verde o azul?"
        englishText="Green or blue?"
        reverse={true}
      />
      <SpeechBubble
        spanishText="Una camisa verde."
        englishText="A green shirt."
      />
      <SpeechBubble
        spanishText="Yo necesito un vestido rojo."
        englishText="I need a red dress."
      />
      <SpeechBubble
        spanishText="Yo necesito una cartera."
        englishText="I need a purse."
      />
      <SpeechBubble
        spanishText="¿Gris o marrón?"
        englishText="Gray or brown?"
        reverse={true}
      />
    </div>
  );
};

export default UnitFivePhrases;
