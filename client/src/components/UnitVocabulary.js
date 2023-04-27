import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/unitVocabulary.css";

const UnitVocabulary = () => {
  const [vocabData, setVocabData] = useState([]);

  const { vocabID } = useParams();
  let unit = vocabID.split("-")[1] * 1;
  if (unit > 2) {
    unit = 2;
  }

  useEffect(() => {
    const getVocabData = async () => {
      try {
        const response = await fetch(`/api/vocab?unit=${unit}`);
        const data = await response.json();
        setVocabData(data.data.words);
      } catch (error) {
        console.log(error);
      }
    };
    getVocabData();
  }, [unit]);

  const tableRows = vocabData.map((pair, index) => (
    <tr className={index % 2 === 0 ? "row-even" : "row-odd"}>
      <td>{pair.spanish}</td>
      <td>{pair.english}</td>
    </tr>
  ));

  return (
    <div className="unit-vocab">
      <div className="unit-vocab-header">
        <h3>Unit {unit} Vocabulary</h3>
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
