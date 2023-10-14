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
    const singleCheck = (i,event)=>{
        const item = cartList.value.findIndex((item)=>item.skuId===i)
        cartList.value[item].selected = event
    }
    //一选择数量
    const selectedCount = computed(()=>{
        return cartList.value.filter((item)=>item.selected).reduce((pre,item)=>pre+item.count,0)
    })
    //一选择商品加钱合集
    const selectedPrice = computed(()=>{
        return cartList.value.filter((item)=>item.selected).reduce((pre,item)=>pre+(item.count*item.price),0)
    })
    //是否全选
    const isAll = computed(()=>cartList.value.every((item)=>item.selected))
    const allCheck = (selected)=>{
        cartList.value.forEach((item)=>{
            item.selected = selected
        })
    }
    return{
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice
    }},
    {
        persist:true,
})