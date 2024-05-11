const express=require("express")
const router=express.Router()

const PizzaController=require("../controller/Pizza.controller")


router.get("/",PizzaController.getAll)
router.get("/:id",PizzaController.getById)
router.delete("/:id",PizzaController.delete)
router.post("/",PizzaController.add)
router.put("/:id",PizzaController.edit)

module.exports=router
