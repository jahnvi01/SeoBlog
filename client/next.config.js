const withCSS=require('@zeit/next-css')
module.exports=withCSS({
    publicRuntimeConfig:{
        APP_NAME:'SeoBlog',
        API_DEVELOPMENT:'http://localhost:5000/api',
        PRODUCTION:false,
        DOMAIN_DEVELOPMENT:'http://localhost:3000',
        DOMAIN_PRODUCTION:'https://seoblog.com',
        
        
    }
})
