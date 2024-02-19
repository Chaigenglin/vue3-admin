import Mock from 'mockjs'

Mock.mock('/sys/login', 'post', {
  code: '200',
  data: {
    token: 'cgl-123-123'
  },
  message: '登录成功！'
})
