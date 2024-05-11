const All=require("../models/All.model")

const AllController={
    getAll:async(req,res)=>{
        try{
            const products=await All.find()
            res.send(products)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
        const target=await All.findById(id)
        res.status(200).send(target)
        }
        catch(error){
            res.status(404).send("error")
        }
        
    },
    delete:async(req,res)=>{
        try{
             const {id}=req.params
        await All.findByIdAndDelete(id)
        const prod=await All.find({})
        res.status(200).send(prod)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    add:async(req,res)=>{
        try{
            const{image,title,desc, brand}=req.body
            const newProduct= new All({image,title,desc, brand})
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
            const{image,title,desc, brand}=req.body
            await All.findByIdAndUpdate(id,{image,title,desc, brand})
            res.status(200).send("succes")
        }
        catch(error){
            res.status(404).send("error")
        }
    }
}

module.exports=AllController