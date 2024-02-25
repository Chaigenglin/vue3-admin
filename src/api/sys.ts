import axios from '@/utils/axios'
// 登录
export const login = (data: object = {}) => {
  return axios({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
// 获取登录信息
export const getUserInfo = (data: object = {}) => {
  return axios({
    url: '/sys/getUserInfo',
    method: 'GET',
    data
  })
}
