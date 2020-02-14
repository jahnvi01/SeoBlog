const express=require("express")
const router=express.Router()
const { signup }=require('./controllers/auth-function') 
const {runValidation}=require('./validators')
const {userSignupValidator}=require('./validators/auth-validator')
router.post("/signup",userSignupValidator,runValidation,signup)



module.exports=router