const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const routes = require("./routes");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb', extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernblogpost", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

/* Activate at the end of coding! */
/* app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
}); */

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});