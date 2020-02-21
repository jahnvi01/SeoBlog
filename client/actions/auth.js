import fetch from 'isomorphic-fetch';
import {API} from '../config';
import cookie from 'js-cookie';
import { get } from 'mongoose';
export const signup=(user)=>{
   
    return fetch(`${API}/api/auth/signup`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(user)

    })
    .then(response=>response.json())
    .catch(err=>console.log(err))
};

export const signin=(user)=>{
   
    return fetch(`${API}/api/auth/signin`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(user)

    })
    .then(response=>response.json())
    .catch(err=>console.log(err))
};

export const setCookie=(key,value)=>{
    if(process.browser){

        cookie.set(key,value,{expires:1})
    }
};

export const removeCookie=(key)=>{
    if(process.browser){

        cookie.remove(key,{expires:1})
    }
};
export const getCookie=(key,value)=>{
    if(process.browser){

     return   cookie.set(key)
    }
};

export const setLocalStorage=(key,value)=>{
    if(process.browser){
        localStorage.setItem(key,JSON.stringify(value))
    }
};


export const removeLocalStorage=(key)=>{
    if(process.browser){
        localStorage.removeItem(key)
    }
};

export const authentication=(data,next)=>{
    
   setCookie('token',data.token);
   setLocalStorage('user',data.user);
   next();
};

export const signout=(next)=>{
removeCookie('token');
removeLocalStorage('user');
next()
return fetch(`${API}/api/auth/signout`,{
    method:"GET",

})
.then(res=>{console.log("signout success")})
.catch(err=>console.log(err))
}

export const isAuth=(key)=>{
    if(process.browser){
      const cookieChecked=getCookie('token');
      if(cookieChecked){
          if(localStorage.getItem('user')){
              return JSON.parse(localStorage.getItem('user'))
          }
          else{
              return false;
          }
      }
    }
}