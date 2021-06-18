const postControllers = require("../controllers/posts");

const router = require("express").Router();


router.route("/")
    .get(postControllers.findAll)
    .post(postControllers.create);
router.route("/:id")
    .patch(postControllers.update);

module.exports = router;