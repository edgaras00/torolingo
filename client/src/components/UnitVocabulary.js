import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/unitVocabulary.css";

const UnitVocabulary = () => {
  const [vocabData, setVocabData] = useState([]);

  const { vocabID } = useParams();
  console.log(vocabID);

  useEffect(() => {
    const data = [
      {
        english: "man",
        spanish: "hombre",
      },
      {
        english: "woman",
        spanish: "mujer",
      },
      {
        english: "hola",
        spanish: "hello",
      },
      {
        english: "thank you",
        spanish: "gracias",
      },
      {
        english: "bread",
        spanish: "pan",
      },
    ];
    setVocabData(data);
  }, []);

  const tableRows = vocabData.map((pair, index) => (
    <tr className={index % 2 === 0 ? "row-even" : "row-odd"}>
      <td>{pair.spanish}</td>
      <td>{pair.english}</td>
    </tr>
  ));

  return (
    <div className="unit-vocab">
      <div className="unit-vocab-header">
        <h3>Unit 1 Vocabulary</h3>
      </div>
      <div className="unit-vocab-content">
        <table className="vocab-table">
          <thead>
            <tr>
              <th>English</th>
              <th>Spanish</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default UnitVocabulary;
