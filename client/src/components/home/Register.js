import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AppError, setRequestOptions } from "../../utils";
import "../../styles/userForms.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [signupError, setSignupError] = useState("");
  const { setUser, setToken } = useContext(AuthContext);

  const handleSubmit = async (
    event,
    name,
    email,
    password,
    confirmPassword
  ) => {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setSignupError("Please fill in all of the fields.");
      return;
    }

    if (password !== confirmPassword) {
      setSignupError("Passwords do not match!");
      setPasswordConfirm("");
      return;
    }
    setSignupError("");
    try {
      // Set request options and prepare data to be sent to server
      const requestOptions = setRequestOptions("POST", {
        name,
        email,
        password,
      });
      let url = "https://torolingo-api.onrender.com/api/user/signup";
      if (process.env.REACT_APP_ENV === "development") {
        url = "/api/user/signup";
      }
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (response.status !== 201) {
        throw new AppError(data.message, response.status);
      }
      // Log in user
      setUser(data.data.user);
      setToken(data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error(error);
      if (error.statusCode === 500) {
        setSignupError("Something went wrong. Please try again later.");
        return;
      }
      if (error.message.startsWith("Duplicate value")) {
        setSignupError("User with this email already exists");
        return;
      }
      setSignupError(error.message);
    }
  };

  return (
    <div className="form-container">
      <div className="exit-login">
        <Link to="/">
          <div className="form-exit-button">X</div>
        </Link>
      </div>
      <div className="form-content register-form">
        <div className="header-container">
          <h3>Create your profile</h3>
        </div>
        <form
          className="user-form"
          onSubmit={(event) =>
            handleSubmit(event, name, email, password, passwordConfirm)
          }
        >
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
            minLength="6"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            value={passwordConfirm}
            minLength="6"
            onChange={(event) => setPasswordConfirm(event.target.value)}
          />
          {signupError ? (
            <p className="user-submit-error">{signupError}</p>
          ) : null}
          <button>CREATE ACCOUNT</button>
          <p className="link-to-form">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
