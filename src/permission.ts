/*
 * @Description: 
 * @version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-19 16:39:25
 * @LastEditors: 浦原
 * @LastEditTime: 2021-12-01 11:08:01
 */
import router from './router'
import store from './store'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/auth-redirect', '/bind', '/register']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    to.meta.title && store.dispatch('settings/setTitle', to.meta.title)
    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(() => {
          store.dispatch('permission/GenerateRoutes').then(accessRoutes  => {
            // 根据roles权限生成可访问的路由表
            // TODO
            // accessRoutes.map(item => router.addRoute(item))
            router.addRoute(...accessRoutes)
            console.log(router.getRoutes(), 'router')
             // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
          })
        }).catch(err => {
            // store.dispatch('LogOut').then(() => {
            //   ElMessage.error(err)
            //   next({ path: '/' })
            // })
            console.log('11')
          })
      } else {
        next()
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
