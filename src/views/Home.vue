<!--
 * @Description: 
 * @version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-19 16:39:17
 * @LastEditors: 浦原
 * @LastEditTime: 2021-11-22 13:52:13
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <el-button type="primary">Primary1</el-button>
    <el-empty description="description"></el-empty>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
