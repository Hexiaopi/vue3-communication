import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useCountStore = defineStore('info', () => {
    const count = ref(0)
    const double = computed(() => {
        return count.value * 2
    })
    const increment = (num: number) => {
        count.value += num
    }
    return {
        count, double, increment
    }
});

export default useCountStore;