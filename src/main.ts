import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/mocks/index'
// 初始化css
import '@/styles/index.scss'
import './permission'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(ElementPlus)

app.mount('#app')
