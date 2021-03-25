<template>
    <div class=sidebar>
      <ul class="list">
        <li v-for="liste in todoListe" v-bind:key="liste.id">
          <div class = view>
            <label @click= "display({token : token, liste : liste})">{{ liste.name }}</label>
            <button class="destroy" @click.prevent="deleteTodoList({token : token, liste : liste})"></button>
          </div>
        </li>
      </ul>
      <div class = "additem">
        <input type="text" class="new-item" placeholder="Ajouter un item" v-model="newItem" @keyup.enter="createTodoList({token : token, name : newItem})">
        <button class="add-item" @click="createTodoList({token : token, name : newItem})"> 	&#43; </button>
      </div>
    </div>

<<<<<<< HEAD
=======
    <footer class="footer pb-10" v-show="hasTodos" >
      <span class="todo-count"><strong>{{ remaining }}</strong> tâches à faire</span>
      <ul class="filters">
        <li><a href="#" :class="{selected: filters === 'all'}" @click.prevent=changeFilters(1)>Toutes</a></li>
        <li><a href="#" :class="{selected: filters === 'todo'}" @click.prevent=changeFilters(2)>A faire</a></li>
        <li><a href="#" :class="{selected: filters === 'done'}" @click.prevent=changeFilters(3)>Faites</a></li>
      </ul>
    </footer>

  </div>

>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563
</template>

<script>
    import { mapGetters , mapActions} from "vuex";

    export default {
        name: 'TodoList',
        data() {
            return {
              newItem:'',
            }
        },

        computed:{
            ...mapGetters("account", ['token']),
            ...mapGetters("todolist", ['getListId']),

            ...mapGetters('todolist', ['todoListe']),

        },

        methods: {
          ...mapActions('todolist', ['displayTodoList']),

          ////supression////
          ...mapActions('todolist', ['removeTodoList']), //sans api
          ...mapActions("todolist",  ['deleteTodoList']), //avec api


          ////// avec axios/////
          ...mapActions("todolist", ['getTodolists']),
          ...mapActions("todolist", ['getTodos']),

<<<<<<< HEAD
=======

        },
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563

          /////création de List//////////
          ...mapActions("todolist", ['createTodoList']),  //creation list avec api
          //...mapActions("todolist", ['addItem']),  //creation list sans api

<<<<<<< HEAD
          display(data){
            this.displayTodoList(data)
            .then(() => this.getTodos({token: data.token, id : data.liste.id}));
=======

        },
        directives: {
          focus(el, value){
            if(value){
              el.focus()
            }
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563
          }

        },
        mounted (){
          //this.getTodos({token : this.token, id : this.getListId})
        },
    }

</script>

<style>
.add-item{
background-color: green;
padding : 3px;
font-size: 23px;
}
.new-item{}
</style>
