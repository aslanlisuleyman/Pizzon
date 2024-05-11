const mongoose=require("mongoose")

const All=mongoose.model("All",new mongoose.Schema({
    image:String,
    title:String,
    desc:String,
    brand:String
}))

module.exports=All