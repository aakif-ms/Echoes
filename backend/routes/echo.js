const express = require("express");
const router = express.Router();
const echo = require("../controllers/echo");

router.get("/sendEcho/:id", echo.sendEcho);

router.get("/updateEcho/:id", echo.sendSingleEcho);

router.post("/addEcho", echo.addEcho);

router.put("/updateEcho", echo.updateEcho);

router.delete("/deleteEcho", echo.deleteEcho);

module.exports = router