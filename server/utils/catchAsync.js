// Replaces try/catch block
// Returns anonymous function that wraps the controller function
// Async function that returns a promise | Errors will be caught by .catch

module.exports = (fn) => {
  return (req, res, next) => {
    // .catch sends the error to the global error handler
    fn(req, res, next).catch((error) => next(error));
  };
};
