// const mongoose=require("mongoose")

// const Order=mongoose.model("Order",new mongoose.Schema({
//     image:String,
//     title:String,
//     price:Number,
//     desc:String,
//     brand:String
// }))

// module.exports=Order






const mongoose = require("mongoose");

const Order = mongoose.model("Order", new mongoose.Schema({
    customerName: String,
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pizza' // Assuming you have a Pizza model
        }
    ],
    totalPrice: Number,
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Delivered'],
        // default: ['Pending', 'Confirmed', 'Delivered'],
    }
}));

module.exports = Order;
