import { createApp } from 'vue';
import App from './App.vue'; // 🔥 Vue charge ici App.vue
import router from './router'; // 🔥 Vue charge ici le Router

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({ components, directives });

const app = createApp(App);
app.use(router); // 🔥 Ajoute Vue Router
app.use(vuetify); // 🔥 Ajoute Vuetify

app.mount('#app'); // 🔥 Monte Vue dans <div id="app">
