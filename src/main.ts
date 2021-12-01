/*
 * @Description: 
 * @Version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-22 10:14:53
 * @LastEditors: banben
 * @LastEditTime: 2021-11-22 16:10:30
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.less' // global css
import VueAxios from 'vue-axios'
import { Request } from '@utils/axios'
import 'virtual:svg-icons-register'
import { setupGlobCom } from './components'
import './permission' 



// 创建实例
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)

// 自定义全局组件
setupGlobCom(app) // 引入全局组件
// // 自定义指令
// GlobalDirective(app)

// .use(store)
// .use(router)
// .use(VueAxios, Request.init())
// .use(ElementPlus)
// .mount('#app')

app.mount('#app')
