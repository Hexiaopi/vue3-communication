<template>
    <div class="child">
        <h1>子组件</h1>
        <h6>msg:{{ props.msg }}</h6>
        <button @click="handler">count:{{ count }}</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
let props = defineProps({
    msg: String,
    count: Number,
});

const handler = () => {
    //props.count += 1; // 这样会报错，因为props是只读的
    console.log(props.count);
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