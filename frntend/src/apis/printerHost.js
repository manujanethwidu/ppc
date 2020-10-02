import axios from 'axios'

export default axios.create({
    baseURL:"http://192.168.1.151:3050" //<== no backslashe here
})
