const express = require('express');
const cors = require("cors")
const app = express()
require('dotenv').config()
const connect = require('./config/db')
const PORT = process.env.PORT ;
const cookieParser = require("cookie-parser")
const userRouter = require("./routes/userRoute")
const calculateRouter = require("./routes/calculateRoute")

app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({origin:true,credentials:true}))

app.post("/user/signup",userRouter.Signup)
app.post("/user/login",userRouter.Login)
app.get("/users",userRouter.UserProfiles)
app.get("/calculate",calculateRouter.Returns)

app.get("/",(req,res)=>res.send("HELLO"))

app.listen(PORT, async()=>{

    await connect()
    console.log(`Server started on http://localhost:${PORT}`);
})