const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
require('dotenv').config()

const port=process.env.port
const url=process.env.url
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
        console.log('connected')
      }).catch((err)=>{
        console.log(err)
})

const userRouter = require('./routes/User')
app.use('/user',userRouter)

app.listen(port,()=>{
    console.log("Running on port 8086")
  })

module.exports=app