import mascotPaper2 from "../mascot-paper2.jpg";

import "../styles/errorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-heading">Something went wrong :(</h1>
      <h2>Please try again later</h2>
      <img src={mascotPaper2} alt="mascot" />
    </div>
  );
};

export default ErrorPage;
