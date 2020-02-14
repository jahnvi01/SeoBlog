const express=require('express')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config()

const app=express()
app.use(morgan('dev'))
app.use(bodyParser())
app.use(cookieParser())
if(process.env.NODE_ENV=='development'){
    app.use(cors({origin:`${process.env.CLIENT_URL}`}))
}

mongoose.createConnection('mongodb+srv://jahnvi:jahnvi001@cluster0-0uzok.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false})
.then(()=>console.log("db connected"))
const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})