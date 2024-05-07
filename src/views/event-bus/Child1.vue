<template>
    <div class="child">
        <h1>哥哥组件</h1>
        <li v-for="toy in toys">{{ toy }}</li>
        <button v-show="toys.length > 0" @click="handle">给弟弟一个玩具</button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import $bus from '@/bus'

let toys = ref(['BB枪', '变形金刚', '赛车'])

const handle = () => {
    let toy = toys.value.pop()
    $bus.emit('send-toy', toy)
}

onMounted(() => {
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