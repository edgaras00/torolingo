import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <div className="logo">torolingo</div>
      </div>
      <div className="home-middle">
        <div className="home-img-container">
          <div className="placeholder"></div>
        </div>
        <div className="signup-links-container">
          <div className="learn-text">
            <h3>The free, fun, and effective way to learn Spanish language!</h3>
          </div>
          <div className="signup-links">
            <Link to="/signup">
              <button className="signup">GET STARTED</button>
            </Link>
            <Link to="/login">
              <button className="login">I ALREADY HAVE AN ACCOUNT</button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
