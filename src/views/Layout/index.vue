<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutFix from './components/LayoutFix.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  <LayoutNav />
  <LayoutFix />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>