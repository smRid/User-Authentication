
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/v1/auth', // That is backend url
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }

});



const useAxiosInstance = () => {
    return axiosInstance;
};

export default useAxiosInstance;