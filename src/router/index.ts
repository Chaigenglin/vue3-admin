import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/userLogin.vue')
    },
    {
      path: '/',
      component: () => import('@/layout/index.vue')
    }
  ]
})

export default router
