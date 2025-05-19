<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <!-- ':'바인딩해서 객체를 넘겨준다 -->
        
        <RouterLink :to="{name:'login'}">login</RouterLink>
        <!-- 로그인 기능을 만들었다고 가정하고 -->
        <RouterLink :to="{ name : 'home' }">Home</RouterLink>
        <RouterLink :to="{name : 'about'}">About</RouterLink>
        <!-- 파라미터 값을 넣어줄건데, 파라미터가 여러개일 수 있을니까 id라는 값에는 뭘 넣어주고 어떤거에는 또 다른 값을 넣어줘야하는 상황이 생길 수 있으니까 -> 객체 형식으로 -->
        <RouterLink :to="{name : 'user', params:{'id':1}}">User</RouterLink>
  
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
