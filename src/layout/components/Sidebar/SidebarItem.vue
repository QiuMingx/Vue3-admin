<template>
  <template v-if="!siderItem.hidden">
    <template v-if="hasOneShowingChild(siderItem.children,siderItem) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!siderItem.alwaysShow">
      <!-- <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path, onlyOneChild.query)"> -->
        <el-menu-Item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(siderItem.meta&&siderItem.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      <!-- </app-link> -->
    </template>

    <el-sub-menu v-else ref="subMenu" :index="resolvePath(siderItem.path)">
      <template #title>
        <item v-if="siderItem.meta" :icon="siderItem.meta && siderItem.meta.icon" :title="siderItem.meta.title" />
      </template>
      <sidebar-item
        v-for="child in siderItem.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
    
  </template>
</template>

<script setup lang="ts" name="SidebarItem">
import { PropType, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { isExternal } from '@/utils/validate'
import Item from './item.vue'
const props = defineProps({
  // route object
  item: {
    type: Object as PropType<any>,
    required: true
  },
  isNest: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  basePath: {
    type: String as PropType<string>,
    default: ''
  }
})
const { currentRoute, push } = useRouter()
const onlyOneChild = ref<any>(null)
const siderItem: any = computed(() => props.item)
function hasOneShowingChild(children: RouteRecordRaw[] = [], parent: RouteRecordRaw): boolean {
  const showingChildren: RouteRecordRaw[] = children.filter((item: RouteRecordRaw) => {
    if (item.meta && item.meta.hidden) {
      return false
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild.value = item
      return true
    }
  })

  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return true
  }

  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}
function resolvePath(routePath: string, otherPath?: string): string {
  if (isExternal(routePath)) {
    return routePath
  }
  return (
    ((otherPath || props.basePath) === '/' ? '' : otherPath || props.basePath) +
    (routePath ? '/' + routePath : '')
  )
}
</script>
