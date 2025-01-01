const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User has been successfully created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id, name: user.name }, "secret");
    res.json({ token, user: user.name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.verifyUser = (req, res) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ message: "Authorization Denied" });
  }

  try {
    const verified = jwt.verify(token, "secret");
    res.json(verified);
  } catch (err) {
    res.status(401).json({ message: "Token is not valid", error: err.message });
  }
};
