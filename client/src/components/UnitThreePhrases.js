import React from "react";
import SpeechBubble from "./SpeechBubble";

const UnitThreePhrases = () => {
  return (
    <div className="phrases">
      <SpeechBubble
        spanishText="Una mesa para dos, por favor."
        englishText="A table for two, please."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase20.mp3"
      />
      <SpeechBubble
        spanishText="Un café, por favor."
        englishText="Coffee, please."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase21.mp3"
      />
      <SpeechBubble
        spanishText="¿Con o sin leche?"
        englishText="With or without milk?"
        reverse={true}
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase22.mp3"
      />
      <SpeechBubble
        spanishText="Yo quiero una ensalada."
        englishText="I want a salad."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase23.mp3"
      />
      <SpeechBubble
        spanishText="¿Con tomate?"
        englishText="With tomato?"
        reverse={true}
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase24.mp3"
      />
      <SpeechBubble
        spanishText="Un sándwich de pescado, por favor."
        englishText="A fish sandwich, please."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase25.mp3"
      />
    </div>
  );
};

export default UnitThreePhrases;
