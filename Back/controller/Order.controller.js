// const Order=require("../models/Order.model")

// const OrderController={
//     getAll:async(req,res)=>{
//         try{
//             const products=await Order.find()
//             res.send(products)
//         }
//         catch(error){
//             res.status(404).send("error")
//         }
//     },
//     getById:async(req,res)=>{
//         try{
//             const {id}=req.params
//         const target=await Order.findById(id)
//         res.status(200).send(target)
//         }
//         catch(error){
//             res.status(404).send("error")
//         }
        
//     },
//     delete:async(req,res)=>{
//         try{
//              const {id}=req.params
//         await Order.findByIdAndDelete(id)
//         const prod=await Order.find({})
//         res.status(200).send(prod)
//         }
//         catch(error){
//             res.status(404).send("error")
//         }
//     },
//     add:async(req,res)=>{
//         try{
//             const{image,title,price,desc,brand}=req.body
//             const newProduct= new Order({image,title,price,desc,brand})
//             await newProduct.save()
//             res.status(201).send(newProduct)
//         }
//         catch(error){
//             res.status(404).send("error")
//         }
        
//     },
//     edit:async(req,res)=>{
//         try{
//             const{id}=req.params
//             const{image,title,price,desc,brand}=req.body
//             await Order.findByIdAndUpdate(id,{image,title,price,desc,brand})
//             res.status(200).send("succes")
//         }
//         catch(error){
//             res.status(404).send("error")
//         }
//     }
// }

// module.exports=OrderController






const Order = require("../models/Order.model");

const OrderController = {
    getAll: async (req, res) => {
        try {
            const orders = await Order.find().populate('items');
            res.send(orders);
        } catch (error) {
            res.status(404).send("Error");
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const order = await Order.findById(id).populate('items');
            res.status(200).send(order);
        } catch (error) {
            res.status(404).send("Error");
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await Order.findByIdAndDelete(id);
            const orders = await Order.find({});
            res.status(200).send(orders);
        } catch (error) {
            res.status(404).send("Error");
        }
    },

    add: async (req, res) => {
        try {
            const { customerName, items, totalPrice, status } = req.body;
    
            // Assuming items contain IDs of Pizza documents
            const newOrder = new Order({ customerName, items, totalPrice, status });
    
            // Save the new order
            await newOrder.save();
    
            res.status(201).send(newOrder);
        } catch (error) {
            console.error(error);
            res.status(500).send("Error creating order");
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const { customerName, items, totalPrice, status } = req.body;
            await Order.findByIdAndUpdate(id, { customerName, items, totalPrice, status });
            res.status(200).send("Success");
        } catch (error) {
            res.status(404).send("Error");
        }
    }
};

module.exports = OrderController;
