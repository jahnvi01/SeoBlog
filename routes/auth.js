const express=require("express")
const router=express.Router()
const { signup }=require('./controllers/auth-function') 
router.get("/",signup)



module.exports=router