<!-- views/SignUpView.vue -->

<template>
  <div>
    <h1>signup page</h1>
    <form @submit.prevent="onSignUp">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username">
     <div></div>
      <label for="age">age : </label>
      <input type="number" id="age" v-model="age">
      <div></div>
      <label for="password1">password1:</label>
      <input type="text" id="password1" v-model="password1">
      <div></div>
      <label for="password2">password2:</label>
      <input type="text" id="password2" v-model="password2">
      <div></div>
      <input type="submit" value="signup">
    </form>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import { useAccountStore } from '@/stores/accounts'
  const accountStore = useAccountStore()
  const username = ref('')
  const age = ref('')
  const password1 = ref('')
  const password2 = ref('')

  const onSignUp = function(){
    const userInfo = {
      username:username.value,
      age:age.value,
      password1:password1.value,
      password2:password2.value
    }
    accountStore.signUp(userInfo)
  }
</script>

<style>

</style>
