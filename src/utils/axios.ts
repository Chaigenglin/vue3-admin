import axios from 'axios'
import { ElMessage } from 'element-plus'
// import type { AxiosRequestConfig, AxiosResponse } from 'axios'
const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000
})
// 请求拦截
instance.interceptors.response.use(
  (response) => {
    const { success, message } = response.data
    if (success) {
      return response.data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (err) => {
    ElMessage.error(err.message)
    return Promise.reject(new Error(err.message))
  }
)
export default instance
