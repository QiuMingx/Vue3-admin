/*
 * @Description: 
 * @version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-23 14:50:04
 * @LastEditors: 浦原
 * @LastEditTime: 2021-11-23 14:55:02
 */
import request from '@/utils/request'


// 获取路由
export const getRouters = () => {
  return request({
    url: '/getRouters',
    method: 'get'
  })
}