<!-- views/LoginView.vue -->

<template>
  <div>
    <h1>login page</h1>

    <form @submit.prevent="OnLogin">

      <label for="username">username</label>
      <input type="text" id="username" v-model="username">

      <div></div>
      <label for="password">password1:</label>
      <input type="text" id="password" v-model="password">
    
      <input type="submit" value="login">

    </form>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import { useAccountStore } from '@/stores/accounts'
  import SignUpView from './SignUpView.vue'
  const accountStore = useAccountStore()
  const username = ref('')
  const password = ref('')

  const OnLogin = function(){
    const userInfo = {
      username : username.value,
      password : password.value,
    }
    accountStore.logIn(userInfo)
  }
</script>

<style>

</style>
