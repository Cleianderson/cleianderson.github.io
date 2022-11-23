import axios from 'axios'

const api = axios.create({ baseURL: 'https://backend-rural-ts.fly.dev' })

export default api