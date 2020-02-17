const {users}=require('../../db/db')
const shortId=require('shortid')
const jwt=require('jsonwebtoken')
const expressJwt=require('express-jwt')
exports.signup=(req,res)=>{
    let username,profile
    
    const {name,email,password}=req.body;
    users.findOne(email).exec((err,user)=>{
if(user){
    return res.status(400).json({
        error:"user already exists"
    })
}
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
   }
   exports.requireSignin= expressJwt({
    secret: process.env.JWT_SECRET
});