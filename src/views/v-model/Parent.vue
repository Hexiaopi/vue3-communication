<template>
    <div class="parent">
        <h1>父组件</h1>
        {{ msg }}
        <Child v-model="msg" />
        <Child :modelValue="msg" @update:modelValue="msg = $event" />
    </div>
</template>

<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const msg = ref('Hello World')
</script>

<style scoped>
.parent {
    background-color: lightblue;
    padding: 10px;
    width: 400px;
    height: 600px;
}
</style>