import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import UnitHeader from "./UnitHeader";
import Circle from "./Circle";

import { unlockCircle } from "../../utils";

import checkIcon from "../../images/icons/check.svg";
import startIcon from "../../images/icons/star.svg";
import dumbbellIcon from "../../images/icons/dumbbell.svg";
import crownIcon from "../../images/icons/crown.svg";

import "../../styles/unit.css";

const Unit = ({
  number,
  description,
  primaryColor,
  secondaryColor,
  leftMascot,
  rightMascot,
  leftMascotSize,
  rightMascotSize,
  hoverColor,
  leftMascotID,
  rightMascotID,
}) => {
  const { user } = useContext(AuthContext);

  const markCompleted = (user, unit, lesson) => {
    if (
      user.progress[unit] !== undefined &&
      user.progress[unit][lesson] !== undefined &&
      user.progress[unit][lesson] >= 60
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="unit">
      <div className="unit-top">
        <UnitHeader
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          unitNumber={number}
          description={description}
          hoverColor={hoverColor}
        />
      </div>
      <div className="unit-path">
        <Link
          to={
            parseInt(number) === 1
              ? `/u${number}l1`
              : unlockCircle(user, number - 1, 6)
              ? `/u${number}l1`
              : ""
          }
        >
          <Circle
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            icon={checkIcon}
            right={21}
            isCompleted={markCompleted(user, number, 1)}
            isUnlocked={
              parseInt(number) === 1 ? true : unlockCircle(user, number - 1, 6)
            }
          />
        </Link>
        <Link to={unlockCircle(user, number, 1) ? `/u${number}l2` : ""}>
          <Circle
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            icon={startIcon}
            left={16}
            isUnlocked={unlockCircle(user, number, 1)}
            isCompleted={markCompleted(user, number, 2)}
          />
        </Link>
        <img
          src={leftMascot}
          alt="mascot"
          className="top-left-mascot"
          width={`${leftMascotSize}px`}
          id={leftMascotID}
        />
        <Link to={unlockCircle(user, number, 2) ? `/u${number}l3` : ""}>
          <Circle
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            icon={dumbbellIcon}
            left={50}
            isUnlocked={unlockCircle(user, number, 2)}
            isCompleted={markCompleted(user, number, 3)}
          />
        </Link>
        <Link to={unlockCircle(user, number, 3) ? `/u${number}l4` : ""}>
          <Circle
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            icon={startIcon}
            left={16}
            isUnlocked={unlockCircle(user, number, 3)}
            isCompleted={markCompleted(user, number, 4)}
          />
        </Link>
        <img
          src={rightMascot}
          alt="mascot"
          className="bottom-right-mascot"
          width={`${rightMascotSize}px`}
          id={rightMascotID}
        />
        <Link to={unlockCircle(user, number, 4) ? `/u${number}l5` : ""}>
          <Circle
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            icon={dumbbellIcon}
            right={21}
            isUnlocked={unlockCircle(user, number, 4)}
            isCompleted={markCompleted(user, number, 5)}
          />
        </Link>
        <Link to={unlockCircle(user, number, 5) ? `/u${number}l6` : ""}>
          <Circle
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            icon={crownIcon}
            right={48}
            isUnlocked={unlockCircle(user, number, 5)}
            isCompleted={markCompleted(user, number, 6)}
          />
        </Link>
      </div>
    </div>
  );
};

export default Unit;
