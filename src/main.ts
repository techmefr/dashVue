// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

// ⚡ Import de Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// ⚡ Création de l'instance Vuetify
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

// ⚡ Vuetify globalement
app.use(vuetify);

app.mount('#app');
