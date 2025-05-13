<template>
<div>
  <h3>Child에서 작성한 글</h3>
  <p>{{ userName }}</p>
  <p>{{  parentName }}</p>
  <button @click="$emit('changeUserName')">click</button>
  <!-- ChildItem componenets는 child.vue가 가진 items 배열의 요소 수 만큼 만들거다 -->
  <!-- :item = "item"는 객체 정보를 보내기 위한것 -->
  <ChildItem 
    v-for="item in items" 
    :key="item.id"
    :item = "item"  
    @some-event="onSomeEvent"
   
  />
</div>
</template>

<script setup>
import {ref} from 'vue'
import ChildItem from './ChildItem.vue'

defineProps({
  userName : String,
  parentName : String
})

const items = ref([
  {id: 1, name: '사과'},
  {id: 2, name: '바나나'},
  {id: 3, name: '딸기'}
])

const onSomeEvent = function(item,name){
  console.log('데이터를 넘겨받음')
  for (let i=0; i < items.value.length; i+=1 ){
    if (item.id === items.value[i].id){
      // items.value[i].name = '파인애플'
      items.value[i].name = name
    }
  }
}
</script>

<style scoped>

</style>