<template>
    <div class="parent">
        <h1>父组件</h1>
        <Child :msg="msg" :count="count" />
    </div>
</template>

<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const msg = ref('Hello World')
const count = ref(0)
</script>

<style scoped>
.parent {
    background-color: lightblue;
    padding: 10px;
    width: 400px;
    height: 400px;
}
</style>