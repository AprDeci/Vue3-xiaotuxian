//封装购物车模块

import { defineStore } from "pinia";

export const useCartStore = defineStore('cart',()=>{
    //1.定义state
    const cartList = ref([])
    //定义action 
    const addCart = (goods)=>{
     //添加购物车操作
        //已添加过
        //没添加过
    const item=cartList.value.find((item)=>goods.skuId===item.skuId)
    if(item){
        item.count++
    }else{
        cartList.value.push(goods)
    }
    }
    return{
        cartList,
        addCart
    },{
        persist:true,
    }

})