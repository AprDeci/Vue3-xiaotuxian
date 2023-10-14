import {defineStore} from'pinia'
import {LoginAPI} from '@/apis/user'
import {ref} from 'vue'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user',()=>{
    const cartStore = useCartStore()
    //1.定义管理用户数据state
    const userInfo = ref({})
    const getUserInfo = async({account,password})=>{
       const res= await LoginAPI({account,password})
       userInfo.value = res.result
       //合并购物车
       await mergeCartAPI(cartStore.cartList.map(item=>{return{
        skuId:item.skuId,
        Selected:item.selected,
        count:item.count
       }}))
       cartStore.updateNewList()
    }
    //退出清除用户信息
    const clearUserInfo = ()=>{
        userInfo.value={}
        cartStore.clearCart()
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