# axios
물론이죠! `axios`에 대한 내용을 아래처럼 깔끔하게 마크다운 형식으로 정리해드릴게요.

---

# 📦 Axios 정리

## 🔍 Axios란?

**Axios**는 `Promise` 기반의 HTTP 클라이언트로, 브라우저와 Node.js에서 모두 사용할 수 있습니다.
주로 **Vue, React, Django 등 프론트엔드와 백엔드 사이에서 데이터 통신**할 때 사용됩니다.

> 📌 주 목적: 서버에 요청을 보내고, 응답을 받아 처리하기 위함

---

## ✅ 주요 기능

| 기능         | 설명                        |
| ---------- | ------------------------- |
| `GET`      | 서버에서 데이터 **조회**           |
| `POST`     | 서버에 데이터 **전송(생성)**        |
| `PUT`      | 데이터 **전체 수정**             |
| `PATCH`    | 데이터 **일부 수정**             |
| `DELETE`   | 데이터 **삭제**                |
| 요청 헤더 설정   | 토큰 인증 등 커스터마이징 가능         |
| 응답 및 에러 처리 | `.then()`과 `.catch()`로 처리 |

---

## 💡 기본 사용법

### `GET` 예시

```js
axios.get('https://api.example.com/items')
  .then(response => console.log(response.data))
  .catch(error => console.error(error))
```

### `POST` 예시

```js
axios.post('https://api.example.com/login', {
  username: 'gyuri',
  password: '1234'
})
  .then(response => console.log(response.data))
  .catch(error => console.error(error))
```

### 요청에 헤더 추가 (예: 인증 토큰)

```js
axios({
  method: 'post',
  url: '/api/articles/',
  data: {
    title: '게시글 제목',
    content: '게시글 내용'
  },
  headers: {
    Authorization: `Token ${userToken}`
  }
})
```

---

## 🛠 설치 방법

```bash
npm install axios
```

또는 CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

---

## 🧠 axios vs fetch

| 항목         | axios            | fetch               |
| ---------- | ---------------- | ------------------- |
| 문법         | 간결함              | 다소 복잡함              |
| JSON 자동 변환 | ✅ 자동             | ❌ 수동 (`.json()` 호출) |
| 오류 처리      | `.catch()`로 간편하게 | 상태 코드 확인 직접 해야 함    |
| 브라우저 호환    | ✅                | ✅                   |

---

## 📚 참고

* [Axios 공식 문서](https://axios-http.com/)
* [MDN fetch 문서](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)

---

# 전역가드
*"전역 가드(Global Guard)"\*\*는 **모든 라우터 이동에 대해 중간에서 검사하거나 막거나 허용하는 기능**

---

## 🔐 전역 가드(Global Navigation Guards)란?

Vue Router에서 **페이지를 이동할 때마다 실행되는 함수**로,
**로그인 여부 확인, 권한 확인, 페이지 접근 제어** 등에 사용돼요.

---

## ✅ 왜 써?

* 로그인하지 않은 사용자가 `/profile` 같은 보호된 페이지에 접근 못 하게 막고
* 로그인한 사용자는 `/login` 페이지 접근 못 하게 리디렉션 시키는 용도로 사용해요.

---

## 📌 기본 문법 (router/index.js)

```js
router.beforeEach((to, from, next) => {
  // to: 이동할 라우트 객체
  // from: 현재 라우트 객체
  // next(): 라우터 이동 계속 진행
  // next(false): 이동 중단
  // next('/login'): 다른 페이지로 리디렉션
})
```

---

## 🧪 예시: 로그인 안 했으면 로그인 페이지로 이동시키기

```js
import { useAccountStore } from '@/stores/accounts'

router.beforeEach((to, from, next) => {
  const store = useAccountStore()
  
  // 로그인 필요한 페이지 목록
  const authPages = ['ArticleCreate', 'Profile']
  
  if (authPages.includes(to.name) && !store.isLogin) {
    // 로그인이 필요한데 로그인 안했으면
    next({ name: 'LoginView' })
  } else {
    next()  // 그냥 진행
  }
})
```

---

## ✅ 정리

| 개념         | 설명                                                          |
| ---------- | ----------------------------------------------------------- |
| **전역 가드**  | 모든 라우터 이동 전에 실행됨                                            |
| **용도**     | 로그인 여부 체크, 권한 검사, 페이지 접근 제한                                 |
| **작성 위치**  | `router/index.js`                                           |
| **관련 메서드** | `router.beforeEach()` (이동 전), `router.afterEach()` (이동 후) 등 |

---

# vue Router 전역 가드 코드
```js
// 어떤 페이지로 이동하려할때 실행되는 함수
  // to 이동할 라우트 객체
  // from 현재 라우트 객체
router.beforeEach((to,from) => {
  //pinia로 만든 accountStore 가져오기
  // 로그인 여부 확인을 위해 isLogin값을 쓰려고 가져온거임
  const accountStore = useAccountStore()
  // 사용자가 ArticleView라는 페이지로가려는데 accountStore.isLogin이 false라면 로그인화면으로 가도록
  if(to.name === 'ArticleView' && !accountStore.isLogin){
    window.alert('로그인이 필요합니다')
    return {name: 'LogInView'}
  }
})
```
## beforeEach
- 뷰 라우터의 전역 네비게이션 가드 중 하나, 사용자가 페이지 이동하기전에 실행되는 함수
- 활용
  - 로그인 안한 유저가 보호된 페이지로 갈떄 막기
  - 특정 페이지 접근 막거나 조건 걸떄
  - 화면이동전 뭔가 확인하거나 로딩중 으로 만들고 싶을떄
## afterEach
```js
router.afterEach((to, from) => {
  console.log(`이동 완료: ${from.name} → ${to.name}`)
})

```
- 페이지 이동 완료 후 실행되는 함수
- 활용
  - 이동후 페이지 이동 로그 기록
  - 스크롤 위치 초기화
  - 로딩 스피너 종료
### 비교
| 가드 종류        | 실행 시점        | 역할            | 리턴 여부         |
| ------------ | ------------ | ------------- | ------------- |
| `beforeEach` | 페이지 이동 **전** | 이동 막기, 리디렉션 등 | ✅ `return` 사용 |
| `afterEach`  | 페이지 이동 **후** | 로그, 트래킹, 후처리  | ❌ `return` 없음 |

---

# user customizer