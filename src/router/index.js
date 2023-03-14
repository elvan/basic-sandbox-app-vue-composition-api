import { createRouter, createWebHistory } from 'vue-router';
import {
  default as HomeView,
  default as PostDetailView,
} from '../views/HomeView.vue';
import ModalsView from '../views/ModalsView.vue';
import PostsView from '../views/PostsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView,
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: PostDetailView,
    },
  ],
});

export default router;
