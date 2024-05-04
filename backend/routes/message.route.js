const express = require("express")
const {getMessage,addNewMessage, deleteChat} = require("../controllers/message.controller.js")
const checkUserLogin = require("../middlewares/authentication.js");

const messageRouter = express.Router();

messageRouter.get("/:id",checkUserLogin, getMessage);

messageRouter.post("/:id",checkUserLogin,addNewMessage)

messageRouter.delete("/:id",checkUserLogin,deleteChat)

module.exports = messageRouter;  