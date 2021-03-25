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


          /////création de List//////////
          ...mapActions("todolist", ['createTodoList']),  //creation list avec api
          //...mapActions("todolist", ['addItem']),  //creation list sans api

          display(data){
            this.displayTodoList(data)
            .then(() => this.getTodos({token: data.token, id : data.liste.id}));
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
