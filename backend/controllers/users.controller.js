const User = require("../models/user.model")

async function getAllUsers(req,res){
    const loggedInUserId = req.user
    try{
        const users = await User.find({_id:{ $ne: loggedInUserId}})
        res.status(200).json({
            users
        })
    }
    catch(err){
        console.log("getting error in fetching all users",err)
        res.status(400).json({
            error:"Getting error in fetching all users"
        })
    }
}

module.exports = {
    getAllUsers
}