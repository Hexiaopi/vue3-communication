import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/props',
      name: 'props',
      component: () => import('@/views/props/Parent.vue'),
    },
    {
      path: '/custom-event',
      name: 'custom-event',
      component: () => import('@/views/custom-event/Parent.vue'),
    },
    {
      path: '/event-bus',
      name: 'event-bus',
      component: () => import('@/views/event-bus/Parent.vue'),
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: () => import('@/views/v-model/Parent.vue'),
    },
    {
      path: '/useAttrs',
      name: 'useAttrs',
      component: () => import('@/views/useAttrs/Parent.vue')
    },
    {
      path: '/ref-parent',
      name: 'ref-parent',
      component: () => import('@/views/ref-parent/Parent.vue')
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      component: () => import('@/views/provide-inject/Parent.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('@/views/pinia/Parent.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('@/views/slot/Parent.vue')
    }
  ]
})

export default router
