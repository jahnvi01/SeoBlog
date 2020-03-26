import fetch from 'isomorphic-fetch';
import { API } from '../config';
import queryString from 'query-string';
import { isAuth,handleResponse } from './auth';
export const createBlog = (blog, token) => {
    let createBlogEndpoint;
console.log(isAuth().role)
    if (isAuth() && isAuth().role === 1) {
        createBlogEndpoint = `${API}/api/blog`;
    } else if (isAuth() && isAuth().role === 0) {
        createBlogEndpoint = `${API}/api/authuser/blog`;
    }

    return fetch(`${createBlogEndpoint}`, {
        method: 'POST',
        headers: {
          
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            handleResponse(response)
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
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};
export const singleBlog = slug => {
    return fetch(`${API}/api/blog/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};
export const listRelated = blog => {
   // console.log(blog)
    return fetch(`${API}/api/blogs/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
        .then(response => {
          // console.log(response.json())
            return response.json();
        })
        .catch(err => console.log(err));
};




export const list = username => {
    let listBlogsEndpoint;

    if (username) {
        listBlogsEndpoint = `${API}/api/authuser/${username}/blogs`;
    } else {
        listBlogsEndpoint = `${API}/api/blogs`;
    }

    return fetch(`${listBlogsEndpoint}`, {
        method: 'GET'
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};
export const removeBlog = (slug, token) => {
    let deleteBlogEndpoint;

    if (isAuth() && isAuth().role === 1) {
        deleteBlogEndpoint = `${API}/api/blog/${slug}`;
    } else if (isAuth() && isAuth().role === 0) {
        deleteBlogEndpoint = `${API}/api/authuser/blog/${slug}`;
    }

    return fetch(`${deleteBlogEndpoint}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};
export const updateBlog = (blog, token, slug) => {
    let updateBlogEndpoint;

    if (isAuth() && isAuth().role === 1) {
        updateBlogEndpoint = `${API}/api/blog/${slug}`;
    } else if (isAuth() && isAuth().role === 0) {
        updateBlogEndpoint = `${API}/api/authuser/blog/${slug}`;
    }

    return fetch(`${updateBlogEndpoint}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};


export const listSearch = params => {
    console.log('search params', params);
    let query = queryString.stringify(params);
    console.log('query params', query);
    return fetch(`${API}/api/blogs/search?${query}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};