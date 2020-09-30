import axios from 'axios'

export default axios.create({
    baseURL:"http://192.168.1.27:3002" //<== no backslashe here
})
