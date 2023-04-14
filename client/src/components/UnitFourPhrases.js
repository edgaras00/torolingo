import React from "react";
import SpeechBubble from "./SpeechBubble";

const UnitFourPhrases = () => {
  return (
    <div className="phrases">
      <SpeechBubble
        spanishText="Mi familia es grande."
        englishText="My family is big."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase28.mp3"
      />
      <SpeechBubble
        spanishText="¿Tú tienes un hermano?"
        englishText="Do you have a brother?"
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase29.mp3"
      />
      <SpeechBubble
        spanishText="Sí, tengo un hermano y una hermana."
        englishText="Yes, I have a brother and a sister."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase31.mp3"
        reverse={true}
      />
      <SpeechBubble
        spanishText="Yo tengo una hija."
        englishText="I have a daughter."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase32.mp3"
      />
      <SpeechBubble
        spanishText="¿Tú tienes un perro?"
        englishText="Do you have a dog?"
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase33.mp3"
      />
      <SpeechBubble
        spanishText="Sí, un gato y un perro."
        englishText="Yes, a cat and a dog."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase34.mp3"
        reverse={true}
      />
    </div>
  );
};

export default UnitFourPhrases;
