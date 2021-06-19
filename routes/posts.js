const postControllers = require("../controllers/posts");

const router = require("express").Router();


router.route("/")
    .get(postControllers.findAll)
    .post(postControllers.create);
router.route("/:id")
    .patch(postControllers.update)
    .delete(postControllers.remove)

router.route("/:id/likePost")
    .patch(postControllers.likePost)

    
module.exports = router;