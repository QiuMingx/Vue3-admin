/*
 * @Description: 
 * @version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-23 14:31:24
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2021-11-29 14:23:03
 */
import router from '@/router'
import type { RouteRecordRaw, RouteLocationNormalizedLoaded, RouteRecordName, RouteRecordNormalized } from 'vue-router'
import { ActionTree, Module, MutationTree } from 'vuex';
import { IRootState } from '../index'; // 全局状态 root state 从src/store/index.ts里定义导出

// 携带fullPath
export interface RouteLocationWithFullPath extends RouteRecordNormalized {
  fullPath?: string;
}
// 定义TagsViewState state类型
export interface TagsViewState {
  visitedViews: RouteLocationNormalizedLoaded[];
  // 根据路由name缓存集合
  cachedViews: RouteRecordName[];
}

// 定义mutations
const mutations: MutationTree<TagsViewState> = {
  // 增加view
  ADD_VISITED_VIEW: (state, view: RouteLocationNormalizedLoaded) => {
    if (state.visitedViews.some(v => v.path === view.path)) return
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
  },
  // 缓存view
  ADD_CACHED_VIEW: (state, view) => {
    if (state.cachedViews.includes(view.name)) return
    if (!view.meta.noCache) {
      state.cachedViews.push(view.name)
    }
  },
  // 删除tag-view
  DEL_VISITED_VIEW: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
  },
  // 可删除指定的一个view缓存
  DEL_CACHED_VIEW: (state, view) => {
    const index = state.cachedViews.indexOf(view.name)
    index > -1 && state.cachedViews.splice(index, 1)
  },
  //  删除标签导航其他可显示tag 除了 affix为true 以及当前右键选中的view
  DEL_OTHERS_VISITED_VIEWS: (state, view) => {
    state.visitedViews = state.visitedViews.filter(v => {
      return v.meta.affix || v.path === view.path
    })
  },
  // 删除缓存列表里其他tag 除了当前右键选中的view
  DEL_OTHERS_CACHED_VIEWS: (state, view) => {
    const index = state.cachedViews.indexOf(view.name)
    if (index > -1) {
      state.cachedViews = state.cachedViews.slice(index, index + 1)
    } else {
      state.cachedViews = []
    }
  },
  // 清空可显示列表
  DEL_ALL_VISITED_VIEWS: state => {
    // keep affix tags
    const affixTags = state.visitedViews.filter(tag => tag.meta.affix)
    state.visitedViews = affixTags
  },
  // 删除所有
  DEL_ALL_CACHED_VIEWS: state => {
    state.cachedViews = []
  },

  UPDATE_VISITED_VIEW: (state, view) => {
    for (let v of state.visitedViews) {
      if (v.path === view.path) {
        v = Object.assign(v, view)
        break
      }
    }
  },

  DEL_RIGHT_VIEWS: (state, view) => {
    const index = state.visitedViews.findIndex(v => v.path === view.path)
    if (index === -1) {
      return
    }
    state.visitedViews = state.visitedViews.filter((item, idx) => {
      if (idx <= index || (item.meta && item.meta.affix)) {
        return true
      }
      let i
      if (item.name) {
        i = state.cachedViews.indexOf(item.name)
      }
      if (i > -1) {
        state.cachedViews.splice(i, 1)
      }
      return false
    })
  },

  DEL_LEFT_VIEWS: (state, view) => {
    const index = state.visitedViews.findIndex(v => v.path === view.path)
    if (index === -1) {
      return
    }
    state.visitedViews = state.visitedViews.filter((item, idx) => {
      if (idx >= index || (item.meta && item.meta.affix)) {
        return true
      }
      let i
      if (item.name) {
        i = state.cachedViews.indexOf(item.name)
      }
      if (i > -1) {
        state.cachedViews.splice(i, 1)
      }
      return false
    })
  }
};
// // 定义actions
// const actions: ActionTree<TagsViewState, IRootState> = {
//   toggleSidebar({ commit }) {
//     // 切换sidebar 收缩状态
//     commit('TOGGLE_SIDEBAR');
//   },
//   setSize({ commit }, size: Size) {
//     commit('SET_SIZE', size);
//   },
// };

