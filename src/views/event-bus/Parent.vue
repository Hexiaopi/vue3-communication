<template>
    <div class="parent">
        <h1>父组件</h1>
        <button @click="handle">没收玩具</button>
        <Child1 />
        <Child2 />
    </div>
</template>

<script setup>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import $bus from '@/bus';

const handle = () => {
    $bus.emit('clear-toy');
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