<template>
  <p :style="{color:inputText}">{{ inputText }}</p>
  <input v-model="inputText" type="text">
</template>

<script setup>
import { ref } from 'vue';

const inputText = ref("")
// const onInput = function (event) {
//   inputText.value = event.currentTarget.value
// }
</script>

<style scoped>

</style>