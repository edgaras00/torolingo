import SpeechBubble from "../SpeechBubble";
import "../../../styles/phrases.css";

const UnitOnePhrases = () => {
  return (
    <div className="phrases">
      <SpeechBubble
        spanishText="Un niño come manzanas."
        englishText="A boy eats apples."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase11.mp3"
      />
      <SpeechBubble
        spanishText="Una niña bebe agua."
        englishText="A girl drinks water."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase12.mp3"
      />
      <SpeechBubble
        spanishText="La mujer bebe leche."
        englishText="The woman drinks milk."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase13.mp3"
      />
      <SpeechBubble
        spanishText="El hombre come pan."
        englishText="The man eats bread."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase14.mp3"
      />
      <SpeechBubble
        spanishText="¿Tú comes pan?"
        englishText="Do you eat bread?"
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase15.mp3"
      />
      <SpeechBubble
        spanishText="Sí, yo como pan."
        englishText="Yes, I eat bread"
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase16.mp3"
        reverse={true}
      />
    </div>
  );
};

export default UnitOnePhrases;
