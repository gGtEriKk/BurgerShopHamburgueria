import axios from 'axios'

const apiCodeBurger = axios.create({
  // baseURL: 'https://codeburgerapi-erikgt.up.railway.app/'
  // baseURL: 'https://codeburgerapi-production.up.railway.app/'
  baseURL: 'http://localhost:3001'
})

apiCodeBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`

  return config
})

export default apiCodeBurger
