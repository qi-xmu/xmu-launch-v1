<script setup>
defineProps({
  msg: String
})
</script>

<template>
  <h3>{{ msg }} <code id="code">朴素版</code></h3>
  <!-- <p> </p> -->
  
</template>

<style scoped>

h3{
  background-color: #0d2f6e;
  color: white;
}

</style>