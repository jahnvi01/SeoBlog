import fetch from 'isomorphic-fetch';
import {API} from '../config';
import cookie from 'js-cookie';
import { get } from 'mongoose';
export const preSignup = user => {
    return fetch(`${API}/api/auth/pre-signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

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
export const updateUser = (user, next) => {
    if (process.browser) {
        if (localStorage.getItem('user')) {
            let auth = JSON.parse(localStorage.getItem('user'));
            auth = user;
            localStorage.setItem('user', JSON.stringify(auth));
            next();
        }
    }
};
export const handleResponse = response => {
    if (response.status === 401) {
        signout(() => {
            Router.push({
                pathname: '/signin',
                query: {
                    message: 'Your session is expired. Please signin'
                }
            });
        });
    }
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
export const getCookie=(key)=>{
    if(process.browser){

     return   cookie.get(key)
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
   console.log(data.user) 
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


export const forgotPassword = email => {
    return fetch(`${API}/api/auth/forgot-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const resetPassword = resetInfo => {
    return fetch(`${API}/api/auth/reset-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resetInfo)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};