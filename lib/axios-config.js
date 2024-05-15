import axios from 'axios';

const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('accessToken');
    }
};

const token = getToken();

const request = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
})

request.interceptors.request.use(
    (config) => {
        const token = getToken();
        console.log({config});
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default request;