/*
 * @Description: 
 * @version: 1.0
 * @Author: 浦原
 * @Date: 2021-11-22 10:14:53
 * @LastEditors: 浦原
 * @LastEditTime: 2021-12-01 11:06:11
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'
const fs = require("fs")
const path = require("path")
// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
const dotenv = require("dotenv")
const envFiles = [
  // /** default file */ `.env.dev`,
  /** mode file */ `.env.${process.env.NODE_ENV}`
]

for (const file of envFiles) {
  const envConfig = dotenv.parse(fs.readFileSync(file))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}
console.log(process.env.NODE_ENV, process.env.VITE_APP_PROXY_URL, process.env.VITE_APP_PORT)

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    define: {
        'process.env': {
            BASE_URL:process.env.VITE_APP_PROXY_URL,
            NODE_ENV:process.env.NODE_ENV
        }
    },
    resolve: {
        alias: {
        // 键必须以斜线开始和结束
        "@": path.resolve(__dirname, "./src"),
        "@api": path.resolve(__dirname, "./src/api"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@style": path.resolve(__dirname, "./src/style"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@store": path.resolve(__dirname, "./src/store"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@constants": path.resolve(__dirname, "./src/constants"),
        "@im": path.resolve(__dirname, "./src/components/IM"),
        },
    },
    // 引用全局 scss
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "./src/styles/variables.less";',
          javascriptEnabled: true
        }
      }
    },
    optimizeDeps: {
      include: ['element-plus']
    },
    server: {
        port: process.env.VITE_APP_PORT, // 端口号
        host: "0.0.0.0",
        proxy: {
          "/api": {
            target: process.env.VITE_APP_PROXY_URL, // 后台接口
            changeOrigin: true,
            secure: false, // 如果是https接口，需要配置这个参数
            // ws: true, //websocket支持
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
    },
    plugins: [
      vue(),
      viteSvgIcons({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        // 压缩
        svgoOptions: true
      }),
    ]

})
