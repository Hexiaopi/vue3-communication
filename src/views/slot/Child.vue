<template>
    <div class="child">
        <h1>子组件</h1>
        <h1>默认插槽</h1>
        <slot></slot>
        <h1>==========</h1>
        <h1>具名插槽</h1>
        <slot name="header"></slot>
        <h1>==========</h1>
        <h1>作用域插槽</h1>
        <slot name="footer" :data="['a', 'b', 'c']"></slot>
        <h1>==========</h1>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.child {
    width: 300px;
    height: 650px;
    background-color: rgb(0, 115, 255);
    color: white;
    padding: 10px;
    margin: 10px;
}
</style>