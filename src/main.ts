import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 🔥 Import des styles globaux Vuetify
import 'vuetify/styles';

// 🔥 Import du fichier SCSS de configuration
import '@/styles/settings.scss';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark', // ✅ Active le mode dark
  }
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
