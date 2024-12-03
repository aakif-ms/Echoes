const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);


app.get("/", (req, res) => {
    console.log('Express Is setup')
    res.json({message: 'Hello from backend'})
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})