exports.signup=(req,res)=>{
    const {username,email,password}=req.body;
  res.json({
      username:username,
      email:email,
      password:password
  })
// res.json({msg:"hello"})
    }