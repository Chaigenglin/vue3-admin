// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { login } from '@/api/sys'
import md5 from 'md5'

export const useLoginStore = defineStore('login', {
  state: () => ({}),
  actions: {
    login(userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
