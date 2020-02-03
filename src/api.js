import axios from 'axios'

var api = axios.create({
  baseURL: '/api/v1',
})

export default api
