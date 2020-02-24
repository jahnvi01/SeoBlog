const {Blog}=require('../../db/blog')
const {category}=require('../../db/category')
const {tag}=require('../../db/tags')
const formidable=require('formidable')
const slugify=require('slugify')
const stripHtml=require('string-strip-html');
const _=require('lodash')
const fs = require('fs');
const shortId=require('shortid')

exports.create=(req,res)=>{
const form=formidable.IncomingForm()
form.keepExtensions=true
form.parse(req,(err,fields,files)=>{
    if(err){
        return res.status(400).json({error:"Image could not be uploaded"})
    }
    const {title,tags,body,categories}=fields
   
 
   const slug = slugify(title).toLowerCase();
  const mtitle = `${title} seoBlog`;
    const mdesc = stripHtml(body.substring(0, 160));
const postedBy = req.user._id;
  let photo
//    if(files.photo)
//    {
//        if(files.photo.size>10000000)
//        {
//         return res.status(400).json({error:"Image should be less than 1MB"})
//        }
//        Console.log("1hii")
//     photo={data:"",contentType:""}
//       photo.data=fs.readFileSync(files.photo.path)
//      photo.contentType=files.photo.type
//    }
   console.log("1hii")
   let blog = new Blog({title,body,slug,mtitle,mdesc,postedBy});
   console.log("1hii")
    blog.save((err,result)=>{
        if(err){
            return res.status(400).json({error:err})
        }
     return res.json(result)
    })

//    blog.save()
//     .then(newblog=>{
//         res.json(newblog);
//     })


})

    };


   