import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/', component: Home,
    },
    {
      path: '/doc', component: Doc,
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
          path: 'dailog',
          component: ()=> import('./components/dailogControl.vue')
        },
        {
          path: 'tabs',
          component: ()=> import('./components/tabsControl.vue')
        },
      ]
    }
  ]
})
