import React from "react";
import { Link } from "react-router-dom";
import mascotPaper2 from "../mascot-paper2.jpg";
import "../styles/notFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found-heading">
        <span>404</span> PAGE NOT FOUND :(
      </h1>
      <img src={mascotPaper2} alt="mascot" />
      <Link to="/">
        <button className="back-home-button">Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
