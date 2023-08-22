import VocabLink from "./VocabLink";

import mascotImage1 from "../../images/mascots/mascot-3l.png";
import mascotImage2 from "../../images/mascots/mascot-1r.jpg";
import mascotImage3 from "../../images/mascots/mascot-1l.png";
import mascotImage4 from "../../images/mascots/mascot-5r.png";
import mascotImage5 from "../../images/mascots/mascot-4r.png";

import "../../styles/vocabulary.css";


const Vocabulary = () => {
  return (
    <div className="vocabulary">
      <VocabLink
        unit={1}
        color="#ff4b4b"
        image={mascotImage1}
        hoverColor="#f55d5d"
      />
      <VocabLink
        unit={2}
        color="#5ad12a"
        image={mascotImage2}
        hoverColor="#7ae051"
      />
      <VocabLink
        unit={3}
        color="#2a6fc9"
        image={mascotImage3}
        hoverColor="#477fc9"
      />
      <VocabLink
        unit={4}
        color="#eb9c3d"
        image={mascotImage4}
        hoverColor="#f2ae5c"
      />
      <VocabLink
        unit={5}
        color="#e03879"
        image={mascotImage5}
        hoverColor="#e8518c"
      />
    </div>
  );
};

export default Vocabulary;
