const mongoose = require("mongoose");

const MOschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    institution:{
        type:String,
        required:true
    },
    total:{
        type:String,
        required:true
    },
    paid:{
        type:String,
        required:true
    },
    selected:{
        type:Boolean,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    tshirt:{
        type:String,
        required:true
    },
    key:{
        type:String,
        required:true,
        unique:true
    }
})

const MathOlympiad = mongoose.model("MathOlympiad",MOschema);
module.exports = MathOlympiad