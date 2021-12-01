/*
 * @Description: 
 * @version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-23 14:57:18
 * @LastEditors: 浦原
 * @LastEditTime: 2021-11-26 14:01:13
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
