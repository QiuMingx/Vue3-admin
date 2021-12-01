<!--
 * @Description: 
 * @version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-22 19:49:10
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2021-11-24 20:18:24
-->
<template>
	<div id="tags-view-container" class="tags-view-container">
		<ScrollPane ref="scrollPane" class="tags-view-wrapper" @scroll="handleScroll">
			<router-link
				v-for="tag in visitedViews"
				tag="span"
				:ref="setTagRef"
				:key="tag.path"
				:class="isActive(tag) ? 'active' : ''"
				:to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
				class="tags-view-item"
				@contextmenu.prevent="openMenu(tag, $event)"
			>
				{{ (tag as any).title }}
				<CloseBold 
					v-if="!tag.meta.affix"
					class="el-icon-close"
					@click.prevent.stop="closeSelectedTag(tag)"
				/>
			</router-link>
		</ScrollPane>
	</div>
</template>
<script setup lang="ts" name="TagsViews">
import { ref, unref, computed, watch, onMounted, nextTick } from 'vue'
import { RouteLocationNormalizedLoaded, useRouter } from 'vue-router'
import path from 'path'
import { CloseBold } from '@element-plus/icons'
import ScrollPane from './ScrollPane.vue'
// import  usePermissionStore  from '@/store/modules/permission'
// import useAppStore from '@/store/modules/app'
import {useStore} from 'vuex'
const store = useStore()

const { currentRoute, getRoutes, push, replace } = useRouter()
// const theme = computed(() => this.$store.state.settings.theme)
const visible = ref<boolean>(false)
const top = ref<number>(0)
const left = ref<number>(0)
const selectedTag = ref<any>({})
// const visitedViews = [
//     {
//         "fullPath":"/index",
//         "path": "/index",
//         "name": "Index",
//         "meta": {
//             "title": "首页",
//             "icon": "dashboard",
//             "affix": true
//         },
//         "title": "首页"
//     },
//     {
//         "fullPath": "/system/user",
//         "path": "/system/user",
//         "name": "User",
//         "meta": {
//             "title": "用户管理",
//             "icon": "dashboard",
//             "affix": true
//         },
//         "title": "用户管理"
//     }

// ]
const tagRefs = ref<any[]>([])
function setTagRef(el: any): void {
  tagRefs.value.push(el)
}
function isActive(route: RouteLocationNormalizedLoaded): boolean {
  return route.path === currentRoute.value.path
}

function activeStyle (tag:RouteLocationNormalizedLoaded) {
    if (!isActive(tag)) return {};
    return {
        "background-color": '#000',
        "border-color": '#red'
    };
}
function isAffix(route: RouteLocationNormalizedLoaded): boolean {
    return route.meta && !!route.meta.affix
}


async function refreshSelectedTag(view: RouteLocationNormalizedLoaded) {
//   await tagsViewStore.delCachedView()
    await store.dispatch('tagsView/delCachedView', {})
  const { fullPath } = view
  nextTick(() => {
    replace({
      path: '/redirect' + fullPath
    })
  })
}

function openMenu(tag: RouteLocationNormalizedLoaded, e: any) {
  const menuMinWidth = 105
  const offsetWidth: number = (unref(wrapper) as any).offsetWidth // container width
  const maxLeft: number = offsetWidth - menuMinWidth // left boundary
  const itemLeft: number = e.clientX + 4

  if (itemLeft > maxLeft) {
    left.value = maxLeft
  } else {
    left.value = itemLeft
  }
  top.value = e.clientY

  visible.value = true
  selectedTag.value = tag
}

// ----------------------- start--------------------
const tag = ref<HTMLElement | null>(null)
const visitedViews = computed(() => {
	return store.state.tagsView.visitedViews
})

const affixTags:object = []
watch(
  () => currentRoute.value,
  () => {
    addTags()
    // moveToCurrentTag()
  }
)
function filterAffixTags(routes, basePath = '/') {
	let tags = []
	routes.forEach( route => {
		if (route.meta && route.meta.affix) {
			tags.push({
				fullPath: route.path,
				path: route.path,
				name: route.name,
				meta: { ...route.meta }
			})
		}
	})
	return tags
}
function initTags() {
	const affixTags = filterAffixTags(getRoutes())
	for (const tag of affixTags) {
		if (tag.name) {
			store.dispatch('tagsView/addVisitedView', tag)
		}
	}
}
function addTags(): void | boolean {
  const { name } = currentRoute.value
  if (name) {
    selectedTag.value = currentRoute.value
    store.dispatch('tagsView/addView', currentRoute.value)
  }
  return false
}
function moveToCurrentTag() {
	const tags = tagRefs.value
	nextTick(() => {
		for (const tag of tags) {
			if (tag.to.path === currentRoute.value.path) {
				if (tag.to.fullPath !== currentRoute.value.fullPath) {
					store.dispatch('tagsView/updateVisitedView', currentRoute.value)
				}
				break
			}
		}
	})
}
// 删除标签
async function closeSelectedTag(view: RouteLocationNormalizedLoaded) {
	if (view.meta && view.meta.affix) return
	const views: any = await store.dispatch('tagsView/delView', view)
	if (isActive(view)) {
		toLastView(views.visitedViews)
	}
}

function toLastView(visitedViews: RouteLocationNormalizedLoaded[]) {
  	const latestView = visitedViews.slice(-1)[0]
    push(latestView)
}

onMounted(() => {
	initTags()
	addTags()
	// moveToCurrentTag()
})
// ----------------------- end ---------------------
</script>
<style lang="less" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-flex;
	  align-items: center;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
	  box-sizing: border-box;
	  text-decoration: none;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: rgb(64, 158, 255);
        color: #fff;
        border-color: rgb(64, 158, 255);
		box-sizing: border-box;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 5px;
        }
      }
	  .el-icon-close {
		width: 12px;
		height: 12px;
		margin-left: 5px;
		transition: all .3s cubic-bezier(.645, .045, .355, 1);
		transform-origin: 100% 50%;
		&:before {
			transform: scale(.6);
			display: inline-block;
			vertical-align: -3px;
		}
		&:hover {
			background-color: #b4bccc;
			color: #fff;
		}
		}
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
