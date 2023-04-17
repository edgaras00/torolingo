import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/userForms.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <div className="exit-login">
        <Link to="/">
          <div className="form-exit-button">X</div>
        </Link>
      </div>
      <div className="form-content">
        <div className="login-header-container">
          <h3>Log in</h3>
        </div>
        <form className="user-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button>LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
