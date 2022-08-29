<script setup>

import xmu_logo from "../assets/xmu-logo.png";

defineProps({
  msg: String
})
</script>

<template>
  <div class="a">
    <img :src=xmu_logo height="40" />
    <text> {{ msg }} </text>
  </div>
</template>

<style scoped>
div {
  margin-block: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: large;
}

.a {
  vertical-align: center;
  color: white;
  background-color: #164fba;
  padding: 10px;
  border-radius: 100px;
}

.a text {
  padding-inline: 10px;
  font-weight: bold;
}
</style>