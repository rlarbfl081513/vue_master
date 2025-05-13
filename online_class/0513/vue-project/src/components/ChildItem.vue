<template>
<h1>child item</h1>
<p>{{ item.id }}</p>
<p>{{ item.name }}</p>
<!-- 버튼 클릭시, someEvent 발생 -->
<!-- <button @click="$emit('someEvent')">클릭</button> -->
<button @click="buttonClick"> 클릭</button>
</template>

<script setup>
const props = defineProps({
  item : Object
})

const emit = defineEmits(['someEvent'])
const buttonClick = function () {
  emit('someEvent', props.item, '구아바')
}
// 절대 하위컴포넌트에서 prop 받은 데이터를 변경하기 위해 준 기능은 아닌
// 아래처럼 쓰면 안됨, 모든 name이 다 파인애플이 돼버림
// props.item.name = '파인애플'

</script>

<style scoped>

</style>