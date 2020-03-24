const {users}=require('../../db/db')
const {Blog} = require('../../db/blog');
const _ = require('lodash');
const formidable = require('formidable');
const fs = require('fs');
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


exports.publicProfile = (req, res) => {
    let username = req.params.username;
    let user;
    let blogs;

    users.findOne({ username }).exec((err, userFromDB) => {
        if (err || !userFromDB) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        user = userFromDB;
        let userId = user._id;
        Blog.find({ postedBy: userId })
            .populate('categories', '_id name slug')
            .populate('tags', '_id name slug')
            .populate('postedBy', '_id name')
            .limit(10)
            .select('_id title slug excerpt categories tags postedBy createdAt updatedAt')
            .exec((err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                user.photo = undefined;
                res.json({
                    user,
                    blogs: data
                });
            });
    });
};


exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtension = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Photo could not be uploaded'
            });
        }
        let user = req.profile;
        user = _.extend(user, fields);

        if (fields.password && fields.password.length < 6) {
            return res.status(400).json({
                error: 'Password should be min 6 characters long'
            });
        }

        if (files.photo) {
            if (files.photo.size > 10000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb'
                });
            }
            user.photo.data = fs.readFileSync(files.photo.path);
            user.photo.contentType = files.photo.type;
        }

        user.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: 'All filds required'
                });
            }
            user.hashed_password = undefined;
            res.json(user);
        });
    });
};
exports.photo = (req, res) => {
    const username = req.params.username;
    users.findOne({ username }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        if (user.photo.data) {
            res.set('Content-Type', user.photo.contentType);
            return res.send(user.photo.data);
        }
    });
};