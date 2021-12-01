<!--
 * @Description: 
 * @version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-22 14:36:36
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2021-11-29 14:14:59
-->
<template>
  <div>
      <!-- :class="settings.sideTheme -->
    <el-scrollbar >
        <el-menu
            :collapse="isCollapse"
            mode="vertical"
            class="el-menu-vertical-demo"
            background-color="#304156"
            text-color="#bfcbd9"
            :unique-opened="true"
            :collapse-transition="false"
            @select="selectMenu"
        >
            <sidebar-item
                v-for="(route, index) in sidebarRouters"
                :key="route.path  + index"
                :item="route"
                :base-path="route.path"
            />
        </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts" name="Sider">
import { computed, PropType } from 'vue'
import SidebarItem from "./SidebarItem.vue";
import { isExternal } from '@/utils/validate'
import { useRoute, useRouter } from 'vue-router'
const { meta, path } = useRoute()
const { currentRoute, push } = useRouter()
import {useStore} from 'vuex'
const store = useStore()
const isCollapse = computed(() => {
    return store.getters.sidebar.opened;
})
const activeMenu = computed(() => {
    // if set path, the sidebar will highlight the path you set
    if (meta.activeMenu) {
        return meta.activeMenu;
    }
    return path;
})
function selectMenu(path: string) {
  if (currentRoute.value.fullPath === path) return
  if (isExternal(path)) {
    window.open(path)
  } else {
    push(path)
  }
}
const sidebarRouters = computed(() => {
    return store.state.permission.sidebarRouters
})
// const sidebarRouters =
// [
//     {
//         "path": "/redirect",
//         "component": {
//             "name": "Layout",
//             "components": {
//                 "AppMain": {
//                     "name": "AppMain",
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-078753dd",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/AppMain.vue",
//                     "_Ctor": {}
//                 },
//                 "Navbar": {
//                     "components": {
//                         "Breadcrumb": {
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-b50ef614",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Breadcrumb/index.vue",
//                             "_Ctor": {}
//                         },
//                         "TopNav": {
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/TopNav/index.vue"
//                         },
//                         "Hamburger": {
//                             "name": "Hamburger",
//                             "props": {
//                                 "isActive": {
//                                     "default": false
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-4e6f274c",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Hamburger/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Screenfull": {
//                             "name": "Screenfull",
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-29234bee",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/Screenfull/index.vue",
//                             "_Ctor": {}
//                         },
//                         "SizeSelect": {
//                             "computed": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/SizeSelect/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Search": {
//                             "name": "HeaderSearch",
//                             "computed": {},
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-032bd1f0",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/HeaderSearch/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiGit": {
//                             "name": "RuoYiGit",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Git/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiDoc": {
//                             "name": "RuoYiDoc",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Doc/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "setting": {},
//                         "topNav": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-d16d6306",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Navbar.vue",
//                     "_Ctor": {}
//                 },
//                 "RightPanel": {
//                     "name": "RightPanel",
//                     "props": {
//                         "clickNotClose": {
//                             "default": false
//                         },
//                         "buttonTop": {
//                             "default": 250
//                         }
//                     },
//                     "computed": {
//                         "show": {}
//                     },
//                     "watch": {},
//                     "beforeDestroy": [
//                         null,
//                         null
//                     ],
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-1e488bfb",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "__file": "src/components/RightPanel/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Settings": {
//                     "components": {
//                         "ThemePicker": {
//                             "computed": {},
//                             "watch": {
//                                 "defaultTheme": {
//                                     "immediate": true,
//                                     "user": true
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/ThemePicker/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "fixedHeader": {},
//                         "topNav": {},
//                         "tagsView": {},
//                         "sidebarLogo": {},
//                         "dynamicTitle": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [
//                         null
//                     ],
//                     "_compiled": true,
//                     "_scopeId": "data-v-126b135a",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Settings/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Sidebar": {
//                     "components": {
//                         "SidebarItem": {
//                             "name": "SidebarItem",
//                             "components": {
//                                 "Item": {
//                                     "name": "MenuItem",
//                                     "functional": true,
//                                     "props": {
//                                         "icon": {
//                                             "default": ""
//                                         },
//                                         "title": {
//                                             "default": ""
//                                         }
//                                     },
//                                     "__file": "src/layout/components/Sidebar/Item.vue",
//                                     "_Ctor": {}
//                                 },
//                                 "AppLink": {
//                                     "props": {
//                                         "to": {
//                                             "type": [
//                                                 null,
//                                                 null
//                                             ],
//                                             "required": true
//                                         }
//                                     },
//                                     "computed": {},
//                                     "methods": {},
//                                     "staticRenderFns": [],
//                                     "_compiled": true,
//                                     "beforeCreate": [
//                                         null
//                                     ],
//                                     "beforeDestroy": [
//                                         null
//                                     ],
//                                     "__file": "src/layout/components/Sidebar/Link.vue",
//                                     "_Ctor": {}
//                                 }
//                             },
//                             "mixins": [
//                                 {
//                                     "computed": {},
//                                     "methods": {}
//                                 }
//                             ],
//                             "props": {
//                                 "item": {
//                                     "required": true
//                                 },
//                                 "isNest": {
//                                     "default": false
//                                 },
//                                 "basePath": {
//                                     "default": ""
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/SidebarItem.vue",
//                             "_Ctor": {}
//                         },
//                         "Logo": {
//                             "name": "SidebarLogo",
//                             "props": {
//                                 "collapse": {
//                                     "required": true
//                                 }
//                             },
//                             "computed": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-6494804b",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/Logo.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Sidebar/index.vue",
//                     "_Ctor": {}
//                 },
//                 "TagsView": {
//                     "components": {
//                         "ScrollPane": {
//                             "name": "ScrollPane",
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-be6b7bae",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/TagsView/ScrollPane.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "watch": {},
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-fac8ca64",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/TagsView/index.vue",
//                     "_Ctor": {}
//                 }
//             },
//             "mixins": [
//                 {
//                     "watch": {},
//                     "methods": {}
//                 }
//             ],
//             "computed": {},
//             "methods": {},
//             "staticRenderFns": [],
//             "_compiled": true,
//             "_scopeId": "data-v-13877386",
//             "beforeCreate": [
//                 null
//             ],
//             "beforeDestroy": [
//                 null
//             ],
//             "__file": "src/layout/index.vue",
//             "_Ctor": {}
//         },
//         "hidden": true,
//         "children": [
//             {
//                 "path": "/redirect/:path(.*)"
//             }
//         ]
//     },
//     {
//         "path": "/login",
//         "hidden": true
//     },
//     {
//         "path": "/register",
//         "hidden": true
//     },
//     {
//         "path": "/404",
//         "hidden": true
//     },
//     {
//         "path": "/401",
//         "hidden": true
//     },
//     {
//         "path": "",
//         "component": {
//             "name": "Layout",
//             "components": {
//                 "AppMain": {
//                     "name": "AppMain",
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-078753dd",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/AppMain.vue",
//                     "_Ctor": {}
//                 },
//                 "Navbar": {
//                     "components": {
//                         "Breadcrumb": {
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-b50ef614",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Breadcrumb/index.vue",
//                             "_Ctor": {}
//                         },
//                         "TopNav": {
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/TopNav/index.vue"
//                         },
//                         "Hamburger": {
//                             "name": "Hamburger",
//                             "props": {
//                                 "isActive": {
//                                     "default": false
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-4e6f274c",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Hamburger/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Screenfull": {
//                             "name": "Screenfull",
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-29234bee",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/Screenfull/index.vue",
//                             "_Ctor": {}
//                         },
//                         "SizeSelect": {
//                             "computed": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/SizeSelect/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Search": {
//                             "name": "HeaderSearch",
//                             "computed": {},
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-032bd1f0",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/HeaderSearch/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiGit": {
//                             "name": "RuoYiGit",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Git/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiDoc": {
//                             "name": "RuoYiDoc",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Doc/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "setting": {},
//                         "topNav": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-d16d6306",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Navbar.vue",
//                     "_Ctor": {}
//                 },
//                 "RightPanel": {
//                     "name": "RightPanel",
//                     "props": {
//                         "clickNotClose": {
//                             "default": false
//                         },
//                         "buttonTop": {
//                             "default": 250
//                         }
//                     },
//                     "computed": {
//                         "show": {}
//                     },
//                     "watch": {},
//                     "beforeDestroy": [
//                         null,
//                         null
//                     ],
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-1e488bfb",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "__file": "src/components/RightPanel/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Settings": {
//                     "components": {
//                         "ThemePicker": {
//                             "computed": {},
//                             "watch": {
//                                 "defaultTheme": {
//                                     "immediate": true,
//                                     "user": true
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/ThemePicker/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "fixedHeader": {},
//                         "topNav": {},
//                         "tagsView": {},
//                         "sidebarLogo": {},
//                         "dynamicTitle": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [
//                         null
//                     ],
//                     "_compiled": true,
//                     "_scopeId": "data-v-126b135a",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Settings/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Sidebar": {
//                     "components": {
//                         "SidebarItem": {
//                             "name": "SidebarItem",
//                             "components": {
//                                 "Item": {
//                                     "name": "MenuItem",
//                                     "functional": true,
//                                     "props": {
//                                         "icon": {
//                                             "default": ""
//                                         },
//                                         "title": {
//                                             "default": ""
//                                         }
//                                     },
//                                     "__file": "src/layout/components/Sidebar/Item.vue",
//                                     "_Ctor": {}
//                                 },
//                                 "AppLink": {
//                                     "props": {
//                                         "to": {
//                                             "type": [
//                                                 null,
//                                                 null
//                                             ],
//                                             "required": true
//                                         }
//                                     },
//                                     "computed": {},
//                                     "methods": {},
//                                     "staticRenderFns": [],
//                                     "_compiled": true,
//                                     "beforeCreate": [
//                                         null
//                                     ],
//                                     "beforeDestroy": [
//                                         null
//                                     ],
//                                     "__file": "src/layout/components/Sidebar/Link.vue",
//                                     "_Ctor": {}
//                                 }
//                             },
//                             "mixins": [
//                                 {
//                                     "computed": {},
//                                     "methods": {}
//                                 }
//                             ],
//                             "props": {
//                                 "item": {
//                                     "required": true
//                                 },
//                                 "isNest": {
//                                     "default": false
//                                 },
//                                 "basePath": {
//                                     "default": ""
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/SidebarItem.vue",
//                             "_Ctor": {}
//                         },
//                         "Logo": {
//                             "name": "SidebarLogo",
//                             "props": {
//                                 "collapse": {
//                                     "required": true
//                                 }
//                             },
//                             "computed": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-6494804b",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/Logo.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Sidebar/index.vue",
//                     "_Ctor": {}
//                 },
//                 "TagsView": {
//                     "components": {
//                         "ScrollPane": {
//                             "name": "ScrollPane",
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-be6b7bae",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/TagsView/ScrollPane.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "watch": {},
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-fac8ca64",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/TagsView/index.vue",
//                     "_Ctor": {}
//                 }
//             },
//             "mixins": [
//                 {
//                     "watch": {},
//                     "methods": {}
//                 }
//             ],
//             "computed": {},
//             "methods": {},
//             "staticRenderFns": [],
//             "_compiled": true,
//             "_scopeId": "data-v-13877386",
//             "beforeCreate": [
//                 null
//             ],
//             "beforeDestroy": [
//                 null
//             ],
//             "__file": "src/layout/index.vue",
//             "_Ctor": {}
//         },
//         "redirect": "index",
//         "children": [
//             {
//                 "path": "index",
//                 "name": "Index",
//                 "meta": {
//                     "title": "首页",
//                     "icon": "dashboard",
//                     "affix": true
//                 }
//             }
//         ]
//     },
//     {
//         "path": "/user",
//         "component": {
//             "name": "Layout",
//             "components": {
//                 "AppMain": {
//                     "name": "AppMain",
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-078753dd",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/AppMain.vue",
//                     "_Ctor": {}
//                 },
//                 "Navbar": {
//                     "components": {
//                         "Breadcrumb": {
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-b50ef614",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Breadcrumb/index.vue",
//                             "_Ctor": {}
//                         },
//                         "TopNav": {
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/TopNav/index.vue"
//                         },
//                         "Hamburger": {
//                             "name": "Hamburger",
//                             "props": {
//                                 "isActive": {
//                                     "default": false
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-4e6f274c",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Hamburger/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Screenfull": {
//                             "name": "Screenfull",
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-29234bee",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/Screenfull/index.vue",
//                             "_Ctor": {}
//                         },
//                         "SizeSelect": {
//                             "computed": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/SizeSelect/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Search": {
//                             "name": "HeaderSearch",
//                             "computed": {},
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-032bd1f0",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/HeaderSearch/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiGit": {
//                             "name": "RuoYiGit",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Git/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiDoc": {
//                             "name": "RuoYiDoc",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Doc/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "setting": {},
//                         "topNav": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-d16d6306",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Navbar.vue",
//                     "_Ctor": {}
//                 },
//                 "RightPanel": {
//                     "name": "RightPanel",
//                     "props": {
//                         "clickNotClose": {
//                             "default": false
//                         },
//                         "buttonTop": {
//                             "default": 250
//                         }
//                     },
//                     "computed": {
//                         "show": {}
//                     },
//                     "watch": {},
//                     "beforeDestroy": [
//                         null,
//                         null
//                     ],
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-1e488bfb",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "__file": "src/components/RightPanel/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Settings": {
//                     "components": {
//                         "ThemePicker": {
//                             "computed": {},
//                             "watch": {
//                                 "defaultTheme": {
//                                     "immediate": true,
//                                     "user": true
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/ThemePicker/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "fixedHeader": {},
//                         "topNav": {},
//                         "tagsView": {},
//                         "sidebarLogo": {},
//                         "dynamicTitle": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [
//                         null
//                     ],
//                     "_compiled": true,
//                     "_scopeId": "data-v-126b135a",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Settings/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Sidebar": {
//                     "components": {
//                         "SidebarItem": {
//                             "name": "SidebarItem",
//                             "components": {
//                                 "Item": {
//                                     "name": "MenuItem",
//                                     "functional": true,
//                                     "props": {
//                                         "icon": {
//                                             "default": ""
//                                         },
//                                         "title": {
//                                             "default": ""
//                                         }
//                                     },
//                                     "__file": "src/layout/components/Sidebar/Item.vue",
//                                     "_Ctor": {}
//                                 },
//                                 "AppLink": {
//                                     "props": {
//                                         "to": {
//                                             "type": [
//                                                 null,
//                                                 null
//                                             ],
//                                             "required": true
//                                         }
//                                     },
//                                     "computed": {},
//                                     "methods": {},
//                                     "staticRenderFns": [],
//                                     "_compiled": true,
//                                     "beforeCreate": [
//                                         null
//                                     ],
//                                     "beforeDestroy": [
//                                         null
//                                     ],
//                                     "__file": "src/layout/components/Sidebar/Link.vue",
//                                     "_Ctor": {}
//                                 }
//                             },
//                             "mixins": [
//                                 {
//                                     "computed": {},
//                                     "methods": {}
//                                 }
//                             ],
//                             "props": {
//                                 "item": {
//                                     "required": true
//                                 },
//                                 "isNest": {
//                                     "default": false
//                                 },
//                                 "basePath": {
//                                     "default": ""
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/SidebarItem.vue",
//                             "_Ctor": {}
//                         },
//                         "Logo": {
//                             "name": "SidebarLogo",
//                             "props": {
//                                 "collapse": {
//                                     "required": true
//                                 }
//                             },
//                             "computed": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-6494804b",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/Logo.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Sidebar/index.vue",
//                     "_Ctor": {}
//                 },
//                 "TagsView": {
//                     "components": {
//                         "ScrollPane": {
//                             "name": "ScrollPane",
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-be6b7bae",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/TagsView/ScrollPane.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "watch": {},
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-fac8ca64",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/TagsView/index.vue",
//                     "_Ctor": {}
//                 }
//             },
//             "mixins": [
//                 {
//                     "watch": {},
//                     "methods": {}
//                 }
//             ],
//             "computed": {},
//             "methods": {},
//             "staticRenderFns": [],
//             "_compiled": true,
//             "_scopeId": "data-v-13877386",
//             "beforeCreate": [
//                 null
//             ],
//             "beforeDestroy": [
//                 null
//             ],
//             "__file": "src/layout/index.vue",
//             "_Ctor": {}
//         },
//         "hidden": true,
//         "redirect": "noredirect",
//         "children": [
//             {
//                 "path": "profile",
//                 "name": "Profile",
//                 "meta": {
//                     "title": "个人中心",
//                     "icon": "user"
//                 }
//             }
//         ]
//     },
//     {
//         "path": "/system/user-auth",
//         "component": {
//             "name": "Layout",
//             "components": {
//                 "AppMain": {
//                     "name": "AppMain",
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-078753dd",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/AppMain.vue",
//                     "_Ctor": {}
//                 },
//                 "Navbar": {
//                     "components": {
//                         "Breadcrumb": {
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-b50ef614",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Breadcrumb/index.vue",
//                             "_Ctor": {}
//                         },
//                         "TopNav": {
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/TopNav/index.vue"
//                         },
//                         "Hamburger": {
//                             "name": "Hamburger",
//                             "props": {
//                                 "isActive": {
//                                     "default": false
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-4e6f274c",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Hamburger/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Screenfull": {
//                             "name": "Screenfull",
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-29234bee",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/Screenfull/index.vue",
//                             "_Ctor": {}
//                         },
//                         "SizeSelect": {
//                             "computed": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/SizeSelect/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Search": {
//                             "name": "HeaderSearch",
//                             "computed": {},
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-032bd1f0",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/HeaderSearch/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiGit": {
//                             "name": "RuoYiGit",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Git/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiDoc": {
//                             "name": "RuoYiDoc",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Doc/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "setting": {},
//                         "topNav": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-d16d6306",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Navbar.vue",
//                     "_Ctor": {}
//                 },
//                 "RightPanel": {
//                     "name": "RightPanel",
//                     "props": {
//                         "clickNotClose": {
//                             "default": false
//                         },
//                         "buttonTop": {
//                             "default": 250
//                         }
//                     },
//                     "computed": {
//                         "show": {}
//                     },
//                     "watch": {},
//                     "beforeDestroy": [
//                         null,
//                         null
//                     ],
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-1e488bfb",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "__file": "src/components/RightPanel/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Settings": {
//                     "components": {
//                         "ThemePicker": {
//                             "computed": {},
//                             "watch": {
//                                 "defaultTheme": {
//                                     "immediate": true,
//                                     "user": true
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/ThemePicker/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "fixedHeader": {},
//                         "topNav": {},
//                         "tagsView": {},
//                         "sidebarLogo": {},
//                         "dynamicTitle": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [
//                         null
//                     ],
//                     "_compiled": true,
//                     "_scopeId": "data-v-126b135a",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Settings/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Sidebar": {
//                     "components": {
//                         "SidebarItem": {
//                             "name": "SidebarItem",
//                             "components": {
//                                 "Item": {
//                                     "name": "MenuItem",
//                                     "functional": true,
//                                     "props": {
//                                         "icon": {
//                                             "default": ""
//                                         },
//                                         "title": {
//                                             "default": ""
//                                         }
//                                     },
//                                     "__file": "src/layout/components/Sidebar/Item.vue",
//                                     "_Ctor": {}
//                                 },
//                                 "AppLink": {
//                                     "props": {
//                                         "to": {
//                                             "type": [
//                                                 null,
//                                                 null
//                                             ],
//                                             "required": true
//                                         }
//                                     },
//                                     "computed": {},
//                                     "methods": {},
//                                     "staticRenderFns": [],
//                                     "_compiled": true,
//                                     "beforeCreate": [
//                                         null
//                                     ],
//                                     "beforeDestroy": [
//                                         null
//                                     ],
//                                     "__file": "src/layout/components/Sidebar/Link.vue",
//                                     "_Ctor": {}
//                                 }
//                             },
//                             "mixins": [
//                                 {
//                                     "computed": {},
//                                     "methods": {}
//                                 }
//                             ],
//                             "props": {
//                                 "item": {
//                                     "required": true
//                                 },
//                                 "isNest": {
//                                     "default": false
//                                 },
//                                 "basePath": {
//                                     "default": ""
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/SidebarItem.vue",
//                             "_Ctor": {}
//                         },
//                         "Logo": {
//                             "name": "SidebarLogo",
//                             "props": {
//                                 "collapse": {
//                                     "required": true
//                                 }
//                             },
//                             "computed": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-6494804b",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/Logo.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Sidebar/index.vue",
//                     "_Ctor": {}
//                 },
//                 "TagsView": {
//                     "components": {
//                         "ScrollPane": {
//                             "name": "ScrollPane",
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-be6b7bae",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/TagsView/ScrollPane.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "watch": {},
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-fac8ca64",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/TagsView/index.vue",
//                     "_Ctor": {}
//                 }
//             },
//             "mixins": [
//                 {
//                     "watch": {},
//                     "methods": {}
//                 }
//             ],
//             "computed": {},
//             "methods": {},
//             "staticRenderFns": [],
//             "_compiled": true,
//             "_scopeId": "data-v-13877386",
//             "beforeCreate": [
//                 null
//             ],
//             "beforeDestroy": [
//                 null
//             ],
//             "__file": "src/layout/index.vue",
//             "_Ctor": {}
//         },
//         "hidden": true,
//         "children": [
//             {
//                 "path": "role/:userId(\\d+)",
//                 "name": "AuthRole",
//                 "meta": {
//                     "title": "分配角色",
//                     "activeMenu": "/system/user"
//                 }
//             }
//         ]
//     },
//     {
//         "path": "/system/role-auth",
//         "component": {
//             "name": "Layout",
//             "components": {
//                 "AppMain": {
//                     "name": "AppMain",
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-078753dd",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/AppMain.vue",
//                     "_Ctor": {}
//                 },
//                 "Navbar": {
//                     "components": {
//                         "Breadcrumb": {
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-b50ef614",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Breadcrumb/index.vue",
//                             "_Ctor": {}
//                         },
//                         "TopNav": {
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/TopNav/index.vue"
//                         },
//                         "Hamburger": {
//                             "name": "Hamburger",
//                             "props": {
//                                 "isActive": {
//                                     "default": false
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-4e6f274c",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Hamburger/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Screenfull": {
//                             "name": "Screenfull",
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-29234bee",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/Screenfull/index.vue",
//                             "_Ctor": {}
//                         },
//                         "SizeSelect": {
//                             "computed": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/SizeSelect/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Search": {
//                             "name": "HeaderSearch",
//                             "computed": {},
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-032bd1f0",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/HeaderSearch/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiGit": {
//                             "name": "RuoYiGit",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Git/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiDoc": {
//                             "name": "RuoYiDoc",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Doc/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "setting": {},
//                         "topNav": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-d16d6306",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Navbar.vue",
//                     "_Ctor": {}
//                 },
//                 "RightPanel": {
//                     "name": "RightPanel",
//                     "props": {
//                         "clickNotClose": {
//                             "default": false
//                         },
//                         "buttonTop": {
//                             "default": 250
//                         }
//                     },
//                     "computed": {
//                         "show": {}
//                     },
//                     "watch": {},
//                     "beforeDestroy": [
//                         null,
//                         null
//                     ],
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-1e488bfb",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "__file": "src/components/RightPanel/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Settings": {
//                     "components": {
//                         "ThemePicker": {
//                             "computed": {},
//                             "watch": {
//                                 "defaultTheme": {
//                                     "immediate": true,
//                                     "user": true
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/ThemePicker/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "fixedHeader": {},
//                         "topNav": {},
//                         "tagsView": {},
//                         "sidebarLogo": {},
//                         "dynamicTitle": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [
//                         null
//                     ],
//                     "_compiled": true,
//                     "_scopeId": "data-v-126b135a",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Settings/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Sidebar": {
//                     "components": {
//                         "SidebarItem": {
//                             "name": "SidebarItem",
//                             "components": {
//                                 "Item": {
//                                     "name": "MenuItem",
//                                     "functional": true,
//                                     "props": {
//                                         "icon": {
//                                             "default": ""
//                                         },
//                                         "title": {
//                                             "default": ""
//                                         }
//                                     },
//                                     "__file": "src/layout/components/Sidebar/Item.vue",
//                                     "_Ctor": {}
//                                 },
//                                 "AppLink": {
//                                     "props": {
//                                         "to": {
//                                             "type": [
//                                                 null,
//                                                 null
//                                             ],
//                                             "required": true
//                                         }
//                                     },
//                                     "computed": {},
//                                     "methods": {},
//                                     "staticRenderFns": [],
//                                     "_compiled": true,
//                                     "beforeCreate": [
//                                         null
//                                     ],
//                                     "beforeDestroy": [
//                                         null
//                                     ],
//                                     "__file": "src/layout/components/Sidebar/Link.vue",
//                                     "_Ctor": {}
//                                 }
//                             },
//                             "mixins": [
//                                 {
//                                     "computed": {},
//                                     "methods": {}
//                                 }
//                             ],
//                             "props": {
//                                 "item": {
//                                     "required": true
//                                 },
//                                 "isNest": {
//                                     "default": false
//                                 },
//                                 "basePath": {
//                                     "default": ""
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/SidebarItem.vue",
//                             "_Ctor": {}
//                         },
//                         "Logo": {
//                             "name": "SidebarLogo",
//                             "props": {
//                                 "collapse": {
//                                     "required": true
//                                 }
//                             },
//                             "computed": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-6494804b",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/Logo.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Sidebar/index.vue",
//                     "_Ctor": {}
//                 },
//                 "TagsView": {
//                     "components": {
//                         "ScrollPane": {
//                             "name": "ScrollPane",
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-be6b7bae",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/TagsView/ScrollPane.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "watch": {},
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-fac8ca64",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/TagsView/index.vue",
//                     "_Ctor": {}
//                 }
//             },
//             "mixins": [
//                 {
//                     "watch": {},
//                     "methods": {}
//                 }
//             ],
//             "computed": {},
//             "methods": {},
//             "staticRenderFns": [],
//             "_compiled": true,
//             "_scopeId": "data-v-13877386",
//             "beforeCreate": [
//                 null
//             ],
//             "beforeDestroy": [
//                 null
//             ],
//             "__file": "src/layout/index.vue",
//             "_Ctor": {}
//         },
//         "hidden": true,
//         "children": [
//             {
//                 "path": "user/:roleId(\\d+)",
//                 "name": "AuthUser",
//                 "meta": {
//                     "title": "分配用户",
//                     "activeMenu": "/system/role"
//                 }
//             }
//         ]
//     },
//     {
//         "path": "/system/dict-data",
//         "component": {
//             "name": "Layout",
//             "components": {
//                 "AppMain": {
//                     "name": "AppMain",
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-078753dd",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/AppMain.vue",
//                     "_Ctor": {}
//                 },
//                 "Navbar": {
//                     "components": {
//                         "Breadcrumb": {
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-b50ef614",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Breadcrumb/index.vue",
//                             "_Ctor": {}
//                         },
//                         "TopNav": {
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/TopNav/index.vue"
//                         },
//                         "Hamburger": {
//                             "name": "Hamburger",
//                             "props": {
//                                 "isActive": {
//                                     "default": false
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-4e6f274c",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Hamburger/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Screenfull": {
//                             "name": "Screenfull",
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-29234bee",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/Screenfull/index.vue",
//                             "_Ctor": {}
//                         },
//                         "SizeSelect": {
//                             "computed": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/SizeSelect/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Search": {
//                             "name": "HeaderSearch",
//                             "computed": {},
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-032bd1f0",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/HeaderSearch/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiGit": {
//                             "name": "RuoYiGit",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Git/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiDoc": {
//                             "name": "RuoYiDoc",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Doc/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "setting": {},
//                         "topNav": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-d16d6306",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Navbar.vue",
//                     "_Ctor": {}
//                 },
//                 "RightPanel": {
//                     "name": "RightPanel",
//                     "props": {
//                         "clickNotClose": {
//                             "default": false
//                         },
//                         "buttonTop": {
//                             "default": 250
//                         }
//                     },
//                     "computed": {
//                         "show": {}
//                     },
//                     "watch": {},
//                     "beforeDestroy": [
//                         null,
//                         null
//                     ],
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-1e488bfb",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "__file": "src/components/RightPanel/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Settings": {
//                     "components": {
//                         "ThemePicker": {
//                             "computed": {},
//                             "watch": {
//                                 "defaultTheme": {
//                                     "immediate": true,
//                                     "user": true
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/ThemePicker/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "fixedHeader": {},
//                         "topNav": {},
//                         "tagsView": {},
//                         "sidebarLogo": {},
//                         "dynamicTitle": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [
//                         null
//                     ],
//                     "_compiled": true,
//                     "_scopeId": "data-v-126b135a",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Settings/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Sidebar": {
//                     "components": {
//                         "SidebarItem": {
//                             "name": "SidebarItem",
//                             "components": {
//                                 "Item": {
//                                     "name": "MenuItem",
//                                     "functional": true,
//                                     "props": {
//                                         "icon": {
//                                             "default": ""
//                                         },
//                                         "title": {
//                                             "default": ""
//                                         }
//                                     },
//                                     "__file": "src/layout/components/Sidebar/Item.vue",
//                                     "_Ctor": {}
//                                 },
//                                 "AppLink": {
//                                     "props": {
//                                         "to": {
//                                             "type": [
//                                                 null,
//                                                 null
//                                             ],
//                                             "required": true
//                                         }
//                                     },
//                                     "computed": {},
//                                     "methods": {},
//                                     "staticRenderFns": [],
//                                     "_compiled": true,
//                                     "beforeCreate": [
//                                         null
//                                     ],
//                                     "beforeDestroy": [
//                                         null
//                                     ],
//                                     "__file": "src/layout/components/Sidebar/Link.vue",
//                                     "_Ctor": {}
//                                 }
//                             },
//                             "mixins": [
//                                 {
//                                     "computed": {},
//                                     "methods": {}
//                                 }
//                             ],
//                             "props": {
//                                 "item": {
//                                     "required": true
//                                 },
//                                 "isNest": {
//                                     "default": false
//                                 },
//                                 "basePath": {
//                                     "default": ""
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/SidebarItem.vue",
//                             "_Ctor": {}
//                         },
//                         "Logo": {
//                             "name": "SidebarLogo",
//                             "props": {
//                                 "collapse": {
//                                     "required": true
//                                 }
//                             },
//                             "computed": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-6494804b",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/Logo.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Sidebar/index.vue",
//                     "_Ctor": {}
//                 },
//                 "TagsView": {
//                     "components": {
//                         "ScrollPane": {
//                             "name": "ScrollPane",
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-be6b7bae",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/TagsView/ScrollPane.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "watch": {},
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-fac8ca64",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/TagsView/index.vue",
//                     "_Ctor": {}
//                 }
//             },
//             "mixins": [
//                 {
//                     "watch": {},
//                     "methods": {}
//                 }
//             ],
//             "computed": {},
//             "methods": {},
//             "staticRenderFns": [],
//             "_compiled": true,
//             "_scopeId": "data-v-13877386",
//             "beforeCreate": [
//                 null
//             ],
//             "beforeDestroy": [
//                 null
//             ],
//             "__file": "src/layout/index.vue",
//             "_Ctor": {}
//         },
//         "hidden": true,
//         "children": [
//             {
//                 "path": "index/:dictId(\\d+)",
//                 "name": "Data",
//                 "meta": {
//                     "title": "字典数据",
//                     "activeMenu": "/system/dict"
//                 }
//             }
//         ]
//     },
//     {
//         "path": "/monitor/job-log",
//         "component": {
//             "name": "Layout",
//             "components": {
//                 "AppMain": {
//                     "name": "AppMain",
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-078753dd",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/AppMain.vue",
//                     "_Ctor": {}
//                 },
//                 "Navbar": {
//                     "components": {
//                         "Breadcrumb": {
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-b50ef614",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Breadcrumb/index.vue",
//                             "_Ctor": {}
//                         },
//                         "TopNav": {
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/TopNav/index.vue"
//                         },
//                         "Hamburger": {
//                             "name": "Hamburger",
//                             "props": {
//                                 "isActive": {
//                                     "default": false
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-4e6f274c",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Hamburger/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Screenfull": {
//                             "name": "Screenfull",
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-29234bee",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/Screenfull/index.vue",
//                             "_Ctor": {}
//                         },
//                         "SizeSelect": {
//                             "computed": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/SizeSelect/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Search": {
//                             "name": "HeaderSearch",
//                             "computed": {},
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-032bd1f0",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/HeaderSearch/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiGit": {
//                             "name": "RuoYiGit",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Git/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiDoc": {
//                             "name": "RuoYiDoc",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Doc/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "setting": {},
//                         "topNav": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-d16d6306",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Navbar.vue",
//                     "_Ctor": {}
//                 },
//                 "RightPanel": {
//                     "name": "RightPanel",
//                     "props": {
//                         "clickNotClose": {
//                             "default": false
//                         },
//                         "buttonTop": {
//                             "default": 250
//                         }
//                     },
//                     "computed": {
//                         "show": {}
//                     },
//                     "watch": {},
//                     "beforeDestroy": [
//                         null,
//                         null
//                     ],
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-1e488bfb",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "__file": "src/components/RightPanel/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Settings": {
//                     "components": {
//                         "ThemePicker": {
//                             "computed": {},
//                             "watch": {
//                                 "defaultTheme": {
//                                     "immediate": true,
//                                     "user": true
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/ThemePicker/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "fixedHeader": {},
//                         "topNav": {},
//                         "tagsView": {},
//                         "sidebarLogo": {},
//                         "dynamicTitle": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [
//                         null
//                     ],
//                     "_compiled": true,
//                     "_scopeId": "data-v-126b135a",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Settings/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Sidebar": {
//                     "components": {
//                         "SidebarItem": {
//                             "name": "SidebarItem",
//                             "components": {
//                                 "Item": {
//                                     "name": "MenuItem",
//                                     "functional": true,
//                                     "props": {
//                                         "icon": {
//                                             "default": ""
//                                         },
//                                         "title": {
//                                             "default": ""
//                                         }
//                                     },
//                                     "__file": "src/layout/components/Sidebar/Item.vue",
//                                     "_Ctor": {}
//                                 },
//                                 "AppLink": {
//                                     "props": {
//                                         "to": {
//                                             "type": [
//                                                 null,
//                                                 null
//                                             ],
//                                             "required": true
//                                         }
//                                     },
//                                     "computed": {},
//                                     "methods": {},
//                                     "staticRenderFns": [],
//                                     "_compiled": true,
//                                     "beforeCreate": [
//                                         null
//                                     ],
//                                     "beforeDestroy": [
//                                         null
//                                     ],
//                                     "__file": "src/layout/components/Sidebar/Link.vue",
//                                     "_Ctor": {}
//                                 }
//                             },
//                             "mixins": [
//                                 {
//                                     "computed": {},
//                                     "methods": {}
//                                 }
//                             ],
//                             "props": {
//                                 "item": {
//                                     "required": true
//                                 },
//                                 "isNest": {
//                                     "default": false
//                                 },
//                                 "basePath": {
//                                     "default": ""
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/SidebarItem.vue",
//                             "_Ctor": {}
//                         },
//                         "Logo": {
//                             "name": "SidebarLogo",
//                             "props": {
//                                 "collapse": {
//                                     "required": true
//                                 }
//                             },
//                             "computed": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-6494804b",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/Logo.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Sidebar/index.vue",
//                     "_Ctor": {}
//                 },
//                 "TagsView": {
//                     "components": {
//                         "ScrollPane": {
//                             "name": "ScrollPane",
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-be6b7bae",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/TagsView/ScrollPane.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "watch": {},
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-fac8ca64",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/TagsView/index.vue",
//                     "_Ctor": {}
//                 }
//             },
//             "mixins": [
//                 {
//                     "watch": {},
//                     "methods": {}
//                 }
//             ],
//             "computed": {},
//             "methods": {},
//             "staticRenderFns": [],
//             "_compiled": true,
//             "_scopeId": "data-v-13877386",
//             "beforeCreate": [
//                 null
//             ],
//             "beforeDestroy": [
//                 null
//             ],
//             "__file": "src/layout/index.vue",
//             "_Ctor": {}
//         },
//         "hidden": true,
//         "children": [
//             {
//                 "path": "index",
//                 "name": "JobLog",
//                 "meta": {
//                     "title": "调度日志",
//                     "activeMenu": "/monitor/job"
//                 }
//             }
//         ]
//     },
//     {
//         "path": "/tool/gen-edit",
//         "component": {
//             "name": "Layout",
//             "components": {
//                 "AppMain": {
//                     "name": "AppMain",
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-078753dd",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/AppMain.vue",
//                     "_Ctor": {}
//                 },
//                 "Navbar": {
//                     "components": {
//                         "Breadcrumb": {
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-b50ef614",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Breadcrumb/index.vue",
//                             "_Ctor": {}
//                         },
//                         "TopNav": {
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/TopNav/index.vue"
//                         },
//                         "Hamburger": {
//                             "name": "Hamburger",
//                             "props": {
//                                 "isActive": {
//                                     "default": false
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-4e6f274c",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Hamburger/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Screenfull": {
//                             "name": "Screenfull",
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-29234bee",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/Screenfull/index.vue",
//                             "_Ctor": {}
//                         },
//                         "SizeSelect": {
//                             "computed": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/SizeSelect/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Search": {
//                             "name": "HeaderSearch",
//                             "computed": {},
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-032bd1f0",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/HeaderSearch/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiGit": {
//                             "name": "RuoYiGit",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Git/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiDoc": {
//                             "name": "RuoYiDoc",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Doc/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "setting": {},
//                         "topNav": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-d16d6306",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Navbar.vue",
//                     "_Ctor": {}
//                 },
//                 "RightPanel": {
//                     "name": "RightPanel",
//                     "props": {
//                         "clickNotClose": {
//                             "default": false
//                         },
//                         "buttonTop": {
//                             "default": 250
//                         }
//                     },
//                     "computed": {
//                         "show": {}
//                     },
//                     "watch": {},
//                     "beforeDestroy": [
//                         null,
//                         null
//                     ],
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-1e488bfb",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "__file": "src/components/RightPanel/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Settings": {
//                     "components": {
//                         "ThemePicker": {
//                             "computed": {},
//                             "watch": {
//                                 "defaultTheme": {
//                                     "immediate": true,
//                                     "user": true
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/ThemePicker/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "fixedHeader": {},
//                         "topNav": {},
//                         "tagsView": {},
//                         "sidebarLogo": {},
//                         "dynamicTitle": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [
//                         null
//                     ],
//                     "_compiled": true,
//                     "_scopeId": "data-v-126b135a",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Settings/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Sidebar": {
//                     "components": {
//                         "SidebarItem": {
//                             "name": "SidebarItem",
//                             "components": {
//                                 "Item": {
//                                     "name": "MenuItem",
//                                     "functional": true,
//                                     "props": {
//                                         "icon": {
//                                             "default": ""
//                                         },
//                                         "title": {
//                                             "default": ""
//                                         }
//                                     },
//                                     "__file": "src/layout/components/Sidebar/Item.vue",
//                                     "_Ctor": {}
//                                 },
//                                 "AppLink": {
//                                     "props": {
//                                         "to": {
//                                             "type": [
//                                                 null,
//                                                 null
//                                             ],
//                                             "required": true
//                                         }
//                                     },
//                                     "computed": {},
//                                     "methods": {},
//                                     "staticRenderFns": [],
//                                     "_compiled": true,
//                                     "beforeCreate": [
//                                         null
//                                     ],
//                                     "beforeDestroy": [
//                                         null
//                                     ],
//                                     "__file": "src/layout/components/Sidebar/Link.vue",
//                                     "_Ctor": {}
//                                 }
//                             },
//                             "mixins": [
//                                 {
//                                     "computed": {},
//                                     "methods": {}
//                                 }
//                             ],
//                             "props": {
//                                 "item": {
//                                     "required": true
//                                 },
//                                 "isNest": {
//                                     "default": false
//                                 },
//                                 "basePath": {
//                                     "default": ""
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/SidebarItem.vue",
//                             "_Ctor": {}
//                         },
//                         "Logo": {
//                             "name": "SidebarLogo",
//                             "props": {
//                                 "collapse": {
//                                     "required": true
//                                 }
//                             },
//                             "computed": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-6494804b",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/Logo.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Sidebar/index.vue",
//                     "_Ctor": {}
//                 },
//                 "TagsView": {
//                     "components": {
//                         "ScrollPane": {
//                             "name": "ScrollPane",
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-be6b7bae",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/TagsView/ScrollPane.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "watch": {},
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-fac8ca64",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/TagsView/index.vue",
//                     "_Ctor": {}
//                 }
//             },
//             "mixins": [
//                 {
//                     "watch": {},
//                     "methods": {}
//                 }
//             ],
//             "computed": {},
//             "methods": {},
//             "staticRenderFns": [],
//             "_compiled": true,
//             "_scopeId": "data-v-13877386",
//             "beforeCreate": [
//                 null
//             ],
//             "beforeDestroy": [
//                 null
//             ],
//             "__file": "src/layout/index.vue",
//             "_Ctor": {}
//         },
//         "hidden": true,
//         "children": [
//             {
//                 "path": "index",
//                 "name": "GenEdit",
//                 "meta": {
//                     "title": "修改生成配置",
//                     "activeMenu": "/tool/gen"
//                 }
//             }
//         ]
//     },
//     {
//         "name": "System",
//         "path": "/system",
//         "hidden": false,
//         "redirect": "noRedirect",
//         "component": {
//             "name": "Layout",
//             "components": {
//                 "AppMain": {
//                     "name": "AppMain",
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-078753dd",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/AppMain.vue",
//                     "_Ctor": {}
//                 },
//                 "Navbar": {
//                     "components": {
//                         "Breadcrumb": {
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-b50ef614",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Breadcrumb/index.vue",
//                             "_Ctor": {}
//                         },
//                         "TopNav": {
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/TopNav/index.vue"
//                         },
//                         "Hamburger": {
//                             "name": "Hamburger",
//                             "props": {
//                                 "isActive": {
//                                     "default": false
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-4e6f274c",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Hamburger/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Screenfull": {
//                             "name": "Screenfull",
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-29234bee",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/Screenfull/index.vue",
//                             "_Ctor": {}
//                         },
//                         "SizeSelect": {
//                             "computed": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/SizeSelect/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Search": {
//                             "name": "HeaderSearch",
//                             "computed": {},
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-032bd1f0",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/HeaderSearch/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiGit": {
//                             "name": "RuoYiGit",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Git/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiDoc": {
//                             "name": "RuoYiDoc",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Doc/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "setting": {},
//                         "topNav": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-d16d6306",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Navbar.vue",
//                     "_Ctor": {}
//                 },
//                 "RightPanel": {
//                     "name": "RightPanel",
//                     "props": {
//                         "clickNotClose": {
//                             "default": false
//                         },
//                         "buttonTop": {
//                             "default": 250
//                         }
//                     },
//                     "computed": {
//                         "show": {}
//                     },
//                     "watch": {},
//                     "beforeDestroy": [
//                         null,
//                         null
//                     ],
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-1e488bfb",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "__file": "src/components/RightPanel/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Settings": {
//                     "components": {
//                         "ThemePicker": {
//                             "computed": {},
//                             "watch": {
//                                 "defaultTheme": {
//                                     "immediate": true,
//                                     "user": true
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/ThemePicker/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "fixedHeader": {},
//                         "topNav": {},
//                         "tagsView": {},
//                         "sidebarLogo": {},
//                         "dynamicTitle": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [
//                         null
//                     ],
//                     "_compiled": true,
//                     "_scopeId": "data-v-126b135a",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Settings/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Sidebar": {
//                     "components": {
//                         "SidebarItem": {
//                             "name": "SidebarItem",
//                             "components": {
//                                 "Item": {
//                                     "name": "MenuItem",
//                                     "functional": true,
//                                     "props": {
//                                         "icon": {
//                                             "default": ""
//                                         },
//                                         "title": {
//                                             "default": ""
//                                         }
//                                     },
//                                     "__file": "src/layout/components/Sidebar/Item.vue",
//                                     "_Ctor": {}
//                                 },
//                                 "AppLink": {
//                                     "props": {
//                                         "to": {
//                                             "type": [
//                                                 null,
//                                                 null
//                                             ],
//                                             "required": true
//                                         }
//                                     },
//                                     "computed": {},
//                                     "methods": {},
//                                     "staticRenderFns": [],
//                                     "_compiled": true,
//                                     "beforeCreate": [
//                                         null
//                                     ],
//                                     "beforeDestroy": [
//                                         null
//                                     ],
//                                     "__file": "src/layout/components/Sidebar/Link.vue",
//                                     "_Ctor": {}
//                                 }
//                             },
//                             "mixins": [
//                                 {
//                                     "computed": {},
//                                     "methods": {}
//                                 }
//                             ],
//                             "props": {
//                                 "item": {
//                                     "required": true
//                                 },
//                                 "isNest": {
//                                     "default": false
//                                 },
//                                 "basePath": {
//                                     "default": ""
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/SidebarItem.vue",
//                             "_Ctor": {}
//                         },
//                         "Logo": {
//                             "name": "SidebarLogo",
//                             "props": {
//                                 "collapse": {
//                                     "required": true
//                                 }
//                             },
//                             "computed": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-6494804b",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/Logo.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Sidebar/index.vue",
//                     "_Ctor": {}
//                 },
//                 "TagsView": {
//                     "components": {
//                         "ScrollPane": {
//                             "name": "ScrollPane",
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-be6b7bae",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/TagsView/ScrollPane.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "watch": {},
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-fac8ca64",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/TagsView/index.vue",
//                     "_Ctor": {}
//                 }
//             },
//             "mixins": [
//                 {
//                     "watch": {},
//                     "methods": {}
//                 }
//             ],
//             "computed": {},
//             "methods": {},
//             "staticRenderFns": [],
//             "_compiled": true,
//             "_scopeId": "data-v-13877386",
//             "beforeCreate": [
//                 null
//             ],
//             "beforeDestroy": [
//                 null
//             ],
//             "__file": "src/layout/index.vue",
//             "_Ctor": {}
//         },
//         "alwaysShow": true,
//         "meta": {
//             "title": "系统管理",
//             "icon": "system",
//             "noCache": false,
//             "link": null
//         },
//         "children": [
//             {
//                 "name": "User",
//                 "path": "user",
//                 "hidden": false,
//                 "meta": {
//                     "title": "用户管理",
//                     "icon": "user",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Role",
//                 "path": "role",
//                 "hidden": false,
//                 "meta": {
//                     "title": "角色管理",
//                     "icon": "peoples",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Menu",
//                 "path": "menu",
//                 "hidden": false,
//                 "meta": {
//                     "title": "菜单管理",
//                     "icon": "tree-table",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Dept",
//                 "path": "dept",
//                 "hidden": false,
//                 "meta": {
//                     "title": "部门管理",
//                     "icon": "tree",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Post",
//                 "path": "post",
//                 "hidden": false,
//                 "meta": {
//                     "title": "岗位管理",
//                     "icon": "post",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Dict",
//                 "path": "dict",
//                 "hidden": false,
//                 "meta": {
//                     "title": "字典管理",
//                     "icon": "dict",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Config",
//                 "path": "config",
//                 "hidden": false,
//                 "meta": {
//                     "title": "参数设置",
//                     "icon": "edit",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Notice",
//                 "path": "notice",
//                 "hidden": false,
//                 "meta": {
//                     "title": "通知公告",
//                     "icon": "message",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Log",
//                 "path": "log",
//                 "hidden": false,
//                 "redirect": "noRedirect",
//                 "component": {
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/components/ParentView/index.vue"
//                 },
//                 "alwaysShow": true,
//                 "meta": {
//                     "title": "日志管理",
//                     "icon": "log",
//                     "noCache": false,
//                     "link": null
//                 },
//                 "children": [
//                     {
//                         "name": "Operlog",
//                         "path": "operlog",
//                         "hidden": false,
//                         "meta": {
//                             "title": "操作日志",
//                             "icon": "form",
//                             "noCache": false,
//                             "link": null
//                         }
//                     },
//                     {
//                         "name": "Logininfor",
//                         "path": "logininfor",
//                         "hidden": false,
//                         "meta": {
//                             "title": "登录日志",
//                             "icon": "logininfor",
//                             "noCache": false,
//                             "link": null
//                         }
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         "name": "Monitor",
//         "path": "/monitor",
//         "hidden": false,
//         "redirect": "noRedirect",
//         "component": {
//             "name": "Layout",
//             "components": {
//                 "AppMain": {
//                     "name": "AppMain",
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-078753dd",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/AppMain.vue",
//                     "_Ctor": {}
//                 },
//                 "Navbar": {
//                     "components": {
//                         "Breadcrumb": {
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-b50ef614",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Breadcrumb/index.vue",
//                             "_Ctor": {}
//                         },
//                         "TopNav": {
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/TopNav/index.vue"
//                         },
//                         "Hamburger": {
//                             "name": "Hamburger",
//                             "props": {
//                                 "isActive": {
//                                     "default": false
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-4e6f274c",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Hamburger/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Screenfull": {
//                             "name": "Screenfull",
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-29234bee",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/Screenfull/index.vue",
//                             "_Ctor": {}
//                         },
//                         "SizeSelect": {
//                             "computed": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/SizeSelect/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Search": {
//                             "name": "HeaderSearch",
//                             "computed": {},
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-032bd1f0",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/HeaderSearch/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiGit": {
//                             "name": "RuoYiGit",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Git/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiDoc": {
//                             "name": "RuoYiDoc",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Doc/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "setting": {},
//                         "topNav": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-d16d6306",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Navbar.vue",
//                     "_Ctor": {}
//                 },
//                 "RightPanel": {
//                     "name": "RightPanel",
//                     "props": {
//                         "clickNotClose": {
//                             "default": false
//                         },
//                         "buttonTop": {
//                             "default": 250
//                         }
//                     },
//                     "computed": {
//                         "show": {}
//                     },
//                     "watch": {},
//                     "beforeDestroy": [
//                         null,
//                         null
//                     ],
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-1e488bfb",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "__file": "src/components/RightPanel/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Settings": {
//                     "components": {
//                         "ThemePicker": {
//                             "computed": {},
//                             "watch": {
//                                 "defaultTheme": {
//                                     "immediate": true,
//                                     "user": true
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/ThemePicker/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "fixedHeader": {},
//                         "topNav": {},
//                         "tagsView": {},
//                         "sidebarLogo": {},
//                         "dynamicTitle": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [
//                         null
//                     ],
//                     "_compiled": true,
//                     "_scopeId": "data-v-126b135a",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Settings/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Sidebar": {
//                     "components": {
//                         "SidebarItem": {
//                             "name": "SidebarItem",
//                             "components": {
//                                 "Item": {
//                                     "name": "MenuItem",
//                                     "functional": true,
//                                     "props": {
//                                         "icon": {
//                                             "default": ""
//                                         },
//                                         "title": {
//                                             "default": ""
//                                         }
//                                     },
//                                     "__file": "src/layout/components/Sidebar/Item.vue",
//                                     "_Ctor": {}
//                                 },
//                                 "AppLink": {
//                                     "props": {
//                                         "to": {
//                                             "type": [
//                                                 null,
//                                                 null
//                                             ],
//                                             "required": true
//                                         }
//                                     },
//                                     "computed": {},
//                                     "methods": {},
//                                     "staticRenderFns": [],
//                                     "_compiled": true,
//                                     "beforeCreate": [
//                                         null
//                                     ],
//                                     "beforeDestroy": [
//                                         null
//                                     ],
//                                     "__file": "src/layout/components/Sidebar/Link.vue",
//                                     "_Ctor": {}
//                                 }
//                             },
//                             "mixins": [
//                                 {
//                                     "computed": {},
//                                     "methods": {}
//                                 }
//                             ],
//                             "props": {
//                                 "item": {
//                                     "required": true
//                                 },
//                                 "isNest": {
//                                     "default": false
//                                 },
//                                 "basePath": {
//                                     "default": ""
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/SidebarItem.vue",
//                             "_Ctor": {}
//                         },
//                         "Logo": {
//                             "name": "SidebarLogo",
//                             "props": {
//                                 "collapse": {
//                                     "required": true
//                                 }
//                             },
//                             "computed": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-6494804b",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/Logo.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Sidebar/index.vue",
//                     "_Ctor": {}
//                 },
//                 "TagsView": {
//                     "components": {
//                         "ScrollPane": {
//                             "name": "ScrollPane",
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-be6b7bae",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/TagsView/ScrollPane.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "watch": {},
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-fac8ca64",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/TagsView/index.vue",
//                     "_Ctor": {}
//                 }
//             },
//             "mixins": [
//                 {
//                     "watch": {},
//                     "methods": {}
//                 }
//             ],
//             "computed": {},
//             "methods": {},
//             "staticRenderFns": [],
//             "_compiled": true,
//             "_scopeId": "data-v-13877386",
//             "beforeCreate": [
//                 null
//             ],
//             "beforeDestroy": [
//                 null
//             ],
//             "__file": "src/layout/index.vue",
//             "_Ctor": {}
//         },
//         "alwaysShow": true,
//         "meta": {
//             "title": "系统监控",
//             "icon": "monitor",
//             "noCache": false,
//             "link": null
//         },
//         "children": [
//             {
//                 "name": "Online",
//                 "path": "online",
//                 "hidden": false,
//                 "meta": {
//                     "title": "在线用户",
//                     "icon": "online",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Job",
//                 "path": "job",
//                 "hidden": false,
//                 "meta": {
//                     "title": "定时任务",
//                     "icon": "job",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Druid",
//                 "path": "druid",
//                 "hidden": false,
//                 "meta": {
//                     "title": "数据监控",
//                     "icon": "druid",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Server",
//                 "path": "server",
//                 "hidden": false,
//                 "meta": {
//                     "title": "服务监控",
//                     "icon": "server",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Cache",
//                 "path": "cache",
//                 "hidden": false,
//                 "meta": {
//                     "title": "缓存监控",
//                     "icon": "redis",
//                     "noCache": false,
//                     "link": null
//                 }
//             }
//         ]
//     },
//     {
//         "name": "Tool",
//         "path": "/tool",
//         "hidden": false,
//         "redirect": "noRedirect",
//         "component": {
//             "name": "Layout",
//             "components": {
//                 "AppMain": {
//                     "name": "AppMain",
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-078753dd",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/AppMain.vue",
//                     "_Ctor": {}
//                 },
//                 "Navbar": {
//                     "components": {
//                         "Breadcrumb": {
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-b50ef614",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Breadcrumb/index.vue",
//                             "_Ctor": {}
//                         },
//                         "TopNav": {
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/TopNav/index.vue"
//                         },
//                         "Hamburger": {
//                             "name": "Hamburger",
//                             "props": {
//                                 "isActive": {
//                                     "default": false
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-4e6f274c",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Hamburger/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Screenfull": {
//                             "name": "Screenfull",
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-29234bee",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/Screenfull/index.vue",
//                             "_Ctor": {}
//                         },
//                         "SizeSelect": {
//                             "computed": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/SizeSelect/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Search": {
//                             "name": "HeaderSearch",
//                             "computed": {},
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-032bd1f0",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/HeaderSearch/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiGit": {
//                             "name": "RuoYiGit",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Git/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiDoc": {
//                             "name": "RuoYiDoc",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Doc/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "setting": {},
//                         "topNav": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-d16d6306",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Navbar.vue",
//                     "_Ctor": {}
//                 },
//                 "RightPanel": {
//                     "name": "RightPanel",
//                     "props": {
//                         "clickNotClose": {
//                             "default": false
//                         },
//                         "buttonTop": {
//                             "default": 250
//                         }
//                     },
//                     "computed": {
//                         "show": {}
//                     },
//                     "watch": {},
//                     "beforeDestroy": [
//                         null,
//                         null
//                     ],
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-1e488bfb",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "__file": "src/components/RightPanel/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Settings": {
//                     "components": {
//                         "ThemePicker": {
//                             "computed": {},
//                             "watch": {
//                                 "defaultTheme": {
//                                     "immediate": true,
//                                     "user": true
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/ThemePicker/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "fixedHeader": {},
//                         "topNav": {},
//                         "tagsView": {},
//                         "sidebarLogo": {},
//                         "dynamicTitle": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [
//                         null
//                     ],
//                     "_compiled": true,
//                     "_scopeId": "data-v-126b135a",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Settings/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Sidebar": {
//                     "components": {
//                         "SidebarItem": {
//                             "name": "SidebarItem",
//                             "components": {
//                                 "Item": {
//                                     "name": "MenuItem",
//                                     "functional": true,
//                                     "props": {
//                                         "icon": {
//                                             "default": ""
//                                         },
//                                         "title": {
//                                             "default": ""
//                                         }
//                                     },
//                                     "__file": "src/layout/components/Sidebar/Item.vue",
//                                     "_Ctor": {}
//                                 },
//                                 "AppLink": {
//                                     "props": {
//                                         "to": {
//                                             "type": [
//                                                 null,
//                                                 null
//                                             ],
//                                             "required": true
//                                         }
//                                     },
//                                     "computed": {},
//                                     "methods": {},
//                                     "staticRenderFns": [],
//                                     "_compiled": true,
//                                     "beforeCreate": [
//                                         null
//                                     ],
//                                     "beforeDestroy": [
//                                         null
//                                     ],
//                                     "__file": "src/layout/components/Sidebar/Link.vue",
//                                     "_Ctor": {}
//                                 }
//                             },
//                             "mixins": [
//                                 {
//                                     "computed": {},
//                                     "methods": {}
//                                 }
//                             ],
//                             "props": {
//                                 "item": {
//                                     "required": true
//                                 },
//                                 "isNest": {
//                                     "default": false
//                                 },
//                                 "basePath": {
//                                     "default": ""
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/SidebarItem.vue",
//                             "_Ctor": {}
//                         },
//                         "Logo": {
//                             "name": "SidebarLogo",
//                             "props": {
//                                 "collapse": {
//                                     "required": true
//                                 }
//                             },
//                             "computed": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-6494804b",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/Logo.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Sidebar/index.vue",
//                     "_Ctor": {}
//                 },
//                 "TagsView": {
//                     "components": {
//                         "ScrollPane": {
//                             "name": "ScrollPane",
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-be6b7bae",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/TagsView/ScrollPane.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "watch": {},
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-fac8ca64",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/TagsView/index.vue",
//                     "_Ctor": {}
//                 }
//             },
//             "mixins": [
//                 {
//                     "watch": {},
//                     "methods": {}
//                 }
//             ],
//             "computed": {},
//             "methods": {},
//             "staticRenderFns": [],
//             "_compiled": true,
//             "_scopeId": "data-v-13877386",
//             "beforeCreate": [
//                 null
//             ],
//             "beforeDestroy": [
//                 null
//             ],
//             "__file": "src/layout/index.vue",
//             "_Ctor": {}
//         },
//         "alwaysShow": true,
//         "meta": {
//             "title": "系统工具",
//             "icon": "tool",
//             "noCache": false,
//             "link": null
//         },
//         "children": [
//             {
//                 "name": "Build",
//                 "path": "build",
//                 "hidden": false,
//                 "meta": {
//                     "title": "表单构建",
//                     "icon": "build",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Gen",
//                 "path": "gen",
//                 "hidden": false,
//                 "meta": {
//                     "title": "代码生成",
//                     "icon": "code",
//                     "noCache": false,
//                     "link": null
//                 }
//             },
//             {
//                 "name": "Swagger",
//                 "path": "swagger",
//                 "hidden": false,
//                 "meta": {
//                     "title": "系统接口",
//                     "icon": "swagger",
//                     "noCache": false,
//                     "link": null
//                 }
//             }
//         ]
//     },
//     {
//         "name": "Http://ruoyi.vip",
//         "path": "http://ruoyi.vip",
//         "hidden": false,
//         "component": {
//             "name": "Layout",
//             "components": {
//                 "AppMain": {
//                     "name": "AppMain",
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-078753dd",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/AppMain.vue",
//                     "_Ctor": {}
//                 },
//                 "Navbar": {
//                     "components": {
//                         "Breadcrumb": {
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-b50ef614",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Breadcrumb/index.vue",
//                             "_Ctor": {}
//                         },
//                         "TopNav": {
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/TopNav/index.vue"
//                         },
//                         "Hamburger": {
//                             "name": "Hamburger",
//                             "props": {
//                                 "isActive": {
//                                     "default": false
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-4e6f274c",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/Hamburger/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Screenfull": {
//                             "name": "Screenfull",
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-29234bee",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/components/Screenfull/index.vue",
//                             "_Ctor": {}
//                         },
//                         "SizeSelect": {
//                             "computed": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/SizeSelect/index.vue",
//                             "_Ctor": {}
//                         },
//                         "Search": {
//                             "name": "HeaderSearch",
//                             "computed": {},
//                             "watch": {},
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-032bd1f0",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/HeaderSearch/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiGit": {
//                             "name": "RuoYiGit",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Git/index.vue",
//                             "_Ctor": {}
//                         },
//                         "RuoYiDoc": {
//                             "name": "RuoYiDoc",
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/RuoYi/Doc/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "setting": {},
//                         "topNav": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-d16d6306",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Navbar.vue",
//                     "_Ctor": {}
//                 },
//                 "RightPanel": {
//                     "name": "RightPanel",
//                     "props": {
//                         "clickNotClose": {
//                             "default": false
//                         },
//                         "buttonTop": {
//                             "default": 250
//                         }
//                     },
//                     "computed": {
//                         "show": {}
//                     },
//                     "watch": {},
//                     "beforeDestroy": [
//                         null,
//                         null
//                     ],
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-1e488bfb",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "__file": "src/components/RightPanel/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Settings": {
//                     "components": {
//                         "ThemePicker": {
//                             "computed": {},
//                             "watch": {
//                                 "defaultTheme": {
//                                     "immediate": true,
//                                     "user": true
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/components/ThemePicker/index.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {
//                         "fixedHeader": {},
//                         "topNav": {},
//                         "tagsView": {},
//                         "sidebarLogo": {},
//                         "dynamicTitle": {}
//                     },
//                     "methods": {},
//                     "staticRenderFns": [
//                         null
//                     ],
//                     "_compiled": true,
//                     "_scopeId": "data-v-126b135a",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Settings/index.vue",
//                     "_Ctor": {}
//                 },
//                 "Sidebar": {
//                     "components": {
//                         "SidebarItem": {
//                             "name": "SidebarItem",
//                             "components": {
//                                 "Item": {
//                                     "name": "MenuItem",
//                                     "functional": true,
//                                     "props": {
//                                         "icon": {
//                                             "default": ""
//                                         },
//                                         "title": {
//                                             "default": ""
//                                         }
//                                     },
//                                     "__file": "src/layout/components/Sidebar/Item.vue",
//                                     "_Ctor": {}
//                                 },
//                                 "AppLink": {
//                                     "props": {
//                                         "to": {
//                                             "type": [
//                                                 null,
//                                                 null
//                                             ],
//                                             "required": true
//                                         }
//                                     },
//                                     "computed": {},
//                                     "methods": {},
//                                     "staticRenderFns": [],
//                                     "_compiled": true,
//                                     "beforeCreate": [
//                                         null
//                                     ],
//                                     "beforeDestroy": [
//                                         null
//                                     ],
//                                     "__file": "src/layout/components/Sidebar/Link.vue",
//                                     "_Ctor": {}
//                                 }
//                             },
//                             "mixins": [
//                                 {
//                                     "computed": {},
//                                     "methods": {}
//                                 }
//                             ],
//                             "props": {
//                                 "item": {
//                                     "required": true
//                                 },
//                                 "isNest": {
//                                     "default": false
//                                 },
//                                 "basePath": {
//                                     "default": ""
//                                 }
//                             },
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/SidebarItem.vue",
//                             "_Ctor": {}
//                         },
//                         "Logo": {
//                             "name": "SidebarLogo",
//                             "props": {
//                                 "collapse": {
//                                     "required": true
//                                 }
//                             },
//                             "computed": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-6494804b",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "beforeDestroy": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/Sidebar/Logo.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/Sidebar/index.vue",
//                     "_Ctor": {}
//                 },
//                 "TagsView": {
//                     "components": {
//                         "ScrollPane": {
//                             "name": "ScrollPane",
//                             "computed": {},
//                             "beforeDestroy": [
//                                 null,
//                                 null
//                             ],
//                             "methods": {},
//                             "staticRenderFns": [],
//                             "_compiled": true,
//                             "_scopeId": "data-v-be6b7bae",
//                             "beforeCreate": [
//                                 null
//                             ],
//                             "__file": "src/layout/components/TagsView/ScrollPane.vue",
//                             "_Ctor": {}
//                         }
//                     },
//                     "computed": {},
//                     "watch": {},
//                     "methods": {},
//                     "staticRenderFns": [],
//                     "_compiled": true,
//                     "_scopeId": "data-v-fac8ca64",
//                     "beforeCreate": [
//                         null
//                     ],
//                     "beforeDestroy": [
//                         null
//                     ],
//                     "__file": "src/layout/components/TagsView/index.vue",
//                     "_Ctor": {}
//                 }
//             },
//             "mixins": [
//                 {
//                     "watch": {},
//                     "methods": {}
//                 }
//             ],
//             "computed": {},
//             "methods": {},
//             "staticRenderFns": [],
//             "_compiled": true,
//             "_scopeId": "data-v-13877386",
//             "beforeCreate": [
//                 null
//             ],
//             "beforeDestroy": [
//                 null
//             ],
//             "__file": "src/layout/index.vue",
//             "_Ctor": {}
//         },
//         "meta": {
//             "title": "若依官网",
//             "icon": "guide",
//             "noCache": false,
//             "link": "http://ruoyi.vip"
//         }
//     }
// ]
const  variables = {
    menuColor: '#bfcbd9',
    menuLightColor: 'rgba(0,0,0,.70)',
    menuColorActive: '#f4f4f5',
    menuBackground: '#304156',
    menuLightBackground: '#ffffff',
    subMenuBackground: '#1f2d3d',
    subMenuHover: '#001528',
}

</script>
<style lang="less" scoped>
</style>