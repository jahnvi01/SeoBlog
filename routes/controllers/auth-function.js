const {users}=require('../../db/db')
const shortId=require('shortid')
const jwt=require('jsonwebtoken')
const expressJwt=require('express-jwt')
exports.signup=(req,res)=>{
    let username,profile
    
    const {name,email,password}=req.body;
    users.findOne({email}).exec((err,user)=>{
if(user){
    return res.status(400).json({
        error:"user already exists"
    })
}
else{
username=shortId.generate()
profile=`${process.env.CLIENT_URL}/profile/${username}`
let newuser=new users({name,email,password,username,profile})
newuser.save()
.then(user=>{
    res.json({
            email: user.email,
            username: user.username,
            password: user.password,
            name:user.name, 
            profile:user.profile
    });
})

}

})
    
    };


    exports.signin=(req,res)=>{
       
        const {email,password}=req.body;
        users.findOne({email}).exec((err,user)=>{
    if(err||!user){
        return res.status(400).json({
            error:"No user exists with this email"
        })
    }
  
    if(!user.authenticate(password)){
        return res.status(400).json({
            error:"Enter valid password"
        })
    }
const token=jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
    res.cookie('token',token,{expiresIn:'1d'})
    console.log(user);
    return res.json({
        token,
        user
    })
    })
  // res.json({msg:"hi"}) 
        }

   exports.signout=(req,res)=>{
       res.clearCookie('token');
       res.json({message:"Signout success"})
   };


   exports.requireSignin= expressJwt({
    secret: process.env.JWT_SECRET
});

exports.authMiddleware=(req,res,next)=>{
    // console.log(req.user)
    // const id=req.user._id
    // console.log("id")
    // users.findById({_id:id}).exec((err,user)=>{
    //     if(err||!user){
    //         return res.status(400).json({
    //             error:"user not found"
    //         })
    //     }
    //     console.log(user)
    //      req.profile=user
    //      console.log("read")
    //      req.profile.hashed_password=undefined;
    //      return res.json(req.profile)
    //     //next()
    // })
}

exports.adminMiddleware=(req,res,next)=>{
    const id=req.user._id
    users.findById({_id:id}).exec((err,user)=>{
        if(err||!user){
            return res.status(400).json({
                error:"user not found"
            })
        }
       
        if(user.role!==1){
            return res.status(400).json({
                error:"admin panel access denied"
            })
        }

        req.profile=user
        next()
    })
}
