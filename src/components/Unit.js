import React from "react";
import { Link } from "react-router-dom";
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
      <div className="unit-top">
        <UnitHeader
          unitNumber={1}
          unitDescription="Form basic sentences and greet people"
        />
      </div>
      <div className="unit-path">
        {/* <div class="sparkles-container">
          <div class="sparkle"></div>
          <div class="sparkle"></div>
          <div class="sparkle"></div>
        </div> */}
        <Link to="/u1l1">
          <Circle
            color="#4caf50"
            shadowColor="28, 124, 32"
            icon={dumbbell}
            left={50}
          />
        </Link>
        <Link to="/u2l2">
          <Circle
            color="#4caf50"
            shadowColor="28, 124, 32"
            icon={star}
            left={16}
          />
        </Link>
        <Link to="/u3l3">
          <Circle
            color="#4caf50"
            shadowColor="28, 124, 32"
            icon={check}
            right={21}
          />
        </Link>
        <Link to="/u4l4">
          <Circle
            color="#4caf50"
            shadowColor="28, 124, 32"
            icon={crown}
            right={48}
          />
        </Link>
      </div>
    </div>
  );
};

export default Unit;
