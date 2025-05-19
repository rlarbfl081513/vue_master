<template>
  <div>
    <h1>user</h1>
    <button @click="gohome">home</button>
    <p></p>
    <p>중첩된 자식들의 정보를 보여주기</p>
    <RouterLink :to="{name:'user-profile'}">[profile]</RouterLink>
    <RouterLink :to="{name:'user-post'}">[post]</RouterLink>
    <RouterView/>
  </div>
</template>

<!-- 현재 파일은  Composition API를 쓰고 있어서 아래와 같은 형식으로 쓸 수 있는거고 이런 형식을 쓰려면 setup()함수 내부에서만 useRouter, useRoute등을 사용할 수 있음-->
<script setup>
// router
  // 전체 라우팅 시스템을 관리하는 인스턴스
  // 어떤 url이 어떤 컴포넌트를 보여줄지 설정하고 제어하는 객체
  // 예) routes배열을 담고 있고, push()로 페이지 이동이 가능하게 해줌
// route
  // 현재 페이지 정보를 담고 있는 객체
  // 예) 현재 경로, 파라미터, 쿼리, 이름
  // useRoute()로 가져올수 있음
import {RouterView, useRouter, useRoute, RouterLink, onBeforeRouteLeave} from 'vue-router'

onBeforeRouteLeave((to,from) => {
  const answer = window.confirm('진짜 가냐?')
  if (answer === false){
    return false
  }
})

const route = useRoute()
const router = useRouter()
const gohome =function () {
  router.push({name:'home'})
}
</script>

<style lang="stylus" scoped>

</style>