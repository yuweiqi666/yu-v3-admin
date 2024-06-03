import { createApp } from 'vue'

import App from '@/App.vue'

// 引入路由
import router from '@/router/index'

// 引入pinia仓库
import pinia from '@/store/index'

import autoGlobalComponent from './plugins/autoGlobalComponent'

// 引入全局样式
import '@/assets/style/index.scss'

const app = createApp(App)

// 自动注册全局组件的插件
app.use(autoGlobalComponent)

app.use(router)

app.use(pinia)

app.mount('#app')
