<template>
    <div class="parent">
        <h1>父组件</h1>
        <p>子组件传递过来的数据：</p>
        <li v-for="item in list">{{ item }}</li>
        <Child @my-event="handle" />
    </div>
</template>

<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const list = ref([])

function handle(value) {
    console.log('子传父的数据', value)
    list.value.push(value)
}
</script>

<style scoped>
.parent {
    background-color: lightblue;
    padding: 10px;
    width: 400px;
    height: 400px;
}
</style>