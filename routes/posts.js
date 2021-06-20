const postControllers = require("../controllers/posts");

const router = require("express").Router();
const { auth } = require('../middleware/auth.js');

router.route("/")
    .get(postControllers.findAll)
    .post(auth, postControllers.create)

router.route("/:id")
    .patch(auth, postControllers.update)
    .delete(auth, postControllers.remove);

router.route("/:id/likePost")
    .patch(auth, postControllers.likePost);

    
module.exports = router;

/* const express = require("express");
const { findAll, create, update, likePost, remove } = require("../controllers/posts.js");

const router = express.Router();
const { auth } = require('../middleware/auth.js');

router.get('/', findAll);
router.post('/', auth,  create);
router.patch('/:id', auth, update);
router.delete('/:id', auth, remove);
router.patch('/:id/likePost', auth, likePost);

module.exports = router; */