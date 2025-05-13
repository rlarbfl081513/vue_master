<template>
<div>
  <h2>Parent에서 작성한 것</h2>
  <p>{{ userName }}</p>
  <ParentChild 
    :user-name="userName"
    parent-name="bella"
     @change-user-name="$emit('changeUserName')"
  />
</div>
</template>

<script setup>
import ParentChild from '@/components/ParentChild.vue';
// prop 정보를 정의하는 방법은 여러가지
defineProps({
  // html 속성은 케밥케이스지만
  // js 변수명은 카멜케이스가 기본 컨벤션 
  // 1. 
  userName : String  
  // 2. 
  // userName : {
  //   type : String,
  //   required : true
  // }
})

</script>

<style scoped>

</style>