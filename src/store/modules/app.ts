/*
 * @Description:
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2021-11-25 16:06:51
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2021-11-25 16:42:05
 */
import Cookies from 'js-cookie'
const app = {
    namespaced: true,
    state: {
        sidebar: {
            opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
            withoutAnimation: false
        },
        device: 'desktop',
        size: Cookies.get('size') || 'medium'
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened
            state.sidebar.withoutAnimation = false
            if (state.sidebar.opened) {
                Cookies.set('sidebarStatus', 1)
            } else {
                Cookies.set('sidebarStatus', 0)
            }
        }
    },
    actions: {
        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        }
    }
}

export default app
