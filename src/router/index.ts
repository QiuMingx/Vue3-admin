/*
 * @Description: 
 * @version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-19 16:39:17
 * @LastEditors: 浦原
 * @LastEditTime: 2021-11-29 14:55:56
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import { AppRouteRecordRaw } from './types'
/* Layout */
const Layout = () => import('@/layout/index.vue')

import UserRouter from './module/user'
import SystemUserRouter from './module/system'

// 公共路由
export const constantRouterMap: Array<AppRouteRecordRaw> = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
            path: '/redirect/:path(.*)',
            component: () => import('@components/Redirect/index.vue'),
            }
        ]
    },
    {
        path: '/401',
        component: () => import('@/views/error/401.vue'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/error/404.vue'),
        hidden: true
    },
    {
        path: '/login',
        component: () => import('@/views/rlogin.vue'),
        hidden: true,
        meta: {},
    },  
    {
        path: '',
        component: Layout,
        redirect: 'index',
        children: [
          {
            path: 'index',
            component: () => import(/* webpackChunkName: "about" */ '@/views/system/user/index.vue'),
            name: 'Index',
            meta: { title: '首页', icon: 'dashboard', affix: true }
          }
        ]
    }
]
export const asyncRouterMap: AppRouteRecordRaw[] = [
    {
        path: '/system',
        component: Layout,
        name:'system',
        hidden: false,
        meta: {title: "系统管理", icon: "system", noCache: false, link: null},
        children: [
            {
                path: 'user',
                component: () => import(/* webpackChunkName: "about" */ '@/views/system/user/index.vue'),
                name: 'Profile',
                meta: { title: '个人中心', icon: 'user' }
            },
            {
                path: 'menu',
                component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
                name: 'post',
                meta: { title: '个人中心', icon: 'user' }
            }
        ]
    }

]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap as RouteRecordRaw[]
})

export default router

