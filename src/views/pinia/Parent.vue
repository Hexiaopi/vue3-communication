<template>
    <div class="parent">
        <h1>父组件</h1>
        <p>count:{{ count }},double:{{ double }}</p>
        <div style="display: flex;">
            <Child1 />
            <Child2 />
        </div>
    </div>
</template>

<script setup>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue';
import useCountStore from '@/store/modules/count';
import { storeToRefs } from 'pinia';
const countStore = useCountStore()
const { count, double } = storeToRefs(countStore)
</script>

<style scoped>
.parent {
    background-color: lightblue;
    padding: 10px;
    width: 400px;
    height: 400px;
}
</style>