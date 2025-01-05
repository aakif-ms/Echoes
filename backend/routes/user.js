const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

router.post("/register", user.registerUser);

router.post("/login", user.loginUser);

router.get("/verify", user.verifyUser);
module.exports = router;