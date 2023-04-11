import React, { useState } from "react";
import "../styles/account.css";

const Account = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    return;
  };

  const handleSubmitPassword = (event) => {
    event.preventDefault();
    return;
  };

  return (
    <div className="account-container">
      <div>Account</div>
      <form onSubmit={handleSubmit} className="name-form">
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
          <label htmlFor="email">Email</label>
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
      <form onSubmit={handleSubmitPassword} className="password-form">
        <label>Password</label>
        <input
          type="password"
          value={password}
          name="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Change Password</button>
      </form>
    </div>
  );
};

export default Account;
