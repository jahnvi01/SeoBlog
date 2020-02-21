const express=require("express")
const router=express.Router()
const {authMiddleware,requireSignin }=require('./controllers/auth-function') 
const {read} =require('./controllers/user')

router.get("/profile",read)

module.exports=router