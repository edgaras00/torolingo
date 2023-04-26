import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import globe from "../globe.png";
import barbell from "../barbell.png";
import profile from "../profile.png";
import more from "../more.png";
import vocab from "../vocab.png";
import githubIcon from "../github.svg";
import portfolioIcon from "../portfolio.svg";
import sourceIcon from "../source.svg";
import logoutIcon from "../logout.svg";
import "../styles/sidebar.css";
const Sidebar = () => {
  const [selectedSidebar, setSelectedSidebar] = useState({
    learn: true,
    practice: false,
    vocabulary: false,
    profile: false,
    more: false,
  });

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (value) => {
    const selectedCopy = { ...selectedSidebar };
    Object.keys(selectedCopy).forEach((value) => (selectedCopy[value] = false));
    selectedCopy[value] = true;
    setSelectedSidebar(selectedCopy);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/user/logout");
      const data = await response.json();
      console.log(data);

      setUser(null);
      localStorage.setItem("user", null);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const popoverRight = (
    <Popover id="popover-positioned-right" title="Resources">
      <div className="more-resources">
        <a
          className="resource"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/edgaras00"
        >
          <div className="resource-img-wrapper">
            <img src={sourceIcon} alt="source code" width="42px" />
          </div>
          <div className="resource-name">Source Code</div>
        </a>
        <a
          className="resource"
          href="https://github.com/edgaras00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="resource-img-wrapper">
            <img src={githubIcon} alt="github" width="32px" />
          </div>
          <div className="resource-name">Github</div>
        </a>
        <a
          className="resource"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/edgaras00"
        >
          <div className="resource-img-wrapper">
            <img src={portfolioIcon} alt="portfolio" width="32px" />
          </div>
          <div className="resource-name">Portfolio</div>
        </a>
        <div className="resource" onClick={handleLogout}>
          <div className="resource-img-wrapper">
            <img src={logoutIcon} alt="log out" width="38px" />
          </div>
          <div className="resource-name">Log Out</div>
        </div>
      </div>
    </Popover>
  );

  return (
    <nav className="sidebar">
      <div className="sidebar-top">
        <Link to="/path">
          <div className="logo">torolingo</div>
        </Link>
      </div>
      <div className="option-container">
        <Link to="/path">
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
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popoverRight}
          rootClose
        >
          <div
            className={`sidebar-option ${
              selectedSidebar.more ? "selected-option" : null
            }`}
          >
            <img src={more} alt="more" width="30px" />
            <span>MORE</span>
          </div>
        </OverlayTrigger>
      </div>
    </nav>
  );
};

export default Sidebar;
