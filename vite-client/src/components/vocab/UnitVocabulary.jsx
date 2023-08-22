import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import ErrorPage from "../errors/ErrorPage";

import { AppError } from "../../utils";
import "../../styles/unitVocabulary.css";

const UnitVocabulary = () => {
  const [vocabData, setVocabData] = useState([]);
  const [isError, setIsError] = useState(false);
  const { token } = useContext(AuthContext);

  // Get unit number
  const { vocabID } = useParams();
  let unit = vocabID.split("-")[1] * 1;
  if (unit > 2) {
    unit = 2;
  }

  useEffect(() => {
    const getVocabData = async () => {
      try {
        let url = `https://torolingo-api.onrender.com/api/vocab?unit=${unit}`;
        if (import.meta.env.REACT_APP_ENV === "development") {
          url = `/api/vocab?unit=${unit}`;
        }
        const response = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
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
  }, [unit, token]);

  const tableRows = vocabData.map((pair, index) => (
    <tr className={index % 2 === 0 ? "row-even" : "row-odd"} key={index}>
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
