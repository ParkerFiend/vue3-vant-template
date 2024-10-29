import { createApp } from 'vue';
import App from './App.vue';
// import './scss/index.scss';

import router, { setupRouter } from './router';
import { setupStore } from './store';

import VConsole from 'vconsole';
import { isUseVconsole } from './utils/env';

(async () => {
  const app = createApp(App);
  setupStore(app);
  setupRouter(app);

  if (isUseVconsole()) {
    new VConsole({ log: { maxLogNumber: 3000 } });
  }

  await router.isReady();

  app.mount('#app');
})();
