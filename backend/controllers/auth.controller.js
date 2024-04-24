const User = require("../models/user.model")

const login = async (req, res) => {
    const {email,password} = req.body

    try{
        token = await User.matchPasswordAndGenerateToken(email,password)
        res.cookie("token", token, {
            maxAge: 15 * 24 * 60 * 60 * 1000, 
            httpOnly: true, 
            sameSite: "strict"
            // secure: process.env.NODE_ENV !== "development",
        });
        res.status(200).json({
            message:"Successfully logged in"
        })
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            error: "password not match",
        })
    }
}


const signup = async (req, res) => {
    const { fullName, email, password, profileImg } = req.body
    try{
        const user = await User.create({
            fullName, email, password, profileImg
        })
        
        res.status(200).json({
            message:"successfully created account",
            data: user
        })
    }
    catch(err){
        console.log("Getting error in signup",err)
        res.status(400).json({
            error:"User already exist"
        })
    }
}

const logout = (req, res) => {

}


module.exports = {
    login,
    signup,
    logout
}