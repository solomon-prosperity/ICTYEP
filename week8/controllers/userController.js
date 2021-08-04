const Users = require('../models/users');
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../models/users');


const signUp =  async (req , res) => {
    try {
        let { id , firstName , lastName , email , password} = req.body
        password = await bcrypt.hash(password , 10)
        const token = jwt.sign({id} , process.env.JWT_SECRET , {expiresIn: process.env.JWT_EXPIRES_IN })
        const newUser = { id : User.length + 1 , firstName , lastName , email , password}
        Users.push(newUser)

        res.status(200).json({
            success: true,
            token ,
            data: newUser
        })

    } catch (err) {
        res.status(500).json(err)
    }

}

const getUsers = (req , res) => {
    res.status(200).json({
        success: true,
        data: User
})
}

const signIn = (req , res) => {
    
}


module.exports = {
    signIn,
    signUp,
    getUsers
} 