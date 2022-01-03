const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({ name, email, password });

  try {
    newUser.save()
    res.send('User registration successful')
    
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.get("/getallusers" , async (req,res) => {
  try {
    const users = await User.find({})
    res.send(users)
  } catch (error) {
    return res.status(400).json({message : error})
  }
})

router.delete("/deleteuser" , async (req,res) => {

  const userId = req.body.userId
  console.log(userId)
  try {
 
    await User.findOneAndDelete(userId)
    res.send("user deleted")
  
  } catch (error) {
     res.status(400).json({message:error})
   
    
  }
})


module.exports = router;