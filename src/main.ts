import { createRouter, createWebHistory } from 'vue-router';

// Importez vos composants de page
import index from '@/pages/index.vue';
import about from '@/pages/about.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;