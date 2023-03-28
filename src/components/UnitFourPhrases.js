import React from "react";
import SpeechBubble from "./SpeechBubble";

const UnitFourPhrases = () => {
  return (
    <div className="phrases">
      <SpeechBubble
        spanishText="Mi familia es grande."
        englishText="My family is big."
      />
      <SpeechBubble
        spanishText="¿Tú tienes un hermano?"
        englishText="Do you have a brother?"
      />
      <SpeechBubble
        spanishText="La mujer bebe leche."
        englishText="The woman drinks milk."
      />
      <SpeechBubble
        spanishText="Sí, tengo un hermano y una hermana."
        englishText="Yes, I have a brother and a sister."
        reverse={true}
      />
      <SpeechBubble
        spanishText="Yo tengo una hija."
        englishText="I have a daughter."
      />
      <SpeechBubble
        spanishText="¿Tú tienes un perro?"
        englishText="Do you have a dog?"
        reverse={true}
      />
      <SpeechBubble
        spanishText="Sí, un gato y un perro."
        englishText="Yes, a cat and a dog."
        reverse={true}
      />
    </div>
  );
};

export default UnitFourPhrases;
