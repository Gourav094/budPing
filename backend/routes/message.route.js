const express = require("express")
const getMessage = require("../controllers/message.controller.js");
const checkUserLogin = require("../middlewares/authentication.js");

const messageRouter = express.Router();

messageRouter.get("/",checkUserLogin, getMessage);


module.exports = messageRouter;  