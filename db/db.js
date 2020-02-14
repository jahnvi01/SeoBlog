var mongoose =require('mongoose');
const crypto=require('crypto')
mongoose.set('debug',true);
mongoose.Promise=global.Promise;


mongoose.createConnection('mongodb+srv://jahnvi:jahnvi001@cluster0-0uzok.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false})
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
    email:{
        type:String,
        required:true,
        unique:true

    },
    profile:{
        type:String,
        required:true  

    },
    password:{
        type:String,
        required:true
    },
salt:Number,
about:{
    type:String,
    required:true,
    trim:true
},
role:{
    type:String,
    required:true,
    trim:true
},
photo:{
    data:buffer,
    contentType:String
},
resetPasswordLink:{
    data:String,
    default:''
}
});


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



 const userchar=mongoose.model('userchar',userschema);
//  const scorechar=mongoose.model('scorechar',scoreschema);
//  const pollchar=mongoose.model('pollchar',pollschema);
//  const subjectchar=mongoose.model('subjectchar',subjectschema);
  module.exports={userchar};