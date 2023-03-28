import React from "react";
import SpeechBubble from "./SpeechBubble";

const UnitThreePhrases = () => {
  return (
    <div className="phrases">
      <SpeechBubble
        spanishText="Una mesa para dos, por favor."
        englishText="A table for two, please."
      />
      <SpeechBubble
        spanishText="Un café, por favor."
        englishText="Coffee, please."
      />
      <SpeechBubble
        spanishText="¿Con o sin leche?"
        englishText="With or without milk?"
        reverse={true}
      />
      <SpeechBubble
        spanishText="Yo quiero una ensalada."
        englishText="I want a salad."
      />
      <SpeechBubble
        spanishText="¿Dónde está tu pasaporte?"
        englishText="Where is your passport?"
      />
      <SpeechBubble
        spanishText="¿Con tomate?"
        englishText="With tomato?"
        reverse={true}
      />
      <SpeechBubble
        spanishText="Un sándwich de pescado, por favor."
        englishText="A fish sandwich, please."
      />
    </div>
  );
};

export default UnitThreePhrases;
