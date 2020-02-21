const {category}=require('../../db/category')
const slugify=require('slugify')
exports.create=(req,res)=>{
  
    
    const {name}=req.body;
  let slug=slugify(name).toLowerCase(); 
let Newcategory=category({name,slug})
Newcategory.save((error,data)=>{
    if(error){
        return res.status(400).json({error:error})
    }
    res.json(data)
})    
};



