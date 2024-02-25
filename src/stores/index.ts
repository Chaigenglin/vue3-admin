import { defineStore } from 'pinia'
import { login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '../utils/storage'
import router from '@/router'

export const useLoginStore = defineStore('login', {
  state: () => ({
    token: getItem('token') || ''
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
            console.log(res)
            this.setToken(res.data.token)
            router.push('/')
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
    }
  }
})
