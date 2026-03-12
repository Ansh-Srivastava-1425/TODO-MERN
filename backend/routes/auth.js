const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// SIGN UP
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const hashpassword = bcrypt.hashSync(password, 10);

    const user = new User({
      email,
      username,
      password: hashpassword,
    });

    const savedUser = await user.save();

    res.status(200).json({ user: savedUser });

  } catch (error) {
    res.status(400).json({
      message: "User Already Exists",
      error: error.message,
    });
  }
});

// SIGN IN
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({
        message: "Please Sign Up First",
      });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Password Incorrect",
      });
    }

    const { password, ...others } = user._doc;

    res.status(200).json(others);

  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

module.exports = router;