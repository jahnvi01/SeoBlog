const withCSS=require('@zeit/next-css')
module.exports=withCSS({
    publicRuntimeconfig:{
        APP_NAME:'SeoBlog',
        API_DEVELOPMENT:'http://localhost:5000/api',
        PRODUCTION:false
    }
})