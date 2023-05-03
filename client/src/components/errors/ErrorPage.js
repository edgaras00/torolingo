import "../../styles/errorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-heading">Something went wrong :(</h1>
      <h2>Please try again later</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/mascots/mascot-3r.jpg`}
        alt="mascot"
      />
    </div>
  );
};

export default ErrorPage;
