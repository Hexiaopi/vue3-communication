<template>
    <div class="child">
        <h1>子组件</h1>
        <GrandChild></GrandChild>
    </div>
</template>

<script setup lang="ts">
import GrandChild from './GrandChild.vue';
</script>

<style scoped>
.child {
    width: 300px;
    height: 400px;
    background-color: blue;
    color: white;
    padding: 10px;
    margin: 10px;
}
</style>