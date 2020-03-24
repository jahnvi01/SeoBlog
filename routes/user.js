const express=require("express")
const router=express.Router()
const {authMiddleware,requireSignin }=require('./controllers/auth-function') 
const {read,publicProfile,update, photo } =require('./controllers/user')

router.get("/profile",requireSignin,read)
router.get('/:username', publicProfile);
router.put('/update', requireSignin, authMiddleware, update);
router.get('/photo/:username', photo);
module.exports=router
