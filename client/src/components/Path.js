import React from "react";
import Unit from "./Unit";
import guitarMascot from "../cow-guitar.png";
import "../styles/path.css";

const Path = () => {
  return (
    <div className="path-container">
      <Unit
        number="1"
        primaryColor="#e84943"
        secondaryColor="#c23e39"
        description="Form basic sentences, greet people"
        leftMascot={guitarMascot}
        rightMascot={guitarMascot}
      />
      <Unit
        number="2"
        primaryColor="#5ad12a"
        secondaryColor="#3e8f1e"
        description="Get around in a city"
      />
      <Unit
        number="3"
        primaryColor="#2a6fc9"
        secondaryColor="#21569c"
        description="Order food and drink"
      />
      <Unit
        number="4"
        primaryColor="#eb9c3d"
        secondaryColor="#b8792e"
        description="Describe family"
      />
      <Unit
        number="5"
        primaryColor="#e03879"
        secondaryColor="#ad2b5e"
        description="Shop for clothes"
      />
    </div>
  );
};

export default Path;
