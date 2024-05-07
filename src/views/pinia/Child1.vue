<template>
    <div class="child">
        <h1>子组件</h1>
        <button @click="handler">count:{{ count }},double:{{ double }}</button>
    </div>
</template>

<script setup lang="ts">
import useCountStore from '@/store/modules/count';
import { storeToRefs } from 'pinia';
const countStore = useCountStore()
const { count, double } = storeToRefs(countStore)
const handler = () => {
    countStore.increment(1)
};
</script>

<style scoped>
.child {
    width: 200px;
    height: 200px;
    background-color: rgb(0, 110, 255);
    color: white;
    padding: 10px;
    margin: 10px;
}
</style>