const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");
const user = require("../models/user");

//create
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const list = new List({
        title,
        body,
        user: existingUser,
      });

      await list.save();

      existingUser.list.push(list);
      await existingUser.save();

      res.status(200).json({ list });
    } else {
      res.status(404).json({ message: "User not found" });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

//update
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body } = req.body;

    const updatedTask = await List.findByIdAndUpdate(
      req.params.id,
      { title, body },
      { new: true }
    );

    res.status(200).json({ message:"updatedTask"});

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

//delete
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOneAndUpdate(
      { email },
      { $pull: { list: req.params.id } });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    await List.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Task deleted" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }

  router.get("/getTask/:id" , async(res,req) =>{
    const list = await list.find({user:req.params.id})
    res.status(200).json({list});
  })
});
module.exports = router;
