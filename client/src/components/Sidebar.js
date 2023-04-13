import React, { useState } from "react";
import { Link } from "react-router-dom";
import globe from "../globe.png";
import barbell from "../barbell.png";
import profile from "../profile.png";
import more from "../more.png";
import vocab from "../vocab.png";
import "../styles/sidebar.css";
const Sidebar = () => {
  const [selectedSidebar, setSelectedSidebar] = useState({
    learn: true,
    practice: false,
    vocabulary: false,
    profile: false,
    more: false,
  });

  const handleClick = (value) => {
    const selectedCopy = { ...selectedSidebar };
    Object.keys(selectedCopy).forEach((value) => (selectedCopy[value] = false));
    selectedCopy[value] = true;
    setSelectedSidebar(selectedCopy);
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-top">
        <Link to="/">
          <div className="logo">torolingo</div>
        </Link>
      </div>
      <div className="option-container">
        <Link to="/">
          <div
            className={`sidebar-option ${
              selectedSidebar.learn ? "selected-option" : null
            }`}
            onClick={() => handleClick("learn")}
          >
            <img src={globe} alt="globe" width="30px" />
            <span>LEARN</span>
          </div>
        </Link>
        <Link to="/practice">
          <div
            className={`sidebar-option ${
              selectedSidebar.practice ? "selected-option" : null
            }`}
            onClick={() => handleClick("practice")}
          >
            <img src={barbell} alt="barbell" width="36px" />
            <span>PRACTICE</span>
          </div>
        </Link>
        <Link to="/vocabulary">
          <div
            className={`sidebar-option ${
              selectedSidebar.vocabulary ? "selected-option" : null
            }`}
            onClick={() => handleClick("vocabulary")}
          >
            <img src={vocab} alt="vocabulary" width="36px" />
            <span>VOCABULARY</span>
          </div>
        </Link>
        <Link to="/profile">
          <div
            className={`sidebar-option ${
              selectedSidebar.profile ? "selected-option" : null
            }`}
            onClick={() => handleClick("profile")}
          >
            <img src={profile} alt="profile" width="30px" />
            <span>PROFILE</span>
          </div>
        </Link>
        <div
          className={`sidebar-option ${
            selectedSidebar.more ? "selected-option" : null
          }`}
          onClick={() => handleClick("more")}
        >
          <img src={more} alt="more" width="30px" />
          <span>MORE</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
