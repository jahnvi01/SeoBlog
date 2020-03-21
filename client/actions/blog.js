import fetch from 'isomorphic-fetch';
import { API } from '../config';
export const createBlog = (blog, token) => {
    return fetch(`${API}/api/blog`, {
        method: 'POST',
        headers: {
          
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const listBlogsWithCategoriesAndTags = (skip,limit) => {
var data={skip,limit}
    return fetch(`${API}/api/blogs-categories-tags`, {
        method: 'POST',
        headers: {
          
            
            Accept: 'application/json',
        },
       
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const singleBlog = slug => {
    return fetch(`${API}/api/blog/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};