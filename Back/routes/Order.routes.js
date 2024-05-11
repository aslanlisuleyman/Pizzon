const express=require("express")
const router=express.Router()

const OrderController=require("../controller/Order.controller")


router.get("/",OrderController.getAll)
router.get("/:id",OrderController.getById)
router.delete("/:id",OrderController.delete)
router.post("/",OrderController.add)
router.put("/:id",OrderController.edit)

module.exports=router
