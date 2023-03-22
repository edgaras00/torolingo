import React, { useState, useEffect } from "react";
import WordBubble from "./WordBubble";
import "../styles/notebookLines.css";

const NotebookLines = () => {
  // const [wordBank, setWordBank] = useState([]);
  // const [selectedWords, setSelectedWords] = useState([]);

  // useEffect(() => {
  //   const data = [
  //     <WordBubble text="Hi" key="1" />,
  //     <WordBubble text="test" key="2" />,
  //     <WordBubble text="bye" key="3" />,
  //   ];
  //   setWordBank(data);
  // }, []);

  return (
    <div className="notebook-lines">
      <div className="line"></div>
      {/* <div className="line">{selectedWords}</div> */}
      <div className="line"></div>
      <div className="line"></div>
      <br />
      <br />
    </div>
  );
};
export default NotebookLines;
