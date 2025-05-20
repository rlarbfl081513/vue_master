import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 먼저 pinia 인스턴스를 만들고
const pinia = createPinia()
// 거기에 piugin을 연결하고
pinia.use(piniaPluginPersistedstate)
// 이제 app에 등록
app.use(pinia)
app.use(router)

app.mount('#app')
