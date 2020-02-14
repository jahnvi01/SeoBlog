const express=require("express")
const router=express.Router()
const { start }=require('./controllers/functions') 
router.get("/",start)



module.exports=router