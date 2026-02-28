const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    list:[{
            type:mongoose.type.ObjectId,
            ref:"User",
        },
    ],
});

module.exports = mongoose.model("list" ,listSchema )