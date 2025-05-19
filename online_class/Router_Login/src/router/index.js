import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import UserPosts from '@/components/UserPost.vue'
import UserProfile from '@/components/UserProfile.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      // 변수와 데이터와 묶기위해서는 바인딩(:)하면 됨
      path: '/user/:id',
      // name: 'user',
      component: UserView,
      // 중첩된 라우팅 관리를 위해 children 배열 생성
      children: [
        { path: '',
          name: 'user',
          component: UserProfile
        },
        { path: 'profile',
          name: 'user-profile',
          component: UserProfile
        },
        // '/post'는 절대경로임으로 부모으 :id를 무시함
        { path: 'posts',
          name: 'user-post',
          component: UserPosts
        },
      ]
    },
    {
      path:'/login',
      name:'login',
      component:LoginView,
      beforeEnter: (to,from) => {
        console.log(to,from)
        const isLoggined = true
        
        if(isLoggined){
          // 이미 로그인되어있는 상태면 원래 있는 페이지에서 로그인페이지로 이동못하게 하기
          // return false
          
          // 로그인되어있는 상태면 특정 페이지로 이동하게하기 
          return {name:'home'}
        }
      }
    }
  ],
})

// router.beforeEach((to,from) => {
//   // 로그인 기능이 실제로 있지 않으니 다 false로 막기
//   const isLoggined = false
//   // 만약 어딘가로 이동하려는데 로그인안했으면 로그인페이지로 이동시키기
//   // to.name은 이동하려는 라우트의 이름으로 이동하려는 페이지가 로그인이 아니면 로그인 페이지로 보내라는거임 
//   if (!isLoggined && to.name !== 'login'){
//     // 로그인 페이지로 리다이렉트
//     alert('로그인 하세요')
//     return{name:'login'}
//   }
//   console.log(to,from)
// })
export default router
