<template>
  <div>
    <div>
      <TodoList/>
    </div>
    <form @submit.prevent="onaddTodo">
      <!-- 양방향 바인딩으로 사용자가 입력한 값을 사용하자 -->
      <input type="text" v-model="todoText">
      <button>create</button>
    </form>
  </div>
</template>

<script setup>
import TodoList from '@/components/TodoList.vue'
import { useCounterStore } from '@/stores/counter.js';
import {ref} from 'vue'

const store = useCounterStore()
const todoText = ref('')

// addTodo는 새로운 투두리스트를 추가해주는 거고
// onaddtodos는 addTodo를 실행시키면서 + 인풋박스를 다시 빈값으로 초기화 시켜주는 거임
const onaddTodo = function(){
  store.addTodo(todoText.value)
  todoText.value = ''
}


</script>

<style scoped>

</style>