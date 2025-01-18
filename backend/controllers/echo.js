const Echo = require("../models/echo");

module.exports.sendEcho = async (req, res) => {
  const { id } = req.params;
  try {
    const echoes = await Echo.find({ author: id });
    res.json(echoes);
  } catch (error) {
    res.json("Error finding data");
  }
};

module.exports.sendSingleEcho = async (req, res) => {
  const { id } = req.params;
  try {
    const echo = await Echo.findById(id);
    res.json(echo);
  } catch (error) {
    res.json("Error finding data");
  }
};

module.exports.addEcho = async (req, res) => {
  try {
    const { title, description, date, id } = req.body;
    const imagePath = req.file
      ? `http://localhost:3000/uploads/images/${req.file.filename}`
      : undefined;

    const echo = new Echo({
      title,
      description,
      date,
      image: imagePath,
      author: id,
    });

    console.log(echo)

    await echo.save();
    res.status(201).json({ message: "Echo added successfully!" });
  } catch (error) {
    console.error("Error Occurred: ", error);
    res.status(500).json({ error: "Failed to add echo" });
  }
};

module.exports.updateEcho = async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.body;
    await Echo.findByIdAndUpdate(id, { ...req.body });
    console.log("Echo Updated Successfully");
  } catch (e) {
    console.log(e);
  }
};

module.exports.deleteEcho = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id)
    await Echo.findByIdAndDelete(id);
    console.log("Deleting");
  } catch (e) {
    console.log("Error occurred deleting", e);
  }
};
