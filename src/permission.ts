import router from '@/router/index'
import { useLoginStore } from './stores/index'

const whiteList = ['/login', '/404']
// 前置守卫
router.beforeEach(async (to, from, next) => {
  const store = useLoginStore()
  // 已登录不允许进入登录页面
  if (store.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.hasUserInfo()) {
        await store.getUserInfo()
      }
      next()
    }
  } else {
    // 未登录判断是否白名单 不在白名单直接跳转登录页面
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
