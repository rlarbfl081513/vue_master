<template>
  <div class="box">
<h1>가수이름</h1>
<img src="../../aessets/micro.jpg" alt="">
<p>가수 소개글 넣는 부분</p>
  <Album
  v-for="n in numberOfItems"
  :key="n"
  :index="n"
  ></Album>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import Album from '../Album.vue'

const numberOfItems = ref(2)
</script>

<style scoped>
.box{
  border: 1px solid #000;
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
}
</style>