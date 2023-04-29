import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { setRequestOptions, AppError } from "../utils";

import "../styles/account.css";

const Account = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Request status state
  const [isError, setIsError] = useState(false);
  const [dataStatusMessage, setDataStatusMessage] = useState("");
  const [passwordStatusMessage, setPasswordStatusMessage] = useState("");

  const { user, setUser } = useContext(AuthContext);

  const resetStatusMessages = () => {
    setIsError(false);
    setDataStatusMessage("");
    setPasswordStatusMessage("");
  };

  const handleSubmitProfile = async (event) => {
    event.preventDefault();
    resetStatusMessages();

    // Update with only new data
    const updateData = {};
    if (username && user.name !== username) updateData.name = username;
    if (email && user.email !== email) updateData.email = email;
    const requestOptions = setRequestOptions("PATCH", updateData);

    try {
      const response = await fetch("/api/user/updateUser", requestOptions);
      const data = await response.json();

      if (response.status !== 200) {
        throw new AppError(data.message, response.status);
      }

      // Reset inputs and set request status message
      setEmail("");
      setUsername("");
      setDataStatusMessage("Profile data saved successfully");

      setUser(data.data.user);
      localStorage.setItem("user", JSON.stringify(data.data.user));
    } catch (error) {
      console.error(error);
      setIsError(true);
      if (error.message.startsWith("Duplicate value")) {
        setDataStatusMessage("User with this email address already exists");
        return;
      }
      setDataStatusMessage(error.message);
    }
  };

  const handleSubmitPassword = async (event) => {
    event.preventDefault();
    resetStatusMessages();

    const passwordData = { currentPassword, password: newPassword };
    const requestOptions = setRequestOptions("PATCH", passwordData);

    try {
      const response = await fetch("/api/user/changePassword", requestOptions);
      const data = await response.json();

      if (response.status !== 200) {
        throw new AppError(data.message, response.status);
      }

      setNewPassword("");
      setCurrentPassword("");
      setPasswordStatusMessage("Password changed successfully");
      // Log out user after password change
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error(error);
      setIsError(true);
      setPasswordStatusMessage(error.message);
    }
    return;
  };

  return (
    <div className="account-container">
      <div className="header-wrapper">
        <div>Account</div>
      </div>
      <form
        onSubmit={(event) => handleSubmitProfile(event)}
        className="account-form"
      >
        <div className="input-wrapper">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
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
        <p className={`form-status-message ${isError ? "form-error" : null}`}>
          {dataStatusMessage ? dataStatusMessage : null}
        </p>
        <button>Save Changes</button>
      </form>
      <br />
      <form onSubmit={handleSubmitPassword} className="account-form">
        <div className="input-wrapper">
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            name="currentPassword"
            id="currentPassword"
            onChange={(event) => setCurrentPassword(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            value={newPassword}
            name="newPassword"
            id="newPassword"
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </div>
        <p className={`form-status-message ${isError ? "form-error" : null}`}>
          {passwordStatusMessage ? passwordStatusMessage : null}
        </p>
        <button>Change Password</button>
      </form>
    </div>
  );
};

export default Account;
