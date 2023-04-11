import React from "react";
import { Link } from "react-router-dom";
import "../styles/userProfile.css";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-card">
        <div className="name-circle">A</div>
        <div className="name-card">
          <div className="username">Name</div>
          <div className="joined">Joined April 10th 2022</div>
        </div>
      </div>
      <Link to="/account">
        <button className="edit-profile-btn">EDIT PROFILE</button>
      </Link>
    </div>
  );
};

export default UserProfile;
