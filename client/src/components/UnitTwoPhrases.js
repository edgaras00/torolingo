import React from "react";
import SpeechBubble from "./SpeechBubble";

const UnitTwoPhrases = () => {
  return (
    <div className="phrases">
      <SpeechBubble
        spanishText="Yo necesito un taxi."
        englishText="I need a taxi."
      />
      <SpeechBubble
        spanishText="El taxi está aquí."
        englishText="The taxi is here"
        reverse={true}
      />
      <SpeechBubble spanishText="¿Dónde?" englishText="Where?" />
      <SpeechBubble
        spanishText="El hombre come pan."
        englishText="The man eats bread."
      />
      <SpeechBubble
        spanishText="¿Dónde está tu pasaporte?"
        englishText="Where is your passport?"
      />
      <SpeechBubble
        spanishText="Mi pasaporte está en el hotel."
        englishText="My passport is in the hotel."
        reverse={true}
      />
      <SpeechBubble
        spanishText="Un boleto a Santiago, por favor."
        englishText="A ticket to Santiago, please."
      />
    </div>
  );
};

export default UnitTwoPhrases;
