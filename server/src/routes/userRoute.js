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
            res.send({message:"Existing user, login to proceed",status:false})
        }
        else{
            let newUser = new UserModel({
                name,
                email,
                password:hashedPassword
            })
            await newUser.save()
            res.status(200).send({message:"Signup success",name,email,status:true})
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
            res.send({message:"User not found, please signup",status:false})
        }
        else{
            if(user && await argon.verify(user.password,password)){
                let token= jwt.sign({name:user.name,email:user.email},process.env.SECRET_TOKEN_KEY,{
                    expiresIn:"7 days"
                })
                let refreshToken = jwt.sign({email:user.email,name:user.name},process.env.SECRET_REFRESH_KEY,{
                    expiresIn:"28 days"
                })

                let data= jwt.decode(token)
               
                res.status(200)
                .cookie("token",token)
                .cookie("refresh token",refreshToken)
                .send({message:"Login successfull",token,refreshToken,data,status:true})
              
            }
        }
    } catch (error) {
        res.send({message:"Login failed",status:false})
    }

} 

const UserProfiles = async(req,res) =>{
    const {email} = req.body;
    const token  = req.cookies.token
    console.log(token);
    const users = await UserModel.findOne({email})
    try {
        let verify = jwt.decode(token)
        if(verify.email == email){
             
             res.status(200).send(users)
        } 
        else{
            res.send({"message":"Session expired"})
        
        }
      
    } catch (error) {
        res.send({"message":"Something went wrong"})
    }
 
}

module.exports = {
    Signup,
    Login,
    UserProfiles
}