// const mutations = {
//   ADD_VISITED_VIEW: (state, view) => {
//     if (state.visitedViews.some(v => v.path === view.path)) return
//     state.visitedViews.push(
//       Object.assign({}, view, {
//         title: view.meta.title || 'no-name'
//       })
//     )
//   },
//   ADD_CACHED_VIEW: (state, view) => {
//     if (state.cachedViews.includes(view.name)) return
//     if (!view.meta.noCache) {
//       state.cachedViews.push(view.name)
//     }
//   },

//   DEL_VISITED_VIEW: (state, view) => {
//     for (const [i, v] of state.visitedViews.entries()) {
//       if (v.path === view.path) {
//         state.visitedViews.splice(i, 1)
//         break
//       }
//     }
//   },
//   DEL_CACHED_VIEW: (state, view) => {
//     const index = state.cachedViews.indexOf(view.name)
//     index > -1 && state.cachedViews.splice(index, 1)
//   },

//   DEL_OTHERS_VISITED_VIEWS: (state, view) => {
//     state.visitedViews = state.visitedViews.filter(v => {
//       return v.meta.affix || v.path === view.path
//     })
//   },
//   DEL_OTHERS_CACHED_VIEWS: (state, view) => {
//     const index = state.cachedViews.indexOf(view.name)
//     if (index > -1) {
//       state.cachedViews = state.cachedViews.slice(index, index + 1)
//     } else {
//       state.cachedViews = []
//     }
//   },

//   DEL_ALL_VISITED_VIEWS: state => {
//     // keep affix tags
//     const affixTags = state.visitedViews.filter(tag => tag.meta.affix)
//     state.visitedViews = affixTags
//   },
//   DEL_ALL_CACHED_VIEWS: state => {
//     state.cachedViews = []
//   },

//   UPDATE_VISITED_VIEW: (state, view) => {
//     for (let v of state.visitedViews) {
//       if (v.path === view.path) {
//         v = Object.assign(v, view)
//         break
//       }
//     }
//   },

//   DEL_RIGHT_VIEWS: (state, view) => {
//     const index = state.visitedViews.findIndex(v => v.path === view.path)
//     if (index === -1) {
//       return
//     }
//     state.visitedViews = state.visitedViews.filter((item, idx) => {
//       if (idx <= index || (item.meta && item.meta.affix)) {
//         return true
//       }
//       const i = state.cachedViews.indexOf(item.name)
//       if (i > -1) {
//         state.cachedViews.splice(i, 1)
//       }
//       return false
//     })
//   },

//   DEL_LEFT_VIEWS: (state, view) => {
//     const index = state.visitedViews.findIndex(v => v.path === view.path)
//     if (index === -1) {
//       return
//     }
//     state.visitedViews = state.visitedViews.filter((item, idx) => {
//       if (idx >= index || (item.meta && item.meta.affix)) {
//         return true
//       }
//       const i = state.cachedViews.indexOf(item.name)
//       if (i > -1) {
//         state.cachedViews.splice(i, 1)
//       }
//       return false
//     })
//   }
// }
// 定义actions
const actions: ActionTree<TagsViewState, IRootState> = {
  // 添加tags view
  addView({ dispatch }, view: RouteRecordRaw) {
    // 添加tag时也要判断该tag是否需要缓存
    dispatch('addVisitedView', view);
    dispatch('addCachedView', view);
  },
  // 添加可显示的tags view 添加前commit里需要进行去重过滤
  addVisitedView({ commit }, view) {
    commit('ADD_VISITED_VIEW', view)
  },
  // 添加可缓存的标签tag
  addCachedView({ commit }, view) {
    commit('ADD_CACHED_VIEW', view)
  },
  // 删除指定tags view
  delView({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delVisitedView', view)
      dispatch('delCachedView', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },
  // 从可显示的集合中 删除tags view
  delVisitedView({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_VISITED_VIEW', view)
      resolve([...state.visitedViews])
    })
  },

  // 从缓存列表删除指定tag view
  delCachedView({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_CACHED_VIEW', view)
      resolve([...state.cachedViews])
    })
  },

  // 清空 可显示列表 和 缓存列表
  delOthersViews({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delOthersVisitedViews', view)
      dispatch('delOthersCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },

  // 清空可显示列表   
  delOthersVisitedViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_OTHERS_VISITED_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },

  // 关闭其他tag
  delOthersCachedViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_OTHERS_CACHED_VIEWS', view)
      resolve([...state.cachedViews])
    })
  },

  // 清空 可显示列表 和 缓存列表
  delAllViews({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delAllVisitedViews', view)
      dispatch('delAllCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },

  // 清空可显示列表
  delAllVisitedViews({ commit, state }) {
    return new Promise(resolve => {
      commit('DEL_ALL_VISITED_VIEWS')
      resolve([...state.visitedViews])
    })
  },

  // 清空缓存列表
  delAllCachedViews({ commit, state }) {
    return new Promise(resolve => {
      commit('DEL_ALL_CACHED_VIEWS')
      resolve([...state.cachedViews])
    })
  },


  updateVisitedView({ commit }, view) {
    commit('UPDATE_VISITED_VIEW', view)
  },

  delRightTags({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_RIGHT_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },

  delLeftTags({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_LEFT_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },
}
// const actions = {
//   addView({ dispatch }, view) {
//     dispatch('addVisitedView', view)
//     dispatch('addCachedView', view)
//   },
//   addVisitedView({ commit }, view) {
//     commit('ADD_VISITED_VIEW', view)
//   },
//   addCachedView({ commit }, view) {
//     commit('ADD_CACHED_VIEW', view)
//   },

//   delView({ dispatch, state }, view) {
//     return new Promise(resolve => {
//       dispatch('delVisitedView', view)
//       dispatch('delCachedView', view)
//       resolve({
//         visitedViews: [...state.visitedViews],
//         cachedViews: [...state.cachedViews]
//       })
//     })
//   },
//   delVisitedView({ commit, state }, view) {
//     return new Promise(resolve => {
//       commit('DEL_VISITED_VIEW', view)
//       resolve([...state.visitedViews])
//     })
//   },
//   delCachedView({ commit, state }, view) {
//     return new Promise(resolve => {
//       commit('DEL_CACHED_VIEW', view)
//       resolve([...state.cachedViews])
//     })
//   },

//   delOthersViews({ dispatch, state }, view) {
//     return new Promise(resolve => {
//       dispatch('delOthersVisitedViews', view)
//       dispatch('delOthersCachedViews', view)
//       resolve({
//         visitedViews: [...state.visitedViews],
//         cachedViews: [...state.cachedViews]
//       })
//     })
//   },
//   delOthersVisitedViews({ commit, state }, view) {
//     return new Promise(resolve => {
//       commit('DEL_OTHERS_VISITED_VIEWS', view)
//       resolve([...state.visitedViews])
//     })
//   },
//   delOthersCachedViews({ commit, state }, view) {
//     return new Promise(resolve => {
//       commit('DEL_OTHERS_CACHED_VIEWS', view)
//       resolve([...state.cachedViews])
//     })
//   },

//   delAllViews({ dispatch, state }, view) {
//     return new Promise(resolve => {
//       dispatch('delAllVisitedViews', view)
//       dispatch('delAllCachedViews', view)
//       resolve({
//         visitedViews: [...state.visitedViews],
//         cachedViews: [...state.cachedViews]
//       })
//     })
//   },
//   delAllVisitedViews({ commit, state }) {
//     return new Promise(resolve => {
//       commit('DEL_ALL_VISITED_VIEWS')
//       resolve([...state.visitedViews])
//     })
//   },
//   delAllCachedViews({ commit, state }) {
//     return new Promise(resolve => {
//       commit('DEL_ALL_CACHED_VIEWS')
//       resolve([...state.cachedViews])
//     })
//   },

//   updateVisitedView({ commit }, view) {
//     commit('UPDATE_VISITED_VIEW', view)
//   },

//   delRightTags({ commit }, view) {
//     return new Promise(resolve => {
//       commit('DEL_RIGHT_VIEWS', view)
//       resolve([...state.visitedViews])
//     })
//   },

//   delLeftTags({ commit }, view) {
//     return new Promise(resolve => {
//       commit('DEL_LEFT_VIEWS', view)
//       resolve([...state.visitedViews])
//     })
//   },
// }

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions
// }

const tagsView: Module<TagsViewState, IRootState> = {
  namespaced: true,
  state: {
    visitedViews: [],
    cachedViews: [],
  },
  mutations,
  actions,
};

export default tagsView;