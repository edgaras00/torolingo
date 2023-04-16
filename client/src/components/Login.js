import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-form-container">
      <div className="exit-login">
        <div className="exit-button">X</div>
      </div>
      <div className="login-header-container">
        <h3>Log in</h3>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>LOG IN</button>
      </form>
    </div>
  );
};

export default Login;
