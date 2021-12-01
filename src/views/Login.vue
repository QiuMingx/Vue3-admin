<!--
 * @Description: 登录页面
 * @Version: 1.0
 * @Autor: banben
 * @Date: 2021-11-22 18:55:41
 * @LastEditors: banben
 * @LastEditTime: 2021-11-25 17:00:51
-->
<template>
  <div class="login">
    <el-form ref="loginFormRef" :model="loginForm" :rules="state.loginRules" class="login-form">
      <h3 class="title">国辰保单后台管理系统</h3>
      <el-form-item prop="username">
        <el-input  
          :prefix-icon="UserFilled" 
          v-model="loginForm.username" 
          type="text" 
          auto-complete="off" 
          placeholder="账号"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          :prefix-icon="Lollipop"
          @keyup.enter="handleLogin"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="code" v-if="state.captchaOnOff">
        <el-input
          v-model="loginForm.code"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter="handleLogin"
        >
        </el-input>
        <div class="login-code">
          <img :src="state.codeUrl" @click="getCode" class="login-code-img"/>
        </div>
      </el-form-item>
      <!-- <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox> -->
      <el-form-item style="width:100%;">
        <el-button
          :loading="state.loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click.prevent="handleLogin"
        >
          <span v-if="!state.loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
        <div style="float: right;" v-if="state.register">
          <router-link class="link-type" :to="'/register'">立即注册</router-link>
        </div>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span></span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { UserFilled, Lollipop} from '@element-plus/icons'
import { login } from '@api/login'
const router = useRouter()

const loginForm = reactive({
    username: '',
    password: '',
    code: '',
    rememberMe: false,
})
const state = reactive({
    loading: false, // 加载中
    captchaOnOff: false, // 验证码
    codeUrl: '', // 图片
    register: false, // 注册开关
    loginRules: {
        username: [
            { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
            { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        code: [{ required: true, trigger: "change", message: "请输入验证码" }]
    },
})

const loginFormRef = ref()

// 登录
function handleLogin() {
  router.push('/')
  return
   loginFormRef.value.validate(valid => {
     if (valid) {
       console.log(loginForm)
       login({}).then(res => {
         console.log(1, res)
       }).catch(err => {
         console.log(2, err)
       })

     }
   })
}

// 获取code
function getCode () {}

</script>
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../assets/images/login-bg.jpeg");
  background-size: cover;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.login-code-img {
  height: 38px;
}
</style>