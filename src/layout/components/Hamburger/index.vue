<!--
 * @Description: 
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2021-11-24 11:42:35
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2021-11-29 14:11:58
-->
<template>
  <div @click="toggleCollapsed(!collapsed)">
    <svg
      :class="{ 'is-active': isActive }"
      class="hamburger"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
    >
      <path
        d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts" name="Hamburger">
import { PropType } from 'vue'

defineProps({
  collapsed: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  isActive: {
	  type: Boolean as PropType<boolean>,
	  default: true
  }
})

const emit = defineEmits(['toggleClick'])

function toggleCollapsed(collapsed: boolean) {
  emit('toggleClick', collapsed)
}
</script>

<style lang="less" scoped>
.hamburger {
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
