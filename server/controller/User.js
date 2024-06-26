const User = require('../model/User')
const bcrypt=require('bcryptjs')

const register = async (req,res)=>{
    try{
        const user=new User({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
        })
        user.password=await bcrypt.hash(user.password, 10)
        const user1=await user.save()
        res.send("Sign up done successfully")
    }
    catch(error){
        res.status(500).send(error)
    }
}

const log= async(req,res)=>{
    try{
        const email=req.body.email
        const password=req.body.password

        const user=await User.findOne({email:email})
        if(user){
            const validpassword= await bcrypt.compare(password, user.password)
            if(validpassword){
                return res.send("Correct password")
            }else{
                return res.send("Incorrect")
            }
        }
        else{
            return res.status(201).send("User not found")
        }

    }
    catch(error){
        res.status(500).send(error)
    }
}

module.exports={register,log}