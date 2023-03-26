import React from "react";
import Unit from "./Unit";
import "../styles/path.css";
import TranslationCard from "./TranslationCard";
// import PictureCard from "./PictureCard";
import PicCardMC from "./PicCardMC";
// import ListeningCard from "./ListeningCard";
import ListeningWritingCard from "./ListeningWritingCard";
import VocabMatchCard from "./VocabMatchCard";
import MultipleChoiceCard from "./MultipleChoiceCard";

const Path = () => {
  return (
    <div className="path-container">
      {/* <MultipleChoiceCard /> */}
      <Unit />
      {/* <TranslationCard /> */}
      {/* <PictureCard /> */}
      {/* <PicCardMC /> */}
      {/* <ListeningCard /> */}
      {/* <ListeningWritingCard /> */}
      {/* <VocabMatchCard /> */}
    </div>
  );
};

export default Path;
