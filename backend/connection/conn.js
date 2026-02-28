const mongoose = require("mongoose");
const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://kumaransh7591_db_user:Ansh%402026@cluster0.ecvutsy.mongodb.net/",
      )
      .then(() => {
        console.log("connected to db");
      });
  } catch (error) {
    res.statur(400).json({ message: "Not connected " });
  }
};
conn();
