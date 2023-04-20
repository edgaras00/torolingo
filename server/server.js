const mongoose = require("mongoose");
require("dotenv").config();

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("UNCAUGHT EXCEPTION. Shutting down.");
  console.log(err.name, err.message);
});

const app = require("./app");
mongoose.connect(process.env.DB_CONNECT);

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

// Handle unhandled rejections
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION. Shutting down.");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1); // 0 = success 1 = unhandled rejection
  });
});
