import SpeechBubble from "./SpeechBubble";

const UnitTwoPhrases = () => {
  return (
    <div className="phrases">
      <SpeechBubble
        spanishText="Yo necesito un taxi."
        englishText="I need a taxi."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase1.mp3"
      />
      <SpeechBubble
        spanishText="El taxi está aquí."
        englishText="The taxi is here"
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase2.mp3"
        reverse={true}
      />
      <SpeechBubble
        spanishText="¿Dónde?"
        englishText="Where?"
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase3.mp3"
      />
      <SpeechBubble
        spanishText="El hombre come pan."
        englishText="The man eats bread."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase4.mp3"
      />
      <SpeechBubble
        spanishText="¿Dónde está tu pasaporte?"
        englishText="Where is your passport?"
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase5.mp3"
      />
      <SpeechBubble
        spanishText="Mi pasaporte está en el hotel."
        englishText="My passport is in the hotel."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase6.mp3"
        reverse={true}
      />
      <SpeechBubble
        spanishText="Un boleto a Santiago, por favor."
        englishText="A ticket to Santiago, please."
        audio="https://tlingobucket.s3.amazonaws.com/phrases/phrase7.mp3"
      />
    </div>
  );
};

export default UnitTwoPhrases;
