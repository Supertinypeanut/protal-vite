import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/', component: Home,
    },
    {
      path: '/doc', component: Doc,
      redirect: '/doc/switch',
      children: [
        {
          path: 'switch',
          component: ()=> import('./components/switchControl.vue')
        },
        {
          path: 'button',
          component: ()=> import('./components/buttonControl.vue')
        },
        {
          path: 'dialog',
          component: ()=> import('./components/dialogControl.vue')
        },
        {
          path: 'tabs',
          component: ()=> import('./components/tabsControl.vue')
        },
      ]
    }
  ]
})
