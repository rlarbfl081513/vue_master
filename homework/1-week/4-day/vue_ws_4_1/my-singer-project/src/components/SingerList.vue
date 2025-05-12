<template>
    <h1>가수목록</h1>
<div>

  <ListItem
  v-for="n in numberOfItems"
  :key="n"
  :index="n"
  >

  </ListItem>

</div>
</template>

<script setup>
import {ref} from 'vue'
import ListItem from './singers/SingerDetail.vue'

const numberOfItems = ref(9)
</script>

<style scoped>
div{
  display: flex;
  flex-wrap: wrap;
}
</style>