const express=require("express")
const router=express.Router()
const { signup, signin,signout,requireSignin,googleLogin, forgotPassword, resetPassword,preSignup }=require('./controllers/auth-function') 
const {runValidation}=require('./validators')
const {userSignupValidator,userSigninValidator,    forgotPasswordValidator,
    resetPasswordValidator}=require('./validators/auth-validator')
router.post("/signup",signup);
router.post("/signin",signin);
router.get('/signout', signout);
router.put('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);
router.post('/pre-signup', preSignup);
router.post('/google-login', googleLogin);

module.exports=router