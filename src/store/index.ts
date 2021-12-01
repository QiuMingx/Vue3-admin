/*
 * @Description: 
 * @version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-19 16:39:17
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2021-11-29 14:20:20
 */
import { createStore } from 'vuex'

import app from './modules/app'
import settings from './modules/settings'
import permission, { PermissionState }from '@/store/modules/permission'
import user from './modules/user'
import getters from './getters'
import tagsView, { TagsViewState } from '@/store/modules/tagsView';
// 模块声明在根状态下
export interface IRootState {
  tagsView: TagsViewState;
  permission:PermissionState

  // test: ICountState;
}
// 模块声明在根状态下
export default createStore<IRootState>({
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    tagsView,
    permission,
    settings,
    user
  },
  getters

})
