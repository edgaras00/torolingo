import { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import useWidth from "../hooks/useWidth";

import sourceIcon from "../images/icons/source.svg";
import githubIcon from "../images/icons/github.svg";
import portfolioIcon from "../images/icons/portfolio.svg";
import logoutIcon from "../images/icons/logout.svg";
import mascotImage from "../images/mascots/mascot-4r.png";
import globeIcon from "../images/icons/globe.png";
import barbellIcon from "../images/icons/barbell.png";
import vocabIcon from "../images/icons/vocab.png";
import profileIcon from "../images/icons/profile.png";
import moreIcon from "../images/icons/more.png";

import "../styles/sidebar.css";

const Sidebar = () => {
  const [selectedSidebar, setSelectedSidebar] = useState({
    learn: true,
    practice: false,
    vocabulary: false,
    profile: false,
    more: false,
  });

  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  const isFirstRender = useRef(true);
  const { width } = useWidth();

  useEffect(() => {
    // Highlight the correct sidebar option if user hits route through URL
    if (isFirstRender.current) {
      isFirstRender.current = false;
      const selectedCopy = { ...selectedSidebar };
      for (const key in selectedCopy) selectedCopy[key] = false;
      if (currentPath === "/path") selectedCopy.learn = true;
      if (currentPath === "/practice") selectedCopy.practice = true;
      if (currentPath === "/profile") selectedCopy.profile = true;
      if (currentPath === "/vocabulary") selectedCopy.vocabulary = true;
      setSelectedSidebar(selectedCopy);
    }
  }, [currentPath, selectedSidebar]);

  const handleClick = (value) => {
    // Highlight correct option if user hits route through clicking link
    const selectedCopy = { ...selectedSidebar };
    Object.keys(selectedCopy).forEach((value) => (selectedCopy[value] = false));
    selectedCopy[value] = true;
    setSelectedSidebar(selectedCopy);
  };

  const handleLogout = async () => {
    try {
      let url = "https://torolingo-api.onrender.com/api/user/logout";
      if (import.meta.env.REACT_APP_ENV === "development") {
        url = "/api/user/logout";
      }
      await fetch(url);

      setUser(null);
      setToken(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const popoverRight = (
    <Popover>
      <div className="more-resources">
        <a
          className="resource"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/edgaras00/torolingo"
        >
          <div className="resource-img-wrapper">
            <img src={sourceIcon} alt="source code" width="42px" />
          </div>
          <div className="resource-name">Source Code</div>
        </a>
        <a
          className="resource"
          href="https://github.com/edgaras00/"
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
          href="https://edgaras00.github.io"
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
          <div className="logo" onClick={() => handleClick("learn")}>
            torolingo
          </div>
          <img className="mascot-logo" src={mascotImage} alt="mascot" />
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
            <img src={globeIcon} alt="globe" className="sidebar-icon-a" />
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
            <img src={barbellIcon} alt="barbell" className="sidebar-icon-b" />
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
            <img src={vocabIcon} alt="vocabulary" className="sidebar-icon-b" />
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
            <img src={profileIcon} alt="profile" className="sidebar-icon-a" />
            <span>PROFILE</span>
          </div>
        </Link>
        <OverlayTrigger
          trigger="click"
          placement={width > 535 ? "right" : "top"}
          overlay={popoverRight}
          rootClose
        >
          <div
            className={`sidebar-option ${
              selectedSidebar.more ? "selected-option" : null
            }`}
          >
            <img src={moreIcon} alt="more" className="sidebar-icon-a" />
            <span>MORE</span>
          </div>
        </OverlayTrigger>
      </div>
    </nav>
  );
};

export default Sidebar;
