const postControllers = require("../controllers/posts");

const router = require("express").Router();
const { auth } = require('../middleware/auth.js');

router.route("/")
    .get(postControllers.findAll)
    .post(auth, postControllers.create)

router.route("/:id")
    .get(auth, postControllers.findById)
    .patch(auth, postControllers.update)
    .delete(auth, postControllers.remove);

router.route("/:id/likePost")
    .patch(auth, postControllers.likePost);

    
module.exports = router;
