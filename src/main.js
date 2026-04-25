import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./views/Index.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('./views/NotFound.vue') }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
