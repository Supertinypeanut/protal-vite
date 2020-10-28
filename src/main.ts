import { createApp } from 'vue'
import App from './App.vue'
import Frank from './view/Frank.vue'
import Content from './view/Content.vue'
import './index.css'

import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/', component: Frank,
    },
    {
      path: '/content', component: Content,
    }
  ]
})

createApp(App).use(router).mount('#app')
