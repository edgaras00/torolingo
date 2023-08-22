import SpeechBubble from "../SpeechBubble";

const UnitFivePhrases = () => {
  return (
    <div className="phrases">
      <SpeechBubble
        spanishText="Yo quiero una camisa."
        englishText="I want a shirt."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase39.mp3"
      />
      <SpeechBubble
        spanishText="¿Verde o azul?"
        englishText="Green or blue?"
        reverse={true}
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase40.mp3"
      />
      <SpeechBubble
        spanishText="Una camisa verde."
        englishText="A green shirt."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase41.mp3"
      />
      <SpeechBubble
        spanishText="Yo necesito un vestido rojo."
        englishText="I need a red dress."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase42.mp3"
      />
      <SpeechBubble
        spanishText="Yo necesito una cartera."
        englishText="I need a purse."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase43.mp3"
      />
      <SpeechBubble
        spanishText="¿Gris o marrón?"
        englishText="Gray or brown?"
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase44.mp3"
        reverse={true}
      />
    </div>
  );
};

export default UnitFivePhrases;
