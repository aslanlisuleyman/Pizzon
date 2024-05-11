// const EmployeeSchema=require("../models/Employee")

// const userController={
//     getAll:async(req,res)=>{
//         try{
//             const products=await EmployeeSchema.find()
//             res.send(products)
//         }
//         catch(error){
//             res.status(404).send("error")
//         }
//     },
//     getById:async(req,res)=>{
//         try{
//             const {id}=req.params
//         const target=await EmployeeSchema.findById(id)
//         res.status(200).send(target)
//         }
//         catch(error){
//             res.status(404).send("error")
//         }
        
//     },
//     delete:async(req,res)=>{
//         try{
//              const {id}=req.params
//         await EmployeeSchema.findByIdAndDelete(id)
//         const prod=await EmployeeSchema.find({})
//         res.status(200).send(prod)
//         }
//         catch(error){
//             res.status(404).send("error")
//         }
//     },
//     add:async(req,res)=>{
//         try{
//             const{image,title,price,desc,brand}=req.body
//             const newProduct= new EmployeeSchema({image,title,price,desc,brand})
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
//             await EmployeeSchema.findByIdAndUpdate(id,{image,title,price,desc,brand})
//             res.status(200).send("succes")
//         }
//         catch(error){
//             res.status(404).send("error")
//         }
//     }
// }

// module.exports=userController