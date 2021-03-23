<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input type="text" class="new-todo" placeholder="Ajouter une tache" v-model="newTodo" >
    </header>
    <div class="main">
      <input type="checkbox" class="toggle-all" v-model="allDone">
      <ul class="todo-list">
        <li class="todo" v-for="todo in filtreTodo" v-bind:key="todo.id"  :class="{completed: todo.completed, editing: todo == editing}">
          <div class="view">

             <input type="checkbox" v-model="todo.completed" class="toggle">
            <button class="destroy" @click.prevent="supprimer(todo)"></button>
          </div>
        </li>
      </ul>
    </div>
  
       <ul class="todo" v-for="li in l1" v-bind:key="li"  >
         <li class="todo" v-for="todo in li" v-bind:key="todo.id"  >
           <p>bonjour</p>
          </li>
      </ul>

    
    
    <footer class="footer pb-10" v-show="cfTodo" >
      <span class="todo-count"><strong>{{ remaining }}</strong> tâches à faire</span>
      <ul class="filters">
        <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
        <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
        <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
      </ul>
      <button class="clear-completed" v-show="completed" @click.prevent="deleteCompleted">Supprimer les tâches finies</button>
    </footer>
    
  </section>
</template>

<script>


export default {
  name: 'TodoList',
  data () {
    return {
      listeDliste : [],
     
      
      
      todos: [
                {
                    id: 1,
                    name : 'tache 1',
                    completed : false 
                },
                {
                    id: 2,
                    name : 'tache 2',
                    completed: true
                }
            ],
        
       l1 : [this.todos],
      
          
      liste : [this.todos],
      newTodo: '',
      filter: 'all',
      editing: null,
      oldTodo: '',
      editedTodo: ''
    }
  },
  methods: {
    ajout(){
      this.todos.push({
        id : this.todos.length + 1,
        completed:false,
        name : this.newTodo
      })
      this.newTodo = '' 
    },
    modifier(todo){
      this.oldTodo = todo.name
      this.editing = todo
    },
    todoChge(){
      this.editing = null
    },
    changerModif(){
      this.editing.name = this.oldTodo
      this.todoChge()
    },
    supprimer(todo){
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    }
  },
  computed: {
    remaining () { 
      return this.todos.filter(function (todo){
        return !todo.completed
      }).length
    },
    cfTodo () {
      return this.todos.length > 0
    },
    filtreTodo () {
      if (this.filter === 'todo') {
        return this.todos.filter(todo => !todo.completed)
      } else if (this.filter === 'done') {
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos
    },
    
  },
  directives: {
    focus(el, value){
      if(value){
        el.focus()        
      }
    }
  }
}
</script>


