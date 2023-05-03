import { Link } from "react-router-dom";
import "../../styles/notFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found-heading">
        <span>404</span> PAGE NOT FOUND :(
      </h1>
      <img
        src={`${process.env.PUBLIC_URL}/images/mascots/mascot-3r.jpg`}
        alt="mascot"
      />
      <Link to="/">
        <button className="back-home-button">Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
