const Pizza=require("../models/Pizza.model")

const PizzaController={
    getAll:async(req,res)=>{
        try{
            const products=await Pizza.find()
            res.send(products)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
        const target=await Pizza.findById(id)
        res.status(200).send(target)
        }
        catch(error){
            res.status(404).send("error")
        }
        
    },
    delete:async(req,res)=>{
        try{
             const {id}=req.params
        await Pizza.findByIdAndDelete(id)
        const prod=await Pizza.find({})
        res.status(200).send(prod)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    add:async(req,res)=>{
        try{
            const{image,title,price,desc,brand}=req.body
            const newProduct= new Pizza({image,title,price,desc,brand})
            await newProduct.save()
            res.status(201).send(newProduct)
        }
        catch(error){
            res.status(404).send("error")
        }
        
    },
    edit:async(req,res)=>{
        try{
            const{id}=req.params
            const{image,title,price,desc,brand}=req.body
            await Pizza.findByIdAndUpdate(id,{image,title,price,desc,brand})
            res.status(200).send("succes")
        }
        catch(error){
            res.status(404).send("error")
        }
    }
}

module.exports=PizzaController