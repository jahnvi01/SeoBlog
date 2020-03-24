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
    var {title,tags,body,categories}=fields
    console.log(body)
    
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
    console.log(title+body)
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
    console.log("tc"+tags+categories)
    let arrayOfCategories = categories && categories.split(',');
    let arrayOfTags = tags && tags.split(',');
    console.log("tc"+arrayOfCategories+arrayOfTags)
    categories=arrayOfCategories
    tags=arrayOfTags
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

   let blog = new Blog({title,body,slug,excerpt,mtitle,mdesc,postedBy,photo,categories,tags});

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


   exports.list=(req,res)=>{
Blog.find({})
.populate('categories', '_id name slug')
.populate('tags', '_id name slug')
.populate('postedBy', '_id name username profile')
.select('_id title slug excerpt categories tags postedBy createdAt updatedAt')
.exec((err, data) => {
    if (err) {
        return res.json({
            error:err
        });
    }
    res.json(data);
});
   }
   exports.listAllBlogsCategoriesTags = (req, res) => {
    let limit = req.body.limit ? parseInt(req.body.limit) : 10;
    let skip = req.body.skip ? parseInt(req.body.skip) : 0;

    let blogs;
    let categories;
    let tags;

    Blog.find({})
        .populate('categories', '_id name slug')
        .populate('tags', '_id name slug')
        .populate('postedBy', '_id name username profile')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select('_id title slug excerpt categories tags postedBy createdAt updatedAt')
        .exec((err, data) => {
            if (err) {
                return res.json({
                    error: err
                });
            }
            blogs = data; // blogs
            // get all categories
            category.find({}).exec((err, c) => {
                if (err) {
                    return res.json({
                        error: err
                    });
                }
                categories = c; // categories
                // get all tags
                tag.find({}).exec((err, t) => {
                    if (err) {
                        return res.json({
                            error: err
                        });
                    }
                    tags = t;
                    // return all blogs categories tags
                    
                    res.json({ blogs, categories, tags, size: blogs.length });
                });
            });
        });
};

exports.read = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Blog.findOne({ slug })
    .populate('categories', '_id name slug')
    .populate('tags', '_id name slug')
    .populate('postedBy', '_id name username profile')
        .select('_id title body slug mtitle mdesc categories tags postedBy createdAt updatedAt')
        .exec((err, data) => {
            if (err) {
                return res.json({
                    error: err
                });
            }
            res.json(data);
        });
};

exports.remove = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Blog.findOneAndRemove({ slug }).exec((err, data) => {
        if (err) {
            return res.json({
                error: err
            });
        }
        res.json({
            message: 'Blog deleted successfully'
        });
    });
};

// exports.update=(req,res)=>{

// }
exports.update = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Blog.findOne({ slug }).exec((err, oldBlog) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }

        let form = new formidable.IncomingForm();
        form.keepExtensions = true;

        form.parse(req, (err, fields, files) => {
            if (err) {
                return res.status(400).json({
                    error: 'Image could not upload'
                });
            }

            let slugBeforeMerge = oldBlog.slug;
            oldBlog = _.merge(oldBlog, fields);
            oldBlog.slug = slugBeforeMerge;

            const { body, desc, categories, tags } = fields;

            if (body) {
                oldBlog.excerpt = smartTrim(body, 320, ' ', ' ...');
                oldBlog.desc = stripHtml(body.substring(0, 160));
            }

            if (categories) {
                oldBlog.categories = categories.split(',');
            }

            if (tags) {
                oldBlog.tags = tags.split(',');
            }

            if (files.photo) {
                if (files.photo.size > 10000000) {
                    return res.status(400).json({
                        error: 'Image should be less then 1mb in size'
                    });
                }
                oldBlog.photo.data = fs.readFileSync(files.photo.path);
                oldBlog.photo.contentType = files.photo.type;
            }

            oldBlog.save((err, result) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                // result.photo = undefined;
              return res.json(result);
            });
        });
    });
};

exports.photo = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Blog.findOne({ slug })
        .select('photo')
        .exec((err, blog) => {
            if (err || !blog) {
                return res.status(400).json({
                    error: err
                });
            }
            res.set('Content-Type', blog.photo.contentType);
            return res.send(blog.photo.data);
        });
    };

    exports.listRelated = (req, res) => {
        // console.log(req.body.blog);
        let limit = req.body.limit ? parseInt(req.body.limit) : 3;
        const { _id, categories } = req.body.blog;
    
        Blog.find({ _id: { $ne: _id }, categories: { $in: categories } })
            .limit(limit)
            .populate('postedBy', '_id name profile')
            .select('title slug excerpt postedBy createdAt updatedAt')
            .exec((err, blogs) => {
                if (err) {
                    return res.status(400).json({
                        error: 'Blogs not found'
                    });
                }
              //  console.log(blogs)
             return res.json(blogs);
            });
    };

    exports.listSearch = (req, res) => {
        const { search } = req.query;
        if (search) {
            Blog.find(
                {
                    $or: [{ title: { $regex: search, $options: 'i' } }, { body: { $regex: search, $options: 'i' } }]
                },
                (err, blogs) => {
                    if (err) {
                        return res.status(400).json({
                            error: err
                        });
                    }
                    res.json(blogs);
                }
            ).select('-photo -body');
        }
    };