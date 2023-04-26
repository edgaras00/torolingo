import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AppError, setRequestOptions } from "../utils";
import "../styles/userForms.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (event, email, password) => {
    event.preventDefault();

    if (!email || !password) {
      setLoginError("Please fill in all of the fields.");
      return;
    }
    setLoginError(null);
    try {
      // Set request options and prepare data to be sent to server
      const requestOptions = setRequestOptions("POST", { email, password });

      // Send request
      const response = await fetch(
        "http://localhost:5000/api/user/login",
        requestOptions
      );

      const data = await response.json();

      if (response.status !== 200) {
        throw new AppError(data.message, response.status);
      }
      setUser(data.data.user);
      localStorage.setItem("user", JSON.stringify(data.data.user));
    } catch (error) {
      console.error(error);
      setLoginError(error.message);
    }
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
        <form
          className="user-form"
          onSubmit={(event) => handleSubmit(event, email, password)}
        >
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
          {loginError ? (
            <p className="user-submit-error">{loginError}</p>
          ) : null}
          <button>LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
