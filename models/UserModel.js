const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser = require("body-parser")
const bcrypt = require('bcryptjs')

app.use(bodyParser.urlencoded({ extended: true }));


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    isAdmin:{
        type:Boolean,
        required:[true,"admin is required"],
        default:false
    }
},{timestamps:true})

userSchema.methods.matchPassword=async  function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}

//middleware for password
userSchema.pre('save',async function(next){
    const salt=await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt)
})

const User=mongoose.model('User',userSchema)

module.exports=User;