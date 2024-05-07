<template>
    <div class="grandchild">
        <h1>孙组件</h1>
        <button @click="handler">count:{{ count }}</button>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
let count = inject('count', 0)

const handler = () => {
    count.value += 1
};
</script>

<style scoped>
.grandchild {
    width: 200px;
    height: 200px;
    background-color: yellow;
    color: black;
    padding: 10px;
    margin: 10px;
}
</style>