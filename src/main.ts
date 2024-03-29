import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/mocks/index'
// import { mockData } from './mocks/index'
// 初始化css
import '@/styles/index.scss'
import './permission'
// mockData()
const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(ElementPlus)

app.mount('#app')
