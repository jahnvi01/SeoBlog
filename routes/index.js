const express=require("express")
const router=express.Router()
const { create,list,listAllBlogsCategoriesTags,remove,update,read,photo,listRelated }=require('./controllers/blog-function') 
const { requireSignin,adminMiddleware }=require('./controllers/auth-function')
router.post("/blog",requireSignin,adminMiddleware,create)
router.get("/blogs",list)
router.post("/blogs-categories-tags",listAllBlogsCategoriesTags)
router.get('/blog/:slug',read)
router.delete('blog/:slug',remove)
router.put('/blog/:slug',requireSignin,adminMiddleware,update)
router.get('/blog/photo/:slug', photo);
router.post('/blogs/related',listRelated)
module.exports=router
