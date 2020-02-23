import fetch from 'isomorphic-fetch';
import {API} from '../config';
import cookie from 'js-cookie';
export const create=(tag,token)=>{

   
    return fetch(`${API}/api/admin/tag`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-type':'application/json',
            Authorization :`Bearer ${token}`
        },
        body:JSON.stringify(tag)

    })
    .then(response=>response.json())
    .catch(err=>console.log(err))
};


export const getTags = () => {
    return fetch(`${API}/api/admin/tags`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleTag = slug => {
    return fetch(`${API}/api/admin/tag/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeTag = (slug, token) => {
    return fetch(`${API}/api/admin/rm/${slug}`, {
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