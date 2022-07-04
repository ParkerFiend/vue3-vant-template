import { createApp } from 'vue'
import App from './App.vue'
import './scss/index.scss'

import router, { setupRouter } from './router'
import { setupStore } from './store'
;(async () => {
  const app = createApp(App)
  setupStore(app)
  setupRouter(app)

  await router.isReady()

  app.mount('#app')
})()
