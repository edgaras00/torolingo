import React from "react";
import VocabLink from "./VocabLink";
import "../styles/vocabulary.css";

const Vocabulary = () => {
  return (
    <div className="vocabulary">
      <VocabLink unit={1} />
      <VocabLink unit={2} />
      <VocabLink unit={3} />
      <VocabLink unit={4} />
      <VocabLink unit={5} />
    </div>
  );
};

export default Vocabulary;
