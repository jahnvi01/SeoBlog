const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
mongoose.set('debug',true);
mongoose.Promise=global.Promise;

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            index: true
        },
        body: {
            type: {},
            required: true,
            min: 200,
            max: 2000000
        },
        excerpt: {
            type: String,
            max: 1000
        },
        mtitle: {
            type: String
        },
        mdesc: {
            type: String
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        categories: [{ type: ObjectId, ref: 'category', required: true }],
        tags: [{ type: ObjectId, ref: 'tag', required: true }],
        postedBy: {
            type: ObjectId,
            ref: 'users'
        }
    },
    { timestamps: true }
);


const Blog= mongoose.model('Blog', blogSchema);
module.exports={Blog}