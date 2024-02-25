import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { LoginUsers, UserInfo } from './data'
const mock = new MockAdapter(axios)
const createRandDelay = (min = 400, max = 1000) => Math.ceil(Math.random() * (max - min)) + min // 随机延迟 400 - 1000 ms
mock.onPost('/sys/login').reply((config) => {
  const { username, password } = JSON.parse(config.data)
  return new Promise((resolve, reject) => {
    let user = null
    setTimeout(() => {
      const hasUser = LoginUsers.some((u) => {
        if (u.username === username && u.password === password) {
          user = JSON.parse(JSON.stringify(u))
          user.password = undefined
          return true
        }
      })
      console.log(123, LoginUsers, hasUser)
      if (hasUser) {
        resolve([
          200,
          { code: 200, msg: 'Login Success!', success: true, data: { token: 'cgl123-123' } }
        ])
      } else {
        resolve([200, { code: 500, msg: 'username or password invalid!' }])
      }
    }, createRandDelay())
  })
})
mock.onGet('/sys/getUserInfo').reply((confing) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, UserInfo])
    }, createRandDelay())
  })
})
// Mock.mock('/sys/login', 'post', {
//   code: '200',
//   data: {
//     token: 'cgl-123-123'
//   },
//   message: '登录成功！'
// })
