import React from "react";
import SpeechBubble from "./SpeechBubble";

const UnitOnePhrases = () => {
  return (
    <div className="phrases">
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
  );
};

export default UnitOnePhrases;
