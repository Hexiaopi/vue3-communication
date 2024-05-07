<template>
    <div class="parent">
        <h1>父组件</h1>
        <Child>
            <!-- 默认插槽 -->
            <h3>父组件定义的内容</h3>
            <!-- 具名插槽 -->
            <template v-slot:header>
                <h2>header</h2>
            </template>
            <!-- 作用域插槽 -->
            <template v-slot:footer="{ data }">
                <li v-for="item in data">{{ item }}</li>
            </template>
        </Child>
    </div>
</template>

<script setup>
import Child from './Child.vue'
</script>

<style scoped>
.parent {
    background-color: lightblue;
    padding: 10px;
    width: 400px;
    height: 800px;
}
</style>