<template>
    <div class="child">
        <h1>子组件</h1>
        <button @click="$emit('my-event', 'Hello')">触发事件</button>
        <button @click="handle">触发事件</button>
    </div>
</template>

<script setup lang="ts">
let $emit = defineEmits(['my-event'])
const handle = () => {
    $emit('my-event', 'World')
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