<template>
<div>
  <h1>App에서 작성한 제목</h1>
  <!-- userName 변수에 든 값을 Parent 컴포넌트에게 prop -->
  <!-- prop 받을 데이터가 담길 변수명은 html의 속성 형태로 작성한다.-->
   <!-- html의 기본 컨벤션은 kebab-case -->
   <!-- html의 속성에는 문자열만 담을 수 있다. -->
  <Parent 
    :user-name="userName"
    @change-user-name = "onChangeUserName"
  />
</div>
</template>

<script setup>
import Parent from '@/components/Parent.vue'

import {ref} from 'vue'
const userName = ref('mark')
const onChangeUserName = function () {
  userName.value = 'chile'
}
</script>

<style scoped>

</style>