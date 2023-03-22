import React from "react";
import UnitHeader from "./UnitHeader";
import Circle from "./Circle";
import dumbbell from "../db3.svg";
import check from "../check.svg";
import star from "../star.svg";
import crown from "../crown.svg";
import "../styles/unit.css";

const Unit = () => {
  return (
    <div className="unit">
      <UnitHeader
        unitNumber={1}
        unitDescription="Form basic sentences and greet people"
      />
      <Circle color="#4caf50" shadowColor="28, 124, 32" icon={dumbbell} />
      <Circle color="#4caf50" shadowColor="28, 124, 32" icon={star} />
      <Circle color="#4caf50" shadowColor="28, 124, 32" icon={check} />
      <Circle color="#4caf50" shadowColor="28, 124, 32" icon={crown} />
    </div>
  );
};

export default Unit;
