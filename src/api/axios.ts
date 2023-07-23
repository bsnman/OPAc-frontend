import axios from 'axios'

//create an axios instance in order to use it globally with same config
const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },

})

export default instance