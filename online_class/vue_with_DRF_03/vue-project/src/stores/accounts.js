// store/accounts.js

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from 'axios'

export const useAccountStore = defineStore('account', () => {
  const ACCOUNT_API_URL = 'http://127.0.0.1:8000/accounts'
  const router = useRouter()

  const token = ref('')
  // token 소유 여부에 따라 로그인상태를 나타낼 isLogin변수작성
  // computed를 활용해 token값이 변할때만 상태를 계산하도록
  const isLogin = computed(() => {
    // 토큰이 있으면 true이고 아니면 false
    return token.value ? true : false
  })

  const signUp = function({username,age,password1,password2}){
    // 이곳에서 POST axios 요청할거임
    // console.log(payload)
    // password1: "rlarbfl123"
    // password2: "rlarbfl123"
    // username: "admin"

    axios({
      method:'POST',
      url:`${ACCOUNT_API_URL}/signup/`,
      data:{
        username,age,password1,password2
      }
    })
    // 성공 시
    .then( res => {
      // 회원가입 성공 후 자동으로 로그인까지 진행하기
      const password = password1
      logIn({username,password})
      console.log('회원가입 굿')
    })
    // 실패 시
    .catch( err => console.log(err))
  }

  const logIn = function({username,password}){
     axios({
      method:'POST',
      url:`${ACCOUNT_API_URL}/login/`,
      data:{
        username,password
      }
    })
     .then( res => {
      token.value = res.data.key
      // 로그인 성공 후 자동으로 메인 페이지로 이동하기
      router.push({name:'ArticleView'})
      console.log('로그인 완료')

    })
    .catch( err => console.log(err))
  }

  const logOut = function(){
    axios({
      method:'post',
      url:`${ACCOUNT_API_URL}/logout/`
    })
    .then( (res) => {
      token.value = null
      router.push({name:'ArticleView'})
      console.log('로그아웃 성공')

    })
    .catch( err => console.log(err))
  } 

  return { signUp,logIn,token, isLogin,logOut }
}, { persist: true })
