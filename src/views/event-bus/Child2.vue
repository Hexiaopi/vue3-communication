<template>
    <div class="child">
        <h1>弟弟组件</h1>
        <li v-for="toy in toys">{{ toy }}</li>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import $bus from '@/bus'

let toys = ref(['奥特曼'])

onMounted(() => {
    $bus.on('send-toy', (data: any) => {
        toys.value.push(data)
    })
    $bus.on('clear-toy', () => {
        toys.value = []
    })
})
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