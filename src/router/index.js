import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id/edit',
      name: 'productEdit',
      component: ()=>import("@/views/EditView.vue")
    },
    {
      path: '/add',
      name: 'productAdd',
      component: ()=>import("@/views/AddView.vue")
    },
  ]
})

export default router
