const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.find({ email, password }); 
  if (user.length > 0) {
    const currentUser = {
      name: user[0].name,
      email: user[0].email,
      isAdmin: user[0].isAdmin,
      _id: user[0]._id,
    };
    res.send(currentUser);
  } else {
    res.status(400).json({ message: "User login failed" });
  }
});

module.exports = router;
