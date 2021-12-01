/*
 * @Description: 登录接口
 * @Version: 1.0
 * @Author: banben
 * @Date: 2021-11-22 10:14:53
 * @LastEditors: banben
 * @LastEditTime: 2021-11-22 16:58:55
 */

import { Request } from '@utils/axios'
import request from '@/utils/request'
// export function login (params: any) {
//     return Request.axiosInstance({
//         url: '/login',
//         method: 'post',
//         data: params
//     })
// }

export function login(username, password, code, uuid) {
    const data = {
      username,
      password,
      code,
      uuid
    }
    return request({
      url: '/login',
      headers: {
        isToken: false
      },
      method: 'post',
      data: data
    })
  }
  
  // 注册方法
  export function register(data) {
    return request({
      url: '/register',
      headers: {
        isToken: false
      },
      method: 'post',
      data: data
    })
  }
  
  // 获取用户详细信息
  export function getInfo() {
    return request({
      url: '/getInfo',
      method: 'get'
    })
  }
  
  // 退出方法
  export function logout() {
    return request({
      url: '/logout',
      method: 'post'
    })
  }
  
  // 获取验证码
  export function getCodeImg() {
    return request({
      url: '/captchaImage',
      headers: {
        isToken: false
      },
      method: 'get',
      timeout: 20000
    })
  }