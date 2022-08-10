import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from "./router";
import store from "./store";
import mixins from "./mixins";
loadFonts();

createApp(App)
  .use(vuetify)
  .use(store)
  .use(router)
  .mixin(mixins)
  .mount('#app');
