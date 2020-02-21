var mongoose =require('mongoose');
mongoose.set('debug',true);
mongoose.Promise=global.Promise;

//'mongodb+srv://jahnvi:jahnvi001@cluster0-0uzok.mongodb.net/test?retryWrites=true&w=majority'
// mongoose.connect(process.env.DATABASE,{useUnifiedTopology: true,useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false})
// .then(()=>console.log("db connected"))

 const Schema=mongoose.Schema;
 const categorySchema=new Schema({
  
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        index:true

    }
    
},{timestamp:true});


 const category=mongoose.model('category',categorySchema);
//  const scorechar=mongoose.model('scorechar',scoreschema);
//  const pollchar=mongoose.model('pollchar',pollschema);
//  const subjectchar=mongoose.model('subjectchar',subjectschema);
  module.exports={category};
