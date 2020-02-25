const {Blog}=require('../../db/blog')
const {category}=require('../../db/category')
const {tag}=require('../../db/tags')
const formidable=require('formidable')
const slugify=require('slugify')
const stripHtml=require('string-strip-html');
const _=require('lodash')
const fs = require('fs');
const shortId=require('shortid')
const { smartTrim } = require('../helpers/blog');
exports.create=(req,res)=>{
const form=formidable.IncomingForm()
form.keepExtensions=true
form.parse(req,(err,fields,files)=>{
    if(err){
        return res.status(400).json({error:"Image could not be uploaded"})
    }
    const {title,tags,body,categories}=fields
 
    
    if (!title || !title.length) {
        return res.status(400).json({
            error: 'title is required'
        });
    }

    if (!body || body.length < 200) {
        return res.status(400).json({
            error: 'Content is too short'
        });
    }

    if (!categories || categories.length === 0) {
        return res.status(400).json({
            error: 'At least one category is required'
        });
    }

    if (!tags || tags.length === 0) {
        return res.status(400).json({
            error: 'At least one tag is required'
        });
    }

    let arrayOfCategories = categories && categories.split(',');
    let arrayOfTags = tags && tags.split(',');
   const excerpt = smartTrim(body, 320, ' ', ' ...');
   const slug = slugify(title).toLowerCase();
  const mtitle = `${title} seoBlog`;
    const mdesc = stripHtml(body.substring(0, 160));
const postedBy = req.user._id;
  let photo
   if(files.photo)
   {
       if(files.photo.size>10000000)
       {
        return res.status(400).json({error:"Image should be less than 1MB"})
       }
 
    photo={data:"",contentType:""}

     photo.data=fs.readFileSync(files.photo.path)
     photo.contentType=files.photo.type
   }

   let blog = new Blog({title,body,slug,excerpt,mtitle,mdesc,postedBy,photo,arrayOfCategories,arrayOfTags});

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


   