const {tag}=require('../../db/tags')
const slugify=require('slugify')
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



exports.read=(req,res)=>{
    const slug=req.params.slug.toLowerCase()
    tag.find({slug}).exec((err,data)=>{
        if(err){
            return res.status(400).json({error:err})
        }
        res.json(data)
    })
    
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