# Dynamic Route Matching
- 동적 경로 매칭
# Nested Routes
- 중첩 라우팅
- 예) /user/:id/profile & /user/:id/posts 같은 경우 
# programmatic Navigation
- routerlink대신 자바스크립트를 사용해 페이지를 이동하는 것
- 프로그래밍 방식 url 네비게이션
  - 프로그래밍으로 url 이동하기
  - 라우터의 인스턴스 메서드를 사용해 RouterLink로 a태그를 만드는 것처럼 프로그래밍으로 내비게이션 관련작업을 수행할 수 있음
- router의 메서드
  - 다른 위치로 이동 : router.push()
    - 새 항목을 history stack에 push하니까 사용자가 브라우저 뒤로가기 버튼을 클릭하면 이전으로 갈 수 있음
    - routerLink를 클리했을때 내부적으로 호출되는 메서드이므로 ROuterLink를 클리하는 건 router.push를 호출하는 것과 같음
    - 선언적 표현 : <RouterLink :to="">
    - 프로그래밍적 표현 router.push()
  - 현재 위치 바꾸기 : router.replace()


---
# RouterView
 `Vue Router`의 `\<RouterView />`는 겉보기엔 단순한 태그처럼 보여도 **Vue가 내부적으로 동작을 자동으로 처리해주는 특수 컴포넌트**예요.

---

## ✅ 왜 `<RouterView />`는 태그만 있어도 동작할까?

### 👉 이유: Vue Router가 자동으로 해당 경로에 맞는 컴포넌트를 "그 자리"에 렌더링하기 때문

예를 들어 아래 라우팅 구조를 보세요:

```js
{
  path: '/user/:id',
  component: UserView,
  children: [
    {
      path: 'profile',
      component: UserProfile
    },
    {
      path: 'posts',
      component: UserPost
    }
  ]
}
```

이 말은 다음과 같아요:

* `/user/1/profile`에 접근하면 `UserView` 안에서 `UserProfile`을 보여줘야 해요.
* 이때 `UserView` 안에 `<RouterView />`가 있어야 자식 컴포넌트(`UserProfile`, `UserPost`)가 **그 자리에 끼워져서 렌더링**될 수 있어요.

---

## 🔍 비유로 이해해보기

* `UserView.vue` = 부모 뷰 = **틀**
* `<RouterView />` = **비어 있는 액자**
* 라우터가 액자에 상황에 맞는 \*\*그림(UserProfile, UserPost 등)\*\*을 자동으로 끼워줌

```vue
<template>
  <div>
    <h1>틀</h1>
    <RouterView/> <!-- 자식 컴포넌트가 들어올 자리 -->
  </div>
</template>
```

---

## ❓그럼 링크로 이동하면 자식 컴포넌트가 새로 뜨는 게 아닌가요?

맞아요. `RouterLink`를 클릭하면 **경로(URL)가 바뀌고**, 그에 맞는 컴포넌트가 `<RouterView />` 자리에 **자동으로 뜨는 구조**입니다.

따라서 `<RouterView />`가 없으면 **떠야 할 자식 컴포넌트를 표시할 공간이 없기 때문에 아무것도 안 보이게 됩니다.**

---

## ✅ 정리

| 질문                               | 답변                                                               |
| -------------------------------- | ---------------------------------------------------------------- |
| `<RouterView />`는 왜 태그만 있어도 동작해? | Vue Router가 현재 URL에 맞는 컴포넌트를 자동으로 렌더링함                           |
| 자식 컴포넌트를 불러오는 코드를 직접 넣지 않아도 되나?  | 네. URL과 매칭되는 컴포넌트를 Vue Router가 자동으로 찾아서 `<RouterView />`에 끼워 넣어요 |
| 없어도 되지 않나?                       | ❌ 절대 안 됩니다. 없으면 자식 컴포넌트는 **표시될 자리를 못 찾아서 안 나옵니다.**               |

---

