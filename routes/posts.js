const postControllers = require("../controllers/posts");

const router = require("express").Router();


router.route("/")
    .get(postControllers.findAll)
    .post(postControllers.create);

module.exports = router;