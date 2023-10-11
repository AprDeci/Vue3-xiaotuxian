<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutFix from './components/LayoutFix.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'


import { useCategoryStore } from '@/stores/category.js'
import {onMounted} from 'vue'
const categoryStore = useCategoryStore()
onMounted(()=>{
  categoryStore.getCategory()
})  

</script>

<template>
  <LayoutNav />
  <LayoutFix />
  <LayoutHeader />
  <!-- <RouterView  :key="$route.fullPath"/> -->
  <RouterView />
  <LayoutFooter />
</template>