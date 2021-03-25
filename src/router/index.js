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
<<<<<<< HEAD

=======
    meta:{
      requiresAuth:true,
    }
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563
  },
  {
    path: '/account',
    name: 'Account',
<<<<<<< HEAD
    component: Account,

=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Account,
    meta:{
      requiresVisitor:true,
    }
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
