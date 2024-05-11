const mongoose=require("mongoose")

const Pizza=mongoose.model("Pizza",new mongoose.Schema({
    image:String,
    title:String,
    price:Number,
    desc:String,
    brand:String
}))

module.exports=Pizza