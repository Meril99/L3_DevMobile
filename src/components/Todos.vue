<template>
  <div class="todoapp">

    <div class="header">
    <h2>La list : {{todoListeName }}</h2>
      <input type="text" class="new-todo" placeholder="Ajouter une tache" v-model=newTodo  @keyup.enter="createTodo({name : newTodo, token :token, currentTodos : filteredTodos})">
      <button class="addListe" @click="createTodo({id:getListId, name : newTodo, token : token})">Ajouter</button>
    </div>

    <div class="main">

      <ul class="list">
        <li class="todo" v-for="todo in filteredTodos" v-bind:key="todo.id"  :class="{completed: todo.completed, editing: todo == editing}">
          <div class="view">
             <input type="checkbox" v-model="todo.completed" class="toggle" @change="completeTodoApi({todo : todo, id : getListId,token : token})">
            <label @dblclick="modifyTodoApi({token : token, todo: todo})" >{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo({token : token, todo : todo})"></button>
          </div>
          <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEditing(editing)"  @blur="doneEditing(editing)" @keyup.esc="cancelEditing(editing)" v-focus="todo == editing">
        </li>
      </ul>
    </div>

    <footer class="footer pb-10" v-show="hasTodos" >
      <span class="todo-count"><strong>{{ remaining }}</strong> tâches à faire</span>
      <ul class="filters">
        <li><a href="#" :class="{selected: filters === 'all'}" @click.prevent=changeFilters(1)>Toutes</a></li>
        <li><a href="#" :class="{selected: filters === 'todo'}" @click.prevent=changeFilters(2)>A faire</a></li>
        <li><a href="#" :class="{selected: filters === 'done'}" @click.prevent=changeFilters(3)>Faites</a></li>
      </ul>
    </footer>
  </div>
</template>
<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: 'Todos',

        data() {
            return {
                newTodo: "",
            }
        },

        methods: {
          ...mapActions("todolist", ['completeTodo']),
          ...mapActions("todolist", ['completeTodoApi']),
          ...mapActions("todolist", ['doneEditing']),
          ...mapActions("todolist", ['hasTodos']),
          ...mapActions("todolist", ['changeFilters']),

              ///recupération /////
          ...mapActions("todolist", ['getTodolists']),
          ...mapActions("account", ['getUser']),
          ...mapActions("todolist", ['getTodos']),

            //////creation d'un todo////
          ...mapActions("todolist", ['addTodo']),  /// sans api
          ...mapActions("todolist", ['createTodo']), //avec api 
          // "createTodo({name : newTodo, token :token, currentTodos : filteredTodos})"

          ///////delete d'un odos ////////
          ...mapActions("todolist", ['deleteTodo']), //avec api
          ...mapActions("todolist", ['removeTodo']),  // sans api

            //// mofification
          ...mapActions("todolist", ['editTodo']), //sans api
          ...mapActions("todolist", ['modifyTodoApi']), //avec api

        },

        computed: {
            ...mapGetters("todolist", ['todos']),
            ...mapGetters("todolist", ['editing']),
            ...mapGetters("todolist", ['remaining']),
            ...mapGetters("todolist", ['filters']),
            ...mapGetters("todolist", ['filteredTodos']),
            ...mapGetters("account", ['token']),
            ...mapGetters("todolist", ['todoListeName']),
            ...mapGetters("todolist", ['getListId'])


        },
        mounted (){
          this.getUser(this.token)
          this.getTodolists(this.token)
          //this.getTodos({token : this.token, id : this.getListId})
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



<style src="../style/app.css"></style>
