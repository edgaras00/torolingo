import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { setRequestOptions } from "../utils";
import "../styles/account.css";

const Account = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useContext(AuthContext);

  const handleSubmitProfile = async (event) => {
    event.preventDefault();
    const updateData = {};

    if (user.name !== userName) updateData.name = userName;
    if (user.email !== email) updateData.email = email;
    const requestOptions = setRequestOptions("PATCH", updateData);

    try {
      const response = await fetch("/api/user/updateUser", requestOptions);
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitPassword = (event) => {
    event.preventDefault();
    return;
  };

  return (
    <div className="account-container">
      <div className="header-wrapper">
        <div>Account</div>
      </div>
      <form
        onSubmit={(event) => handleSubmitProfile(event, email, userName)}
        className="account-form"
      >
        <div className="input-wrapper">
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button>Save Changes</button>
      </form>
      <br />
      <form onSubmit={handleSubmitPassword} className="account-form">
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button>Change Password</button>
      </form>
    </div>
  );
};

export default Account;
