import { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import useWidth from "../hooks/useWidth";

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
      if (process.env.REACT_APP_ENV === "development") {
        url = "/api/user/logout";
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

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
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/source.svg`}
              alt="source code"
              width="42px"
            />
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
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/github.svg`}
              alt="github"
              width="32px"
            />
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
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/portfolio.svg`}
              alt="portfolio"
              width="32px"
            />
          </div>
          <div className="resource-name">Portfolio</div>
        </a>
        <div className="resource" onClick={handleLogout}>
          <div className="resource-img-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/logout.svg`}
              alt="log out"
              width="38px"
            />
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
          <img
            className="mascot-logo"
            src={`${process.env.PUBLIC_URL}/images/mascots/mascot-4r.png`}
            alt="mascot"
          />
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
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/globe.png`}
              alt="globe"
              className="sidebar-icon-a"
            />
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
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/barbell.png`}
              alt="barbell"
              className="sidebar-icon-b"
            />
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
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/vocab.png`}
              alt="vocabulary"
              className="sidebar-icon-b"
            />
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
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/profile.png`}
              alt="profile"
              className="sidebar-icon-a"
            />
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
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/more.png`}
              alt="more"
              className="sidebar-icon-a"
            />
            <span>MORE</span>
          </div>
        </OverlayTrigger>
      </div>
    </nav>
  );
};

export default Sidebar;
