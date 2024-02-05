import axios from 'axios'
// import type { AxiosRequestConfig, AxiosResponse } from 'axios'
const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000
})

// instance.interceptors.request()
export default instance
