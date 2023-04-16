import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register-form-container">
      <div className="exit-login">
        <Link to="/">
          <div className="form-exit-button">X</div>
        </Link>
      </div>
      <div className="form-content">
        <div className="header-container">
          <h3>Create your profile</h3>
        </div>
        <form className="registration-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            minlength="6"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            value={passwordConfirm}
            minlength="6"
            onChange={(event) => setPasswordConfirm(event.target.value)}
          />
          <button>CREATE ACCOUNT</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
