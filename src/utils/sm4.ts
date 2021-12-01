/*
 * @Description: 国密sm4
 * @Version: 1.0
 * @Autor: banben
 * @Date: 2021-11-23 11:18:46
 * @LastEditors: banben
 * @LastEditTime: 2021-11-25 17:02:30
 */

import * as SM4  from "gm-crypt"

export const sm4 = (val:any) =>{
    let sm4Config = {
        //配置sm4参数
        key: "7f1e3a2f7d1f3f4e",//这里这个key值是跟后端要的
        mode: "ecb", // 加密的方式有两种，ecb和cbc两种，也是看后端如何定义的，不过要是cbc的话下面还要加一个iv的参数，ecb不用
        cipherType: "base64" // 
      }

    let sm = new SM4.sm4(sm4Config)
    return sm.encrypt(val)
}
