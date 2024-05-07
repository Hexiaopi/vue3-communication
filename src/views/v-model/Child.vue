<template>
    <div class="child">
        <h1>子组件</h1>
        <h6>msg:{{ props.modelValue }}</h6>
        <button @click="handler">改变</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
let props = defineProps(['modelValue']);
let $emit = defineEmits(['update:modelValue'])
const handler = () => {
    let msg = props.modelValue + ' hello '
    $emit('update:modelValue', msg)
};
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