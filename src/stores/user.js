import {defineStore} from'pinia'
import {LoginAPI} from '@/apis/user'
import {ref} from 'vue'
export const useUserStore = defineStore('user',()=>{
    //1.定义管理用户数据state
    const userInfo = ref({})
    const getUserInfo = async({account,password})=>{
       const res= await LoginAPI({account,password})
       userInfo.value = res.result
    }
    //退出清除用户信息
    const clearUserInfo = ()=>{
        userInfo.value={}
    }
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
{
    persist:true
})