import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useLoginStore } from '@/stores'
import { isCheckTimeOut } from './auth'
// import type { AxiosRequestConfig, AxiosResponse } from 'axios'
const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000
})
// 请求拦截
instance.interceptors.request.use(
  (request) => {
    const store = useLoginStore()
    console.log(store.token, 'token')
    if (store.token) {
      // token是否过期
      if (isCheckTimeOut()) {
        //退出
        store.logout()
        return Promise.reject(new Error('token 失效'))
      }
      request.headers.Authorization = `Bearer ${store.token}`
    }
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截
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
    // 后台通知token 失效退出 比如：顶号登录
    if (err.response && err.response.code === 'xxx') {
      const store = useLoginStore()
      store.logout()
    }
    ElMessage.error(err.message)
    return Promise.reject(new Error(err.message))
  }
)
export default instance
