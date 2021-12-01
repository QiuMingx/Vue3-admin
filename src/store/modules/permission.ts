import router from '@/router'
import type { RouteRecordRaw,RouteLocationNormalizedLoaded, RouteRecordName, RouteRecordNormalized } from 'vue-router'
import { ActionTree, Module, MutationTree } from 'vuex';
import { IRootState } from '../index'; // 全局状态 root state 从src/store/index.ts里定义导出
import { AppRouteRecordRaw } from '@/router/types'
import { constantRouterMap,  asyncRouterMap} from '@/router'
import { getRouters } from '@/api/menu'
const Layout = () => import('@/layout/index.vue')
// 定义TagsViewState state类型
export interface PermissionState {
  routes: AppRouteRecordRaw[]
  addRoutes: AppRouteRecordRaw[]
  defaultRoutes:AppRouteRecordRaw[]
  topbarRouters:AppRouteRecordRaw[]
  sidebarRouters:AppRouteRecordRaw[]
  isAddRouters: boolean
  activeTab: string
  menuTabRouters: AppRouteRecordRaw[]
}
// state: {
//   routes: [],
//   addRoutes: [],
//   defaultRoutes: [],
//   topbarRouters: [],
//   sidebarRouters: []
// },
// 定义mutations
const mutations: MutationTree<PermissionState> = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRouterMap.concat(routes)
    },
    SET_DEFAULT_ROUTES: (state, routes) => {
        state.defaultRoutes = constantRouterMap.concat(routes)
    },
    SET_TOPBAR_ROUTES: (state, routes) => {
    // 顶部导航菜单默认添加统计报表栏指向首页
        const index = [{
            path: 'index',
            meta: { title: '统计报表', icon: 'dashboard'}
        }]
        state.topbarRouters = routes.concat(index);
    },
    SET_SIDEBAR_ROUTERS: (state, routes) => {
        console.log(routes)
        state.sidebarRouters = routes
    },

}
const actions: ActionTree<PermissionState, IRootState> = {
    GenerateRoutes({ commit }) {
        return new Promise(resolve => {
        // 向后端请求路由数据
            getRouters().then(res => {
                const sdata = JSON.parse(JSON.stringify(res.data))
                const rdata = JSON.parse(JSON.stringify(res.data))
                // let sidebarRoutes, rewriteRoutes
                const sidebarRoutes = filterAsyncRouter(sdata)
                const rewriteRoutes = filterAsyncRouter(rdata, false, true)
                rewriteRoutes.push({ path: '/:pathMatch(.*)*', redirect: '/404', hidden: true })
                commit('SET_ROUTES', rewriteRoutes)
                commit('SET_SIDEBAR_ROUTERS', constantRouterMap.concat(sidebarRoutes))
                commit('SET_DEFAULT_ROUTES', sidebarRoutes)
                commit('SET_TOPBAR_ROUTES', sidebarRoutes)
                console.log(router.getRoutes(), 'router')
                resolve(rewriteRoutes)
            })
        })
    }

}
// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap, lastRouter = false, type = false) {
  return asyncRouterMap.filter(route => {
    if (type && route.children) {
      route.children = filterChildren(route.children)
    }
    if (route.component) {
      // Layout ParentView 组件特殊处理
      if (route.component === 'Layout') {
        route.component = Layout
      // } else if (route.component === 'ParentView') {
      //   route.component = ParentView
      // } else if (route.component === 'InnerLink') {
      //   route.component = InnerLink
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, route, type)
    } else {
      delete route['children']
      delete route['redirect']
    }
    return true
  })
}

function filterChildren(childrenMap, lastRouter = false) {
  var children = []
  childrenMap.forEach((el, index) => {
    if (el.children && el.children.length) {
      if (el.component === 'ParentView' && !lastRouter) {
        el.children.forEach(c => {
          c.path = el.path + '/' + c.path
          if (c.children && c.children.length) {
            children = children.concat(filterChildren(c.children, c))
            return
          }
          children.push(c)
        })
        return
      }
    }
    if (lastRouter) {
      el.path = lastRouter.path + '/' + el.path
    }
    children = children.concat(el)
  })
  return children
}

export const loadView = (view) => {
  if (process.env.NODE_ENV === 'development') {
    return () => import(/* @vite-ignore */ '@/views/About.vue')
  } else {
    // 使用 import 实现生产环境的路由懒加载
    return () => import(/* @vite-ignore */ `@/views/${view}`)
  }
}

const permission: Module<PermissionState, IRootState> = {
    namespaced: true,
    state: {
        routes: [],
        addRoutes: [],
        defaultRoutes:[],
        topbarRouters:[],
        sidebarRouters:[],
        isAddRouters: false,
        activeTab: '',
        menuTabRouters: [],
    },
    mutations,
    actions,
  };
  
export default permission;


