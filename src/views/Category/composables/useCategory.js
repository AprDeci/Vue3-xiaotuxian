import {getCategoryAPI} from '@/apis/category'
import {useRoute} from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'
import {ref,onMounted} from 'vue'
export function useCategory(){
    const categoryData = ref({})
    const route = useRoute()
    const getCategory=async(id = route.params.id)=>{
        await getCategoryAPI(id).then(res=>{
        categoryData.value = res.result
    })}
    onMounted(()=>{
        getCategory()
    })
    onBeforeRouteUpdate((to)=>{
      getCategory(to.params.id)
    })
    //路由参数变化,分类数据接口重新发送
    return categoryData
}