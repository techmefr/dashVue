import { createRouter, createWebHistory } from 'vue-router';

// ✅ Make sure this import matches the correct file location
import Index from '../pages/index.vue';
import About from '../pages/about.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
