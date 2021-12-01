<!--
 * @Description: 
 * @version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-22 14:07:59
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2021-11-29 14:27:30
-->
<template>
  <div :class="classObj" class="app-wrapper">
    <Sidebar class="sidebar-container"/>
    <div :class="{hasTagsView:true}" class="main-container">
      <div>
        <Navbar />
        <TagsView />
      </div>
      <app-main />
    </div>
  </div>
</template>
<script setup lang="ts" name="Layout">
import { computed } from '@vue/reactivity'
import { Sidebar, AppMain, TagsView, Navbar} from './components'
import {useStore} from 'vuex'
const store = useStore()
const classObj = computed(() => {
  return {
        hideSidebar: store.getters.sidebar.opened,
        openSidebar: !store.getters.sidebar.opened,
        withoutAnimation: store.getters.sidebar.withoutAnimation,
        mobile: store.state.app.device === 'mobile'
	}
})
</script>
<style lang="less" scoped>
  .app-wrapper {
    // @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - 200px);
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
