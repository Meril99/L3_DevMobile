import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import Account from '../views/account.vue'
import Todo from '../views/todo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,

  },
  {
    path: '/account',
    name: 'Account',
    component: Account,

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
