const {category}=require('../../db/category')
const slugify=require('slugify')
const {Blog}=require('../../db/blog')
exports.create=(req,res)=>{
      const {name}=req.body;
  let slug=slugify(name).toLowerCase(); 
category.findOne({name}).exec((err,cat)=>{
    if(cat){
        return res.status(400).json({
            error:"category already exists"
        })
    }
    else{
    
        let Newcategory=category({name,slug})
        Newcategory.save((error,data)=>{
            if(error){
                return res.status(400).json({error:error})
            }
            res.json(data)
        })     
    }
    
    })


};



exports.list=(req,res)=>{
category.find({}).exec((err,data)=>{
    if(err){
        return res.status(400).json({error:err})
    }
    res.json(data)
})

};

exports.read = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    category.findOne({ slug }).exec((err, category) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        // res.json(category);
        Blog.find({ categories: category })
        .populate('categories', '_id name slug')
        .populate('tags', '_id name slug')
        .populate('postedBy', '_id name username profile')
            .select('_id title body slug mtitle mdesc categories tags postedBy createdAt updatedAt')
                .exec((err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
              return res.json({ category: category, blogs: data });
            });
    });
};


exports.remove=(req,res)=>{
    const slug=req.params.slug.toLowerCase()
    category.findOneAndRemove({slug}).exec((err,data)=>{
        if(err){
            return res.status(400).json({error:err})
        }
        res.json({message:"category deleted"})
    })
    
    };