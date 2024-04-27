const express = require("express")
const checkUserLogin = require("../middlewares/authentication.js");
const { getAllUsers } = require("../controllers/users.controller.js");

const userRouter = express.Router();

userRouter.get("/",checkUserLogin, getAllUsers);


module.exports = userRouter;  