const {users}=require('../../db/db')
const {Blog}=require('../../db/blog')
const shortId=require('shortid')
const jwt=require('jsonwebtoken')
const expressJwt=require('express-jwt')
const _ = require('lodash');
const sgMail = require('@sendgrid/mail'); // SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
exports.canUpdateDeleteBlog = (req, res, next) => {
    const slug = req.params.slug.toLowerCase();
    Blog.findOne({ slug }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        console.log(req.profile)
        let authorizedUser = data.postedBy._id.toString() === req.profile._id.toString();
        if (!authorizedUser) {
            return res.status(400).json({
                error: 'You are not authorized'
            });
        }
        next();
    });
};
exports.authMiddleware=(req,res,next)=>{
    console.log(req.user)
    const id=req.user._id
    console.log("id")
    users.findById({_id:id}).exec((err,user)=>{
        if(err||!user){
            return res.status(400).json({
                error:"user not found"
            })
        }
        console.log(user)
         req.profile=user
         console.log("read")
         req.profile.hashed_password=undefined;
         return res.json(req.profile)
        //next()
    })
}

exports.adminMiddleware=(req,res,next)=>{
    const id=req.user._id
    console.log("admin")
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
exports.forgotPassword = (req, res) => {

    const { email } = req.body;

    users.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({
                error: 'User with that email does not exist'
            });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_RESET_PASSWORD, { expiresIn: '10m' });

        // email
        const emailData = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: `Password reset link`,
            html: `
            <p>Please use the following link to reset your password:</p>
            <p>${process.env.CLIENT_URL}/auth/password/reset/${token}</p>
            <hr />
            <p>This email may contain sensetive information</p>
            <p>https://seoblog.com</p>
        `
        };
        // populating the db > user > resetPasswordLink
        return user.updateOne({ resetPasswordLink: token }, (err, success) => {
            if (err) {
                return res.json({ error: err });
            } else {
                sgMail.send(emailData).then(sent => {
                    return res.json({
                        message: `Email has been sent to ${email}. Follow the instructions to reset your password. Link expires in 10min.`
                    });
                });
            }
        });
    });
};

exports.resetPassword = (req, res) => {
    const { resetPasswordLink, newPassword } = req.body;

    if (resetPasswordLink) {
        jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD, function(err, decoded) {
            if (err) {
                return res.status(401).json({
                    error: 'Expired link. Try again'
                });
            }
            users.findOne({ resetPasswordLink }, (err, user) => {
                if (err || !user) {
                    return res.status(401).json({
                        error: 'Something went wrong. Try later'
                    });
                }
                const updatedFields = {
                    password: newPassword,
                    resetPasswordLink: ''
                };

                user = _.extend(user, updatedFields);

                user.save((err, result) => {
                    if (err) {
                        return res.status(400).json({
                            error: errorHandler(err)
                        });
                    }
                    res.json({
                        message: `Great! Now you can login with your new password`
                    });
                });
            });
        });
    }
};