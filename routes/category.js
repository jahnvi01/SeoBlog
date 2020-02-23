const express=require("express")
const router=express.Router()
const { requireSignin,adminMiddleware }=require('./controllers/auth-function') 
const { create,list,remove,read }=require('./controllers/category-function') 
const {runValidation}=require('./validators')
const {categoryCreateValidator}=require('./validators/category-validator')
router.post("/category",categoryCreateValidator,runValidation,requireSignin,adminMiddleware,create);
router.get("/category/:slug",read);
router.get("/categories",list);
router.delete("/:slug",requireSignin,adminMiddleware,remove);
module.exports=router