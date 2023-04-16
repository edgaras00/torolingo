import React, { useState } from "react";

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
      <div className="header-container">
        <h3>Create your profile</h3>
      </div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
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
          minlength="6"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          minlength="6"
          onChange={(event) => setPasswordConfirm(event.target.value)}
        />
        <button>CREATE ACCOUNT</button>
      </form>
    </div>
  );
};

export default Register;
