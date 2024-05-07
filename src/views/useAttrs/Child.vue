<template>
    <div class="child">
        <h1>子组件</h1>
        <h6>msg:{{ $attrs.msg }}</h6>
        <button @click="$attrs.onXxx">count:{{ $attrs.count }}</button>
    </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
let $attrs = useAttrs();
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