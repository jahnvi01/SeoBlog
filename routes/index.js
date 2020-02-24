const express=require("express")
const router=express.Router()
const { create }=require('./controllers/blog-function') 
const { requireSignin,adminMiddleware }=require('./controllers/auth-function')
router.post("/blog",requireSignin,adminMiddleware,create)



module.exports=router
