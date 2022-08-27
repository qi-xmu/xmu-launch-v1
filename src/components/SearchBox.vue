<script setup>
import { ref } from 'vue'

defineProps({
    msg: String
})

var text = ref("")

</script>

<template>
    <div class="searchbox-container">
        <input class="searchbox" v-model="text" placeholder="搜索">
        <p> {{ text }}</p>
    </div>
</template>

<style scoped>

.searchbox {
    padding: 10px;
    height: 20px;
    width: 400px;
    border-radius: 40px;
}
</style>
