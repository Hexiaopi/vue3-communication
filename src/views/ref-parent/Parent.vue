<template>
    <div class="parent">
        <h1>父组件</h1>
        <p> 工资: {{ money }}</p>
        <button @click="handle">给孩子生活费</button>
        <Child ref="son" />
    </div>
</template>

<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const money = ref(1000)
defineExpose({ money })

let son = ref()
const handle = () => {
    money.value -= 100
    son.value.money += 100
}
</script>

<style scoped>
.parent {
    background-color: lightblue;
    padding: 10px;
    width: 400px;
    height: 600px;
}
</style>