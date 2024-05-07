<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <h1>组件通信演示</h1>
    <RouterLink to="/">首页</RouterLink>
  </div>
  <hr>
  <div>
    <nav>
      <RouterLink to="/props">自定义属性-props</RouterLink>
      <hr>
      <RouterLink to="/custom-event">自定义事件-$emit</RouterLink>
      <hr>
      <RouterLink to="/event-bus">事件总线-mitt</RouterLink>
      <hr>
      <RouterLink to="/v-model">v-model</RouterLink>
      <hr>
      <RouterLink to="/useAttrs">useAttrs</RouterLink>
      <hr>
      <RouterLink to="/ref-parent">ref和$parent</RouterLink>
      <hr>
      <RouterLink to="/provide-inject">provide-inject</RouterLink>
      <hr>
      <RouterLink to="/pinia">状态管理-pinia</RouterLink>
      <hr>
      <RouterLink to="/slot">插槽-slot</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<script setup lang="ts">

</script>

<style scoped></style>
