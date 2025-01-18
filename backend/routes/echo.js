const express = require("express");
const router = express.Router();
const echo = require("../controllers/echo");
const { singleUpload } = require("../middleware/multer");

router.get("/sendEcho/:id", echo.sendEcho);

router.get("/updateEcho/:id", echo.sendSingleEcho);

router.post("/addEcho", singleUpload, echo.addEcho);

router.put("/updateEcho", echo.updateEcho);

router.delete("/deleteEcho", echo.deleteEcho);

module.exports = router;
