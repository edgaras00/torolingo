import React from "react";
import VocabLink from "./VocabLink";
import mascotPaper from "../bull-paper.png";
import dancingMascot from "../mascot-dancing.jpg";
import guitarMascot from "../cow-guitar.png";
import bullTongue from "../bull-tongue.png";
import mascotStanding2 from "../mascot-standing2.png";
import "../styles/vocabulary.css";

const Vocabulary = () => {
  return (
    <div className="vocabulary">
      <VocabLink unit={1} color="#ff4b4b" image={mascotPaper} />
      <VocabLink unit={2} color="#5ad12a" image={dancingMascot} />
      <VocabLink unit={3} color="#2a6fc9" image={guitarMascot} />
      <VocabLink unit={4} color="#eb9c3d" image={bullTongue} />
      <VocabLink unit={5} color="#e03879" image={mascotStanding2} />
    </div>
  );
};

export default Vocabulary;
