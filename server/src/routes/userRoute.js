const UserModel = require("../models/userModel")
const jwt = require('jsonwebtoken')
const express = require('express');
const argon = require('argon2')

const Signup  = async(req,res) =>{
    const {name,email,password} = req.body;
    const hashedPassword = await argon.hash(password)
    const existinguser = await UserModel.findOne({email})
    try {
        if(existinguser){
            res.send({message:"Existing user, login to proceed"})
        }
        else{
            let newUser = new UserModel({
                name,
                email,
                password:hashedPassword
            })
            await newUser.save()
            res.status(200).send({message:"Signup success",name,email})
        }
    } catch (error) {
    res.send({message:error})
    }
}

const findUser = async(data) =>{

    let user  =await UserModel.findOne({email:data.email});
    if(user){
        return user
    }
    else{
        return false
    }
}

const validateUser =async (data) =>{
     const {email,password}= data;
     let user = await findUser({email,password})
     try {
         if(user && await argon.verify(user.password,password)){
       
        
        return user
    } 
    else{
        return false
    }
   } catch (error) {
        return error
   }
}

const Login = async(req, res) => {

    const {email,password} = req.body;
    let user = await validateUser({email,password})
   
    try {
        if(!user){
            res.send({message:"User not found, please signup"})
        }
        else{
            if(user && await argon.verify(user.password,password)){
                let token= jwt.sign({name:user.name,email:user.email},process.env.SECRET_TOKEN_KEY,{
                    expiresIn:"7 days"
                })
                let refreshToken = jwt.sign({email:user.email,name:user.name},process.env.SECRET_REFRESH_KEY,{
                    expiresIn:"28 days"
                })
                res.status(200).send({message:"Login successfull",token,refreshToken})
            }
        }
    } catch (error) {
        res.send({message:"Login failed"})
    }

} 

const UserProfiles = async(req,res) =>{
    const {email} = req.body;
    const token  = req.headers["authorization"]
   
    try {
        let verify = jwt.decode(token)
        if(verify.email == email){
              const users = await UserModel.findOne({email})
             res.status(200).send(users)
        } 
        else{
            res.send({"message":"Session expired"})
        
        }
      
    } catch (error) {
        res.send({"message":error})
    }
 
}

module.exports = {
    Signup,
    Login,
    UserProfiles
}