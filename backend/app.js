const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Echo = require("./models/echo.js");
const cors = require("cors");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/echoes");
  console.log("Connected to MongoDB");
}

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  console.log("Express Is setup");
  res.json({ message: "Hello from backend" });
});

app.get("/add", (req, res) => {
  res.json({ message: "Hello from Add page" });
});

app.post("/add", async (req, res) => {
  try {
    const echo = new Echo(req.body);
    await echo.save();
  } catch (error) {
    console.log("Error Occurred: ", error);
  }
});

app.get("/sendEcho", async (req, res) => {
  try {
    const echoes = await Echo.find({});
    res.json(echoes);
  } catch (error) {
    res.json("Error finding data");
  }
});

app.put("/updateEcho", async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.body;
    await Echo.findByIdAndUpdate(id, { ...req.body });
    console.log("Echo Updated Successfully");
  } catch (e) {
    console.log(e);
  }
});

app.delete("/deleteEcho", async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.body;
    await Echo.findByIdAndDelete(id);
    console.log("Deleting");
  } catch (e) {
    console.log("Error occurred deleting", e);
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});