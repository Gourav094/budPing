const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");

async function getMessage(req,res){
    const senderId = req.user._id
    const {id: receiverId} = req.params

    try{
        const conversation = await Conversation.findOne({
            participants : {$all:[senderId,receiverId]}
        }).populate("messages")
        
        const messages = conversation.messages

        res.status(200).json({
            messages
        })  
    }
    catch(err){
        console.log("Getting error in fetching messages")
        res.status(400).json({
            error:"Internal server Error"
        })
    }
}

async function addNewMessage(req,res){
    const {id : receiverId} = req.params;
    const senderId = req.user._id;
    const {message} = req.body
    
    try{
        let conversation = await Conversation.findOne({
            participants: {$all : [senderId,receiverId]}
        })

        
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId],
            })
        }
        console.log("conversation find")
        
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        console.log(conversation)
        if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(200).json({
            message:"Message sent",
            newMessage
        })
    }
    catch(err){
        console.log("Error occured in sending message: ",err)
        res.status(400).json({
            error:"Getting error in sending message"
        })
    }
}

module.exports = {
    getMessage,
    addNewMessage
}