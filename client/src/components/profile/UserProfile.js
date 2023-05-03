import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "../../styles/userProfile.css";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="user-profile">
      <div className="profile-card">
        <div className="name-circle">{user ? user.name[0] : "A"}</div>
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
