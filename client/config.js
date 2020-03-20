import getConfig from 'next/config'
const {publicRuntimeConfig}=getConfig()
var PRODUCTION=false
//console.log(publicRuntimeConfig.DOMAIN_DEVELOPMENT)
export const API=PRODUCTION ? 'http://seoblog.com':'http://localhost:5000'
export const APP_NAME='SeoBlog';
export const DOMAIN=PRODUCTION?'http://localhost:3000':'https://seoblog.com';
export const FB_APP_ID ='3074888912563765';
