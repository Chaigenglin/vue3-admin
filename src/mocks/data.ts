import Mock from 'mockjs'
export const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '000000',
    avatar: '',
    name: 'admin'
  }
]
export const UserInfo = {
  success: true,
  code: 200,
  data: {
    role: [
      {
        id: '1',
        title: '超级管理员'
      }
    ],
    _id: '612710a0ec87aa543c9c341d',
    id: '0',
    username: 'super-admin',
    title: '超级管理员',
    avatar: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    permission: {
      menus: ['userManage', 'roleList', 'permissionList', 'articleRanking', 'articleCreate'],
      points: ['distributeRole', 'importUser', 'removeUser', 'distributePermission']
    }
  },
  message: '获取信息成功'
}
