const userControllers = require("../controllers/user");

const router = require("express").Router();


router.route("/signin")
    .post(userControllers.signin);
router.route("/signup")
    .post(userControllers.signup);


    
module.exports = router;