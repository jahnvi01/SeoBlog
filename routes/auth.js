const express=require("express")
const router=express.Router()
const { signup, signin }=require('./controllers/auth-function') 
const {runValidation}=require('./validators')
const {userSignupValidator,userSigninValidator}=require('./validators/auth-validator')
router.post("/signup",userSignupValidator,runValidation,signup);
router.post("/signin",signin);


module.exports=router