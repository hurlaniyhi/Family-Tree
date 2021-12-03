import axios from 'axios'
import {Service_URL, boss} from '../config/constant'

const instance = axios.create({
    baseURL: Service_URL.BASE_URL
})


instance.interceptors.request.use(
    async (config) => {
        const token = await localStorage.getItem('token')
        
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },

    (err) => {
        return Promise.reject(err)
    }
)

export default instance