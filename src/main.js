

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
//引入初始化样式
import '@/styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'

//引入懒加载指令插件并且注册
import {lazyPlugin} from '@/directives'
//引入全局组件注册
import {componentPlugin} from '@/components/index'
const app = createApp(App)

//pinia持久化
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

