import axios from "axios"

export const baseURL="http://localhost:8000"
//create axios instance
const api=axios.create({
    baseURL :baseURL,
    timeout:10000,
    headers:{
        'content-Type': 'application/json',

    }
});
api.intercepators.request.use(
    (config)=>{
        const token =localStorage.getItem('token');
        if(token){
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
    
);

api.interceptors.response.use(
    (response)=>response,
    (error)=>{
        if(error.response?.status===401){
            localStorage.removeItem('token');
                window.location.herf='/';
        }
        return Promise.reject(error);
    }
);

export default api;
