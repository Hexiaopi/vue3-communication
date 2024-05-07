<template>
    <div class="parent">
        <h1>父组件</h1>
        <p>{{ count }}</p>
        <Child />
    </div>
</template>

<script setup>
import Child from './Child.vue'
import { ref, provide } from 'vue'

const count = ref(123)
provide('count', count)
</script>

<style scoped>
.parent {
    background-color: lightblue;
    padding: 10px;
    width: 400px;
    height: 600px;
}
</style>