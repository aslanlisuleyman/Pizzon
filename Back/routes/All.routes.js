const express=require("express")
const router=express.Router()

const AllController=require("../controller/All.controller")


router.get("/",AllController.getAll)
router.get("/:id",AllController.getById)
router.delete("/:id",AllController.delete)
router.post("/",AllController.add)
router.put("/:id",AllController.edit)

module.exports=router
