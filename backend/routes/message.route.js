const express = require("express")
const {getMessage,addNewMessage} = require("../controllers/message.controller.js")
const checkUserLogin = require("../middlewares/authentication.js");

const messageRouter = express.Router();

messageRouter.get("/:id",checkUserLogin, getMessage);

messageRouter.post("/:id",checkUserLogin,addNewMessage)

module.exports = messageRouter;  