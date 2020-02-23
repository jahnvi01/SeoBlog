import fetch from 'isomorphic-fetch';
import {API} from '../config';
import cookie from 'js-cookie';

export const create=(category,token)=>{
   
    return fetch(`${API}/api/admin/category`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-type':'application/json',
            Authorization :`Bearer ${token}`
        },
        body:JSON.stringify(category)

    })
    .then(response=>response.json())
    .catch(err=>console.log(err))
};


export const getCategories = () => {
    return fetch(`${API}/api/admin/categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleCategory = slug => {
    return fetch(`${API}/api/admin/category/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeCategory = (slug, token) => {
    return fetch(`${API}/api/admin/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};