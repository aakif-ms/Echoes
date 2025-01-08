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
  const { formData, id } = req.body;
  try {
    const echo = new Echo(formData);
    echo.author = id;
    await echo.save();
  } catch (error) {
    console.log("Error Occurred: ", error);
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
    await Echo.findByIdAndDelete(id);
    console.log("Deleting");
  } catch (e) {
    console.log("Error occurred deleting", e);
  }
};
