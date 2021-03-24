import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory(
  process.env.NODE_ENV === 'production' ? '/protal-vite' : '/'
)
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: 'switch-demo',
          component: () => import('../components/demo/switch-demo.vue'),
        },
        {
          path: 'button-demo',
          component: () => import('../components/demo/button-demo.vue'),
        },
        {
          path: 'dialog-demo',
          component: () => import('../components/demo/dialog-demo.vue'),
        },
        {
          path: 'tabs-demo',
          component: () => import('../components/demo/tabs-demo.vue'),
        },
      ],
    },
  ],
})
