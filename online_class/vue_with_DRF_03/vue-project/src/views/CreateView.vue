<!-- views/CreateView.vue -->

<template>
  <div>
    <h1>게시글 작성</h1>
    <form @submit.prevent="createArticle">
      <label for="title">제목 : </label>
      <input type="text" id="title" v-model.trim="title"><br>
      <label for="content">내용 : </label>
      <textarea id="content" v-model.trim="content"></textarea><br>
      <input type="submit">
    </form>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useArticleStore } from '@/stores/articles'
import { useAccountStore } from '@/stores/accounts'
const accountStore = useAccountStore()

import { useRouter } from 'vue-router'

const store = useArticleStore()
const router = useRouter()

const title = ref(null)
const content = ref(null)

const createArticle = function () {
  axios({
    method: 'post',
    url: `${store.API_URL}/api/v1/articles/`,
    data: {
      title: title.value,
      content: content.value
    },
    // 로그인한 사용자의 인증 토큰을 포함해서 axios 요청을 보내는 것
    // 로그인한 사람과 글 작성자가 동일한지 확인? 응, 토큰을 통해 백엔드에서 자동으로 확인
    headers:{
      'Authorization' : `Token ${accountStore.token}`
    }
  })
    .then(() => {
      router.push({name: 'ArticleView'})
    })
    .catch(err => console.log(err))
}
</script>

<style>

</style>
