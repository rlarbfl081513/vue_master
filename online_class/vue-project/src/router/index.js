import { createRouter, createWebHistory } from 'vue-router'
import UserView from '@/views/UserView.vue'
import Home from '@/views/Home.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserPost from '@/components/UserPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      // 장고에서는 <int:user_pk>
      // 뷰에서는 변수와 데이터를 묶기 위해서는 바인딩을 한다. 다이나믹 매칭을 위해서.
      path: '/user/:id',
      name:'user',
      component: UserView,
      //중첨된 라우팅 관리를 위해 children이라는 배열 생성
      children:[
        {
          path: 'profile',
          name: 'user-profile',
          component: UserProfile
        },
        {
          path: 'posts',
          name: 'user-posts',
          component: UserPost
        }
      ]
    }
  ],
})

export default router
