const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    // Generate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);  

    // create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // save user and response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    if (err.code === 11000) {
      // MongoDB duplicate key error
      res.status(400).json({ error: "Username or email already exists" });
    } else {
      console.error("Registration error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

// Keep other routes here if needed
router.get("/", (req, res) => {
  res.send("Welcome to users route");
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json("User not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.status(400).json("Wrong password");

    res.status(200).json(user);
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
