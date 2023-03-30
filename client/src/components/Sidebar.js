import React from "react";
import { Link } from "react-router-dom";
import globe from "../globe.png";
import barbell from "../barbell.png";
import profile from "../profile.png";
import more from "../more.png";
import vocab from "../vocab.png";
import "../styles/sidebar.css";
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-top">
        <Link to="/">
          <div className="logo">torolingo</div>
        </Link>
      </div>
      <div className="option-container">
        <Link to="/">
          <div className="sidebar-option">
            <img src={globe} alt="globe" width="30px" />
            <span>LEARN</span>
          </div>
        </Link>
        <Link to="/practice">
          <div className="sidebar-option">
            <img src={barbell} alt="barbell" width="36px" />
            <span>PRACTICE</span>
          </div>
        </Link>
        <Link to="/vocabulary">
          <div className="sidebar-option">
            <img src={vocab} alt="vocabulary" width="36px" />
            <span>VOCABULARY</span>
          </div>
        </Link>
        <Link to="/profile">
          <div className="sidebar-option">
            <img src={profile} alt="profile" width="30px" />
            <span>PROFILE</span>
          </div>
        </Link>
        <div className="sidebar-option">
          <img src={more} alt="more" width="30px" />
          <span>MORE</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
