const express=require('express')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config()

const app=express()
const blogroutes=require('./routes/index')
const authroutes=require('./routes/auth')
const userroutes=require('./routes/user')
app.use(morgan('dev'))
app.use(bodyParser())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use('/api',blogroutes)
app.use('/api/auth',authroutes)
app.use('/api/user',userroutes)
if(process.env.NODE_ENV=='development'){
    app.use(cors({origin:`${process.env.CLIENT_URL}`}))
}

const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})
