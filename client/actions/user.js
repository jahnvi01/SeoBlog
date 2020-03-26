import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const userPublicProfile = username => {
    return fetch(`${API}/api/user/${username}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(response => {
            return 
            { handleResponse(response);
                response.json();
                }        })
        .catch(err => console.log(err));
};

export const getProfile = token => {
    console.log("eee")
    return fetch(`${API}/api/user/profile`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
          //  console.log(response.json())
            return response.json();
        })
        .catch(err => console.log(err));
};

export const update = (token, user) => {
    console.log(user.get("password"))
    return fetch(`${API}/api/user/update`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body:user
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};