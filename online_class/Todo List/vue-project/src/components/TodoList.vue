<template>
<div>
  <TodoListItem 
      v-for="book in store.books" 
      :key="book.id" 
      :book="book">
  </TodoListItem>

</div>
</template>

<script setup>
import TodoListItem from '@/components/TodoListItem.vue'
import {useCounterStore} from '@/stores/counter.js'
const store = useCounterStore()
</script>

<style scoped>

</style>