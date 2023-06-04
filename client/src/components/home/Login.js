import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AppError, setRequestOptions } from "../../utils";
import "../../styles/userForms.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const { setUser, setToken } = useContext(AuthContext);

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
      let url = "https://torolingo-api.onrender.com/api/user/login";
      if (process.env.REACT_APP_ENV === "development") {
        url = "/api/user/login";
      }
      const response = await fetch(url, requestOptions);

      const data = await response.json();

      if (response.status !== 200) {
        throw new AppError(data.message, response.status);
      }
      setUser(data.data.user);
      setToken(data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      localStorage.setItem("token", data.token);
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
      <div className="form-content login-form">
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
          <p className="link-to-form">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
