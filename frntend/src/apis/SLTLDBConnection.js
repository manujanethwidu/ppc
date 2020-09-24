import axios from 'axios'

export default axios.create({
    baseURL:"http://192.168.43.25:3001" //<== no backslashe here
})
