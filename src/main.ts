import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// 初始化css
import '@/styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(ElementPlus)

app.mount('#app')
