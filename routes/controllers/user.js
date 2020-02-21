const {users}=require('../../db/db')
exports.read=(req,res)=>{
 
    const id=req.user._id
    
    users.findById({_id:id}).exec((err,user)=>{
        if(err||!user){
            return res.status(400).json({
                error:"user not found"
            })
        }
     
         req.profile=user
       
         req.profile.hashed_password=undefined;
         return res.json(req.profile)
        //next()
    })
}