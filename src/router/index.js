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
    meta:{
      requiresAuth:true,
    }
  },
  {
    path: '/account',
    name: 'Account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Account,
    meta:{
      requiresVisitor:true,
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
