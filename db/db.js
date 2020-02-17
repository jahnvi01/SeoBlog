var mongoose =require('mongoose');
const crypto=require('crypto')
mongoose.set('debug',true);
mongoose.Promise=global.Promise;

//'mongodb+srv://jahnvi:jahnvi001@cluster0-0uzok.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(process.env.DATABASE,{useUnifiedTopology: true,useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false})
.then(()=>console.log("db connected"))

 const Schema=mongoose.Schema;
 const userschema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    profile:{
        type:String,
        required:true  

    },
  hashed_password:{
        type:String,
        required:true
    },
salt:String,
about:{
    type:String,
    trim:true
},
role:{
    type:String,
    trim:true
},
photo:{
    data:Buffer,
    contentType:String
},
resetPasswordLink:{
    data:String,
    default:''
}
},{timestamp:true});
userschema.virtual('password')
.set(function(password){
    this._password=password
    this.salt=this.makeSalt()
    this.hashed_password=this.encryptPassword(password)
})
.get(function(){
    return this._password
})                                                                                                                                                                                                                                                                                                                                                                            
userschema.methods={
    authenticate:function(plainText){
return this.encryptPassword(plainText)==this.hashed_password;
    },
    encryptPassword:function(password){
if(!password) return ''
try{
return crypto 
.createHmac('sha1',this.salt)
.update(password)
.digest('hex');
}
catch(err){
return err;
}
    },

    makeSalt:function(){
return Math.round(new Date().valueOf()*Math.random())+'';
    }
}
// const scoreschema=new Schema({
//     email:{
//         type:String,
//         required:true,
      

//     },
//     subject:{
//         type:String,
//         required:true,
        
//     },
//     score:{
//         type:Number,
//         required:true,
//     },
// correct:{
//     type:Number,
//         required:true, 
// } ,
// incorrect:{
//     type:Number,
//     required:true, 
// },
// notAnswered:{
//     type:Number,
//         required:true, 
// } ,
// date:{
//     type:Date,
//     required:true,
//     default:Date(),
   
// }
// });



// const subjectschema=new Schema({
   
//     subject:{
//         type:String,
//         required:true,
//         unique:true
//     },

    
// });



// const pollschema=new Schema({
//    subject:{
//     type:String,
//     required:true,
//    },
//     question:{
//         type:String,
//         required:true,
        
//     },
//     opt1:{
//         type:String,
//         required:true,
//     },
//     opt2:{
//         type:String,
//         required:true,
//     },
//     opt3:{
//         type:String,
//         required:true,
//     },
//     opt4:{
//         type:String,
//         required:true,
//     },
//     answer:{
//         type:String,
//         required:true,
//     },
    
// });



 const users=mongoose.model('users',userschema);
//  const scorechar=mongoose.model('scorechar',scoreschema);
//  const pollchar=mongoose.model('pollchar',pollschema);
//  const subjectchar=mongoose.model('subjectchar',subjectschema);
  module.exports={users};
