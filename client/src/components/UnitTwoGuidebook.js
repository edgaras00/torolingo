import SpeechBubble from "./SpeechBubble";

const Guidebook = ({ number, children }) => {
  return (
    <div className="guidebook">
      <div className="guide-top">
        <h3>Unit {number} Guidebook</h3>
        <p>Explore grammar tips and keyphrases for this unit</p>
      </div>
      <div className="key-phrases">
        <h4>Key Phrases</h4>
        <h5>form basic sentences</h5>
        <div className="phrase-container">
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
        <div className="tip-container">{children}</div>
      </div>
    </div>
  );
};

export default Guidebook;
