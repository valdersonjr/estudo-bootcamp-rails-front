import axios from 'axios';
import Cookie from 'js-cookie';
import ApiData from '../dtos/apiData';

import Router from 'next/router';

const api = axios.create({
    baseURL: 'http://localhost:3000'
});


api.interceptors.response.use(res => {
    if (res.headers['access-token']) {
        const apiData: ApiData = {
            'access-token': res.headers['access-token'],
            client: res.headers.client,
            expiry: res.headers.expiry,
            'token-type': res.headers['token-type'],
            uid: res.headers.uid
        };

        const headers = {
            ...api.defaults.headers, // Copy the existing headers
            ...apiData, // Add the headers from ApiData
        };

        api.defaults.headers = headers;

        Cookie.set('@api-data', apiData);
    }

    return res;
});

api.interceptors.request.use(req => {
    if (req.url.includes('admin')) {
        const apiData: ApiData = JSON.parse(Cookie.get('@api-data'));
        req.headers = apiData;
    }

    return req;
});


export default api;