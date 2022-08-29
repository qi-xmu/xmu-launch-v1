<script setup>

import xmu_logo from "../assets/logo.png";
import star_img from "../assets/search/star.svg";


import { ref } from "vue";
defineProps({
  msg: String
})

var time_str = ref()
var date_str = ref()

setInterval(function () {
  var date = new Date();
  time_str.value = `${date.getHours()}: ${date.getMinutes()}`
}, 1000)
</script>

<template>
  <div class="titleBar">
    <a href="https://www.xmu.edu.cn/" id="logo" target="_blank">
      <img :src=xmu_logo height="25" />
    </a>
    <text>
      <a href="/" target="_blank"> {{  msg  }} </a>
    </text>
  </div>
</template>

<style scoped>
.titleBar {
  color: white;
  background-color: #1296db;

  margin: 10px;
  border-radius: 10px;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: large;
}

#logo {
  padding: 5px;
  border-radius: 10px 0px 0px 10px;
}

#logo:hover,
#logo:active {
  background-color: #24242424;
}

text:hover,
text:active {
  background-color: #24242424;
}

a {
  text-decoration: none;
  outline: none;
  color: white;
}

a:hover {
  background-color: none;
}

text {
  font-size: small;
  border-radius: 0px 10px 10px 0px;
  padding: 10px;
}
</style>