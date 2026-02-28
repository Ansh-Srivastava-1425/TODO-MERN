const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
   email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    list:[{
        type:mongoose.type.ObjectId,
        ref:"list",
    },
],
})

module.exports = mongoose.model("User" , userSchema)