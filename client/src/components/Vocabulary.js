import React from "react";
import VocabLink from "./VocabLink";
import "../styles/vocabulary.css";

const Vocabulary = () => {
  return (
    <div className="vocabulary">
      <VocabLink unit={1} color="#ff4b4b" />
      <VocabLink unit={2} color="#5ad12a" />
      <VocabLink unit={3} color="#2a6fc9" />
      <VocabLink unit={4} color="#eb9c3d" />
      <VocabLink unit={5} color="#e03879" />
    </div>
  );
};

export default Vocabulary;
