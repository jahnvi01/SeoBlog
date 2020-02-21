const express=require("express")
const router=express.Router()
const { requireSignin,adminMiddleware }=require('./controllers/auth-function') 
const { create }=require('./controllers/category-function') 
const {runValidation}=require('./validators')
const {categoryCreateValidator}=require('./validators/category-validator')
router.post("/category",categoryCreateValidator,runValidation,requireSignin,adminMiddleware,create);

module.exports=router