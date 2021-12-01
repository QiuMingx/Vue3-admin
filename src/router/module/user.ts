/*
 * @Description: 用户路由
 * @Version: 1.0
 * @Autor: banben
 * @Date: 2021-11-24 13:57:23
 * @LastEditors: banben
 * @LastEditTime: 2021-11-24 14:14:12
 */
const Layout = () => import('@/layout/index.vue')

const UserRouter = 
{
    path: '/user',
    component: Layout,
    // hidden: true,
    children: [
        {
            path: 'profile',
            component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
            name: 'Profile',
            meta: { title: '个人中心', icon: 'user' }
        },
        {
            path: 'post',
            component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
            name: 'post',
            meta: { title: '个人中心', icon: 'user' }
        }
    ]
}
export default UserRouter
