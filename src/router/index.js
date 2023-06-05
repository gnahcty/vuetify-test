// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/ViewHome.vue'),
    meta: {
      title: '國立科技高中─校園社團介紹網'
    }
  },
  {
    path: '/guitar',
    //component:ViewGuitar <--預設載入
    component: () => import('@/views/ViewGuitar.vue'),//需要時再載入
    meta: {
      title: '吉他社'
    } 
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
