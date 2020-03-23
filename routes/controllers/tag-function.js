const {tag}=require('../../db/tags')
const slugify=require('slugify')
const {Blog}=require('../../db/blog')
exports.create=(req,res)=>{
      const {name}=req.body;
  let slug=slugify(name).toLowerCase(); 
tag.findOne({name}).exec((err,cat)=>{
    if(cat){
        return res.status(400).json({
            error:"tag already exists"
        })
    }
    else{
    
        let Newtag=tag({name,slug})
        Newtag.save((error,data)=>{
            if(error){
                return res.status(400).json({error:error})
            }
            res.json(data)
        })     
    }
    
    })


};



exports.list=(req,res)=>{
tag.find({}).exec((err,data)=>{
    if(err){
        return res.status(400).json({error:err})
    }
    res.json(data)
})

};



exports.read = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    tag.findOne({ slug }).exec((err, tag) => {
        if (err) {
            return res.status(400).json({
                error: 'Tag not found'
            });
        }
        // res.json(tag);
        Blog.find({ tags: tag })
        .populate('categories', '_id name slug')
    .populate('tags', '_id name slug')
    .populate('postedBy', '_id name username profile')
        .select('_id title body slug mtitle mdesc categories tags postedBy createdAt updatedAt')
     .exec((err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: err
                    });
                }
                res.json({ tag: tag, blogs: data });
            });
    });
};


exports.remove=(req,res)=>{
    const slug=req.params.slug.toLowerCase()
    tag.findOneAndRemove({slug}).exec((err,data)=>{
        if(err){
            return res.status(400).json({error:err})
        }
        res.json({message:"tag deleted"})
    })
    
    };