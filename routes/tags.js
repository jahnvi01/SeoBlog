const express=require("express")
const router=express.Router()
const { requireSignin,adminMiddleware }=require('./controllers/auth-function') 
const { create,list,remove,read }=require('./controllers/tag-function') 
const {runValidation}=require('./validators')
const {tagCreateValidator}=require('./validators/tag-validator')
router.post("/tag",tagCreateValidator,runValidation,requireSignin,adminMiddleware,create);
router.get("/tag/:slug",requireSignin,adminMiddleware,read);
router.get("/tags",requireSignin,adminMiddleware,list);
router.delete("/rm/:slug",requireSignin,adminMiddleware,remove);
module.exports=router;