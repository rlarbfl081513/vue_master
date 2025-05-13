## 🧩 Vue.js Component State Flow 정리

이 정리는 `App.vue` → `Parent.vue` → `ParentChild.vue` → `ChildItem.vue` 로 이어지는 Vue 컴포넌트 계층에서 **어떻게 데이터가 전달되고**, **어떤 방식으로 출력되는지**를 이해하기 위한 코드 기반 설명입니다.

---

## 📁 App.vue

```vue
<template>
  <!-- Parent 컴포넌트에 user-name이라는 prop을 넘기며 렌더링 -->
  <Parent user-name="mark" />
</template>

<script>
import Parent from './components/Parent.vue' // Parent 컴포넌트 import
</script>
```

🔹 **`App.vue` 역할**: 최상위 루트 컴포넌트로, `Parent.vue`를 자식으로 사용하고 `user-name`이라는 prop을 전달함.

---

## 📁 Parent.vue

```vue
<template>
  <div>
    <h2>부모 컴포넌트입니다.</h2>
    <!-- ParentChild 컴포넌트에 props로 userName과 parentName 전달 -->
    <ParentChild :user-name="userName" parent-name="bella" />
  </div>
</template>

<script>
import ParentChild from './ParentChild.vue' // 하위 컴포넌트 import

// defineProps를 통해 상위 컴포넌트에서 받은 props 선언
defineProps(['userName'])
</script>
```

🔹 **`Parent.vue` 역할**:

* `App.vue`에서 전달받은 `user-name`을 `userName`으로 받아서 `ParentChild.vue`에 다시 전달
* 추가로 `parent-name`이라는 새 prop도 함께 넘김

---

## 📁 ParentChild.vue

```vue
<template>
<div>
  <h3>Child에서 작성한 글</h3>
  <p>{{ userName }}</p>
  <p>{{  parentName }}</p>
  <!-- ChildItem componenets는 child.vue가 가진 items 배열의 요소 수 만큼 만들거다 -->
  <!-- :item = "item"는 객체 정보를 보내기 위한것 -->
  <ChildItem 
    v-for="item in items" 
    :key="item.id"
    :item = "item"  
    @some-event="onSomeEvent"
  />
</div>
</template>

<script setup>
import {ref} from 'vue'
import ChildItem from './ChildItem.vue'

defineProps({
  userName : String,
  parentName : String
})

const items = ref([
  {id: 1, name: '사과'},
  {id: 2, name: '바나나'},
  {id: 3, name: '딸기'}
])

const onSomeEvent = function(item){
  console.log('데이터를 넘겨받음')
  for (let i=0; i < items.value.length; i+=1 ){
    if (item.id === items.value[i].id){
      items.value[i].name = '파인애플'
    }
  }
}
</script>

<style scoped>

</style>
```

🔹 **`ParentChild.vue` 역할**:

* 전달받은 `userName`, `parentName`을 화면에 출력
* `items` 배열의 각 객체를 `ChildItem` 컴포넌트에 넘기고 `someEvent` 이벤트를 수신함

---

## 📁 ChildItem.vue

```vue
<template>
<h1>child item</h1>
<p>{{ item.id }}</p>
<p>{{ item.name }}</p>
<!-- 버튼 클릭시, someEvent 발생 -->
<!-- <button @click="$emit('someEvent')">클릭</button> -->
<button @click="buttonClick"> 클릭</button>
</template>

<script setup>
const props = defineProps({
  item : Object
})

const emit = defineEmits(['someEvent'])
const buttonClick = function () {
  emit('someEvent', props.item)
}
// 절대 하위컴포넌트에서 prop 받은 데이터를 변경하기 위해 준 기능은 아닌
// 아래처럼 쓰면 안됨, 모든 name이 다 파인애플이 돼버림
// props.item.name = '파인애플'

</script>

<style scoped>

</style>
```

🔹 **`ChildItem.vue` 역할**:

* `item`을 받아 화면에 이름 출력
* 버튼 클릭 시 `someEvent` 이벤트를 발생시키고, `item.name`을 payload로 전달함

---

## 🔄 전체 흐름 요약

1. `App.vue` → `Parent.vue`에 `user-name="mark"` 전달
2. `Parent.vue` → `ParentChild.vue`에 `user-name`과 `parent-name="bella"` 전달
3. `ParentChild.vue` → `ChildItem.vue`에 `item` 객체들을 전달하며 리스트 렌더링
4. `ChildItem.vue`는 버튼 클릭 시 `someEvent`를 발생시키고, `ParentChild.vue`는 이를 `handleSomeEvent()` 메서드로 받아 처리

---

## 개념 요약

* **Props**: 부모가 자식에게 데이터를 넘겨줌
* **Event Emit**: 자식이 부모에게 이벤트를 전달
* **v-for + key**: 리스트 렌더링 시 고유 식별자 사용
* **@event**: 자식 컴포넌트에서 발생한 이벤트를 부모가 수신

## 요약
- ChildItem에서 @click="$emit('some-event', item)" 실행
- ParentChild에서 onSomeEvent(item) 실행
- items 배열에서 item.id와 같은 항목 찾아서 이름을 변경


이 구조를 이해하면 Vue의 상하위 컴포넌트 간 \*\*데이터 흐름(state flow)\*\*를 직관적으로 파악할 수 있습니다.
