const express=require("express")
const router=express.Router()
const { create,list,listAllBlogsCategoriesTags,remove,update,read,photo,listRelated,listSearch,listByUser }=require('./controllers/blog-function') 
const { requireSignin,adminMiddleware,authMiddleware,canUpdateDeleteBlog }=require('./controllers/auth-function')
router.post("/blog",requireSignin,adminMiddleware,create)
router.get("/blogs",list)
router.post("/blogs-categories-tags",listAllBlogsCategoriesTags)
router.get('/blog/:slug',read)
router.delete('blog/:slug',remove)
router.put('/blog/:slug',requireSignin,adminMiddleware,update)
router.get('/blog/photo/:slug', photo);
router.post('/blogs/related',listRelated)
router.get('/blogs/search', listSearch);

//user
router.get("/authuser/:username/blogs",listByUser)
router.post("/authuser/blog",requireSignin,create)
router.delete('/authuser/blog/:slug',remove)
router.put('/authuser/blog/:slug',requireSignin,update)
module.exports=router