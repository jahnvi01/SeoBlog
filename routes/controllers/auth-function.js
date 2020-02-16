const {users}=require('../../db/db')
const shortId=require('shortid')
exports.signup=(req,res)=>{
    let username,profile
    error:"user already exists"
    const {name,email,password}=req.body;
    console.log(name+email+password)
    users.findOne(email).exec((err,user)=>{
if(user){
    return res.status(400).json({
    })
}
username=shortId.generate()
profile=`${process.env.CLIENT_URL}/profile/${username}`
//console.log(username+profile)
let newuser=new users({name,email,password,username,profile})
//console.log(newuser) 
// newuser.save((err,success)=>{
//    if (err){
//        return res.status(400).json({
//            error:err
//        })
//    }
//    res.json({
//       user:success
//    })
//    })

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

    }