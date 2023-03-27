import React from "react";
import { Link } from "react-router-dom";
import UnitHeader from "./UnitHeader";
import Circle from "./Circle";
import dumbbell from "../db3.svg";
import check from "../check.svg";
import star from "../star.svg";
import crown from "../crown.svg";
import "../styles/unit.css";

const Unit = ({ number, description, primaryColor, secondaryColor }) => {
  return (
    <div className="unit">
      <div className="unit-top">
        <UnitHeader
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          unitNumber={number}
          description={description}
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
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            icon={check}
            right={21}
          />
        </Link>
        <Link to="/u1l2">
          <Circle
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            icon={star}
            left={16}
          />
        </Link>
        <Link to="/u1l3">
          <Circle
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            icon={dumbbell}
            left={50}
          />
        </Link>
        <Link to="/u1l4">
          <Circle
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            icon={star}
            left={16}
          />
        </Link>
        <Link to="/u1l5">
          <Circle
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            icon={dumbbell}
            right={21}
          />
        </Link>
        <Link to="/u1l6">
          <Circle
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            icon={crown}
            right={48}
          />
        </Link>
      </div>
    </div>
  );
};

export default Unit;
