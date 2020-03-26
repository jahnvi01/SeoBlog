const express=require("express")
const router=express.Router()
const { signup, signin,signout,requireSignin, forgotPassword, resetPassword }=require('./controllers/auth-function') 
const {runValidation}=require('./validators')
const {userSignupValidator,userSigninValidator,    forgotPasswordValidator,
    resetPasswordValidator}=require('./validators/auth-validator')
router.post("/signup",signup);
router.post("/signin",signin);
router.get('/signout', signout);
router.put('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);

router.get("/test",requireSignin,(req,res)=>{
    res.json({message:req.user})
})

module.exports=router