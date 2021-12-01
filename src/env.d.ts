/*
 * @Description: 
 * @version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-22 10:14:53
 * @LastEditors: 浦原
 * @LastEditTime: 2021-11-22 15:04:53
 */
/// <reference types="vite/client" />

// declare module '*.vue' {
//   import { DefineComponent } from 'vue'
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }


interface ImportMetaEnv {
    readonly VITE_APP_PROXY_URL: string
    readonly VITE_APP_PORT: number
 
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}
