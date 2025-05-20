<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainPage from './components/MainPage.vue';
</script>

<template>
  <header>
    <div class="wrapper">
     연습하기

      <nav>
        <RouterLink to="/">Home</RouterLink>
        |
        <RouterLink to="/other">other</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
