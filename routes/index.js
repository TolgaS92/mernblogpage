const path = require("path");
const router = require("express").Router();
const postRoute = require("./posts");
const userRoute = require("./users");
// API Routes
router.use("/posts", postRoute);
router.use("/users", userRoute);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;