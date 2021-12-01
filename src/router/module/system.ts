/*
 * @Description: 
 * @Version: 1.0
 * @Autor: banben
 * @Date: 2021-11-24 14:02:27
 * @LastEditors: banben
 * @LastEditTime: 2021-11-24 14:03:49
 */
const Layout = () => import('@/layout/index.vue')

const SystemUserRouter = {
    path: '/system',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'user',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        name: 'Profile',
        meta: { title: '个人中心', icon: 'user' }
      },
      {
        path: 'role',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        name: 'post',
        meta: { title: '个人中心', icon: 'user' }
      }
    ]
  } 
export default SystemUserRouter

