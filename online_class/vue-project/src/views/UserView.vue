<template>
  <div>
    <h1>user page</h1>
    <button @click="goHome">home</button>

    <!-- 내가 만든거 말고 뷰가 만들어 놓은 객체를 접근할때는 $를 붙임-->
    <h1> 현재경로에 관련된 정보들은 {{$route.params}}</h1>
    <h1> 현재경로에 관련된 정보들은 {{$route.params.id}}</h1>

    <!-- post & profile로 이동할 수 있어야함 링크가 필요힘 -->
     <!-- 컴포넌트 간 부모 자식 관계관점이 아니라 url에서의 중첨된 관계를 표현하는 관점으로 보기 -->
     <RouterLink :to="{name : 'user-profile'}">profile</RouterLink>
     |
     <RouterLink :to="{name :'user-posts'}">post</RouterLink>

    <!-- 중첨된 자식들의 정보를 보여주고싶어 -->
     <RouterView/>
  </div>
</template>

<script setup>

// router기능은 우리가 프로젝트에 추가한 vue-router가 가지고 있음
import {useRoute, useRouter,RouterView, RouterLink} from 'vue-router'
  const route = useRoute()
  const router = useRouter()
  
  const goHome = function () {
    router.push({name:'home'})
  }
</script>

<style lang="scss" scoped>

</style>