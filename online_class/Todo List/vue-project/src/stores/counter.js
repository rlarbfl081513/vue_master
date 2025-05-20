import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  let id = 0
  const books = ref ([
    { id:id++, text:'content 111', isDone:true},
    { id:id++, text:'content 111', isDone:true},
    { id:id++, text:'content 111', isDone:false},

  ])
  const addTodo = function(todoText){
    books.value.push({
      id: id++, isDone:false, text:todoText 
    })
  }

  const deleteTodo = function (selectedId) {
    books.value = books.value.filter(book => book.id != selectedId)
  }

  const updateTodo = function(selectedId){
    books.value = books.value.map((book) => {
      if(book.id === selectedId){
        book.isDone = !book.isDone
      }
    })
  }

  return { books,addTodo,deleteTodo,updateTodo }
}, {persist:true})
