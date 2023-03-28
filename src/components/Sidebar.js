import React from "react";
import globe from "../globe.png";
import barbell from "../barbell.png";
import profile from "../profile.png";
import more from "../more.png";
import "../styles/sidebar.css";
import SpeechBubble from "./SpeechBubble";
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-top">
        <div className="logo">torolingo</div>
      </div>
      <div className="option-container">
        <div className="sidebar-option">
          <img src={globe} alt="globe" width="30px" />
          <span>LEARN</span>
        </div>
        <div className="sidebar-option">
          <img src={barbell} alt="barbell" width="36px" />
          <span>PRACTICE</span>
        </div>
        <div className="sidebar-option">
          <img src={profile} alt="profile" width="30px" />
          <span>PROFILE</span>
        </div>
        <div className="sidebar-option">
          <img src={more} alt="more" width="30px" />
          <span>MORE</span>
        </div>
        <SpeechBubble
          spanishText="Yo como manzanas."
          englishText="I eat apples."
          reverse={true}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
