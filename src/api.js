import axios from 'axios'

var api = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
})

export default api
