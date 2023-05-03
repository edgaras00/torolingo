import VocabLink from "./VocabLink";

import "../../styles/vocabulary.css";

const Vocabulary = () => {
  return (
    <div className="vocabulary">
      <VocabLink
        unit={1}
        color="#ff4b4b"
        image={`${process.env.PUBLIC_URL}/images/mascots/mascot-3l.png`}
        hoverColor="#f55d5d"
      />
      <VocabLink
        unit={2}
        color="#5ad12a"
        image={`${process.env.PUBLIC_URL}/images/mascots/mascot-1r.jpg`}
        hoverColor="#7ae051"
      />
      <VocabLink
        unit={3}
        color="#2a6fc9"
        image={`${process.env.PUBLIC_URL}/images/mascots/mascot-1l.png`}
        hoverColor="#477fc9"
      />
      <VocabLink
        unit={4}
        color="#eb9c3d"
        image={`${process.env.PUBLIC_URL}/images/mascots/mascot-5r.png`}
        hoverColor="#f2ae5c"
      />
      <VocabLink
        unit={5}
        color="#e03879"
        image={`${process.env.PUBLIC_URL}/images/mascots/mascot-4r.png`}
        hoverColor="#e8518c"
      />
    </div>
  );
};

export default Vocabulary;
