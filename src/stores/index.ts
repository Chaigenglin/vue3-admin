import { defineStore } from 'pinia'
import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '../utils/storage'
import router from '@/router'
import type { userInfoType } from './type'
import { setTimeStamp } from '@/utils/auth'
export const useLoginStore = defineStore('login', {
  state: () => ({
    token: getItem('token') || '',
    userInfo: {} as userInfoType
  }),
  actions: {
    login(userInfo: { username: string; password: string }) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          // password: md5(password)
          password
        })
          .then((res) => {
            console.log(res, '登录成功！')
            this.setToken(res.data.token)
            router.push('/')
            setTimeStamp()
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    setToken(token: string) {
      this.token = token
      setItem('token', token)
    },
    // 判断是否有用户信息
    hasUserInfo() {
      return JSON.stringify(this.userInfo) !== '{}'
    },
    // 获取登录信息
    async getUserInfo() {
      const res = await getUserInfo()
      console.log(res, '获取登录信息！')
      this.userInfo = res.data
      return res
    },
    // 退出登录
    logout() {
      // 请缓存
      this.token = ''
      this.userInfo = {} as userInfoType
      removeAllItem()
      // TODO 清配置
      //返回登录页面
      router.push('/login')
    }
  }
})
