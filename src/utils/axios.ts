/*
 * @Description: 接口请求响应拦截
 * @Version: 1.0
 * @Author: banben
 * @Date: 2021-11-22 10:14:53
 * @LastEditors: banben
 * @LastEditTime: 2021-11-25 17:11:12
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from 'element-plus'
import { sm4 } from '@utils/sm4'

export class Request {
    public static axiosInstance: AxiosInstance;
    public static init() {
        this.axiosInstance = axios.create({
            baseURL: '/api',
            timeout: 6000,
            withCredentials: true
        })
        this.initInterceptors()
        return axios
    }

    // 初始化拦截器
    public static initInterceptors() {
        // 设置post请求头
        this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

        // 每次请求前, 如果token存在则携带
        this.axiosInstance.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                // console.log(111, config)
                const token = localStorage.getItem('token')
                if (token) {
                    config.headers.Authorization = 'Bearer' + token
                }
                // let s4 = sm4('')
                // console.log('s4', s4)
                // console.log(22222, s4.encryptData_ECB('test=sdsasdfs&test2=dfsasa2'))
                // console.log(33, s4.decryptData_ECB('c95538ae26c9e9408b030cc7cd1675bf797ee64478a98ae6610ca043b39261a2'))
                return config
            },
            (error: any) => {
                console.log(error)
            }
        )

        // 响应拦截器
        this.axiosInstance.interceptors.response.use(
            // 请求成功
            (response: AxiosResponse) => {
                if (response.status === 200) {
                    return response
                } else {
                    this.errorHandle(response)
                    // return Promise.reject(response.data)
                }
            },
            // 请求失败
            (error: any) => {
                const { response } = error
                if (response) {
                    this.errorHandle(response)
                    return Promise.reject(response.data)
                }

            }
        )
    }

    private static errorHandle(res: any) {
        // 状态码判断
        switch (res.status) {
            case 401:
                break;
            case 403:
                break;
            case 404:
                ElMessage.warning('请求的路径不存在')
                break;
            default: 
                ElMessage.warning('连接失败')
        }
    }
}
