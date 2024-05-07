<template>
    <div class="child">
        <h1>子组件</h1>
        <p> 生活费: {{ money }}</p>
        <button @click="handle($parent)">要生活费</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const money = ref(10)
defineExpose({ money })
const handle = ($parent: any) => {
    money.value += 100
    $parent.money -= 100
}
</script>

<style scoped>
.child {
    width: 200px;
    height: 200px;
    background-color: blue;
    color: white;
    padding: 10px;
    margin: 10px;
}
</style>