const express=require("express")
const router=express.Router()
const { signup, signin,signout,requireSignin }=require('./controllers/auth-function') 
const {runValidation}=require('./validators')
const {userSignupValidator,userSigninValidator}=require('./validators/auth-validator')
router.post("/signup",userSignupValidator,runValidation,signup);
router.post("/signin",signin);
router.get("/signout",signout)

router.get("/test",requireSignin,(req,res)=>{
    res.json({message:"accessed"})
})

module.exports=router