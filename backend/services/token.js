const JWT = require("jsonwebtoken")
require('dotenv').config()


const generateToken = (user) => {
    const payload = {
        email: user.email,
        id: user._id
    }
    const token = JWT.sign(payload,process.env.JWT_SECRET,{
        expiresIn: '2d'
    })
    return token
}

const verifyToken = (token) => {
    const payload = JWT.verify(token,process.env.JWT_SECRET)
    return payload
}


module.exports = {
    generateToken,
    verifyToken
}