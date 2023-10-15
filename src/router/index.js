import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Details from '@/views/Details/index.vue'
import CartList from '@/views/CartList/index.vue'
import CheckOut from '@/views/Checkout/index.vue'
import pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component:Layout,
      children:[
        {
          path: '',
          component:Home
        },
        {
          path: '/category/:id',
          component:Category
        },
        {
          path:'/category/sub/:id',
          component:SubCategory
        },
        {
          path: 'detail/:id',
          component:Details
        },
        {
          path: '/cartlist',
          component:CartList
        },
        {
          path: '/checkout',
          component:CheckOut
        },
        {
          path: '/pay',
          component:pay
        },
        {
          path:'/paycallback',
          component:PayBack
        }
      ]
    },
    {
      path: '/login',
      component:Login,
    }
  ],
  //路由行为配置
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  }
})

export default router
