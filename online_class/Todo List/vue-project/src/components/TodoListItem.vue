<template>
<div>
  <div>
    <p>{{ book.title }}</p>
    <p>{{ book.content }}</p>
  </div>
  <input type="checkbox" id="book" v-model="book.isDone">
  <label :for="book.id">{{book.text}}</label>
  <button @click="onDeletTodo">삭제</button>
</div>
</template>

<script setup>
import {ref, watch} from 'vue'
import { useCounterStore } from '@/stores/counter';
const props = defineProps({
  book: Object
})


const store = useCounterStore()
const isDone = ref(props.book.isDone)

watch(isDone, () => {
  store.updateTodo(props.book.isDone)
})



const onDeletTodo = function(){
  store.deleteTodo(props.book.id)
}

</script>

<style scoped>

</style>