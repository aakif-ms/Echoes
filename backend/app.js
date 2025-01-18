const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.js");
const echoRoutes = require("./routes/echo.js");

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

app.use("/uploads", express.static("uploads"))

app.use("/auth", userRoutes);
app.use("/echo", echoRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello from backend" });
});


app.listen(3000, () => {
  console.log("Listening on port 3000");
});
