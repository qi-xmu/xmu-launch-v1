<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Title from './components/Title.vue'
import SearchBox from './components/SearchBox.vue'
</script>

<template>
  <div class="flex-box">
    <SearchBox />
    <Title msg="厦大起始页" />
    <p>
      <code id="code">厦大起始页</code>
      <code id="code">十分朴素版</code>
    </p>
  </div>
</template>
<style scoped>
.flex-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
