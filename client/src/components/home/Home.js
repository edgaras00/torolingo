import { Link } from "react-router-dom";
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-logo">torolingo</div>
      </div>
      <div className="home-middle">
        <div className="home-img-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/spanish.png`}
            alt="hispanic flags"
          />
        </div>
        <div className="signup-links-container">
          <div className="learn-text">
            <h3>The free, fun, and effective way to learn Spanish language!</h3>
          </div>
          <div className="signup-links">
            <Link to="/signup">
              <button className="link-button">GET STARTED</button>
            </Link>
            <Link to="/login">
              <button className="link-button login-button">
                I ALREADY HAVE AN ACCOUNT
              </button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
