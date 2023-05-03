import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ErrorPage from "../errors/ErrorPage";

import { AppError } from "../../utils";
import "../../styles/unitVocabulary.css";

const UnitVocabulary = () => {
  const [vocabData, setVocabData] = useState([]);
  const [isError, setIsError] = useState(false);

  // Get unit number
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

        if (response.status !== 200) {
          throw new AppError(data.message, response.status);
        }

        setVocabData(data.data.words);
      } catch (error) {
        console.error(error);
        setIsError(true);
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
      {isError ? null : (
        <div className="unit-vocab-header">
          <h3>Unit {unit} Vocabulary</h3>
        </div>
      )}

      <div className="unit-vocab-content">
        {isError ? (
          <ErrorPage />
        ) : (
          <table className="vocab-table">
            <thead>
              <tr>
                <th>English</th>
                <th>Spanish</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UnitVocabulary;
