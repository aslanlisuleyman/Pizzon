const PaymentController=require("../controller/PaymentControllers")
const express=require("express")
const router=express.Router()


router.post("/",PaymentController.payment)


module.exports=router
