const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

const authUser = asyncHandler(async (req, res) => {
  console.log("ggggg",req.body);
  const { email, password } = req.body;
  console.log("fd",email,password);

  const user = await User.findOne({ email });
  console.log(user);

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token:generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
});
const userdatails = asyncHandler(async (req, res) => {
  const users = await User.find({});
  console.log("usr", users);
  if (users) {
    console.log(users);
    res.json(users);
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});

const userinfo = asyncHandler(async (req, res) => {
  console.log("joofh",req.params.userId);
  const user = await User.findById(req.params.userId);
  if (user) {
    console.log(user);
    res.json(user);
  } else {
    res.json(400);
    throw new Error("Error occured");
  }
});

const usernewinfo = asyncHandler(async (req, res) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const id=req.params.userid
console.log("jjjjjj",email,name,id);
    const user = await User.findByIdAndUpdate(id, {
      name: name,
      email: email,
    });
    res.json(user);
    console.log(user);
  } catch (error) {

  }
});
module.exports = { registerUser, authUser,userdatails,userinfo,usernewinfo };
