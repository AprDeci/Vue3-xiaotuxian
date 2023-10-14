//封装购物车模块

import { defineStore } from "pinia";
import { computed, ref } from "vue";
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
    const delCart = (skuId)=>{
        const item= cartList.value.findIndex((item)=>item.skuId===skuId)
        cartList.value.splice(item,1)
    }

    //计算属性
    //总数量所有count之和
    const allCount = computed(()=>{
        return cartList.value.reduce((pre,item)=>pre+item.count,0)
    })
    //count*price 之和
    const allPrice = computed(()=>{
        return cartList.value.reduce((pre,item)=>pre+(item.count*item.price),0)
    })

    return{
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice
    }},
    {
        persist:true,
})