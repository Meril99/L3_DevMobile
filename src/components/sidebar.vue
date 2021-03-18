<template>
    <div class=sidebar>
      <ul class="sidebar-list">
        <li v-for="sidebar in listesidebar" v-bind:key="sidebar.id">
          <div class = view>
            <label @click= "displayTodoList(sidebar.todos)">{{ sidebar.name }}</label>
          </div>
        </li>
      </ul>
      <div class = "additem">
        <input type="text" class="new-item" placeholder="Ajouter un item" v-model="newItem" @keyup.enter="addItem(newItem)">
        <button class="add-item" @click="addItem(newItem)"> 	&#43; </button>
      </div>
    </div>

</template>

<script>
    import { mapGetters , mapActions} from "vuex";

    export default {

        name: 'Sidebar',

        data() {
            return {
              newItem:''
            }
        },
        props: {
            id: {type: String, default: "1"}
        },
        computed:{
            ...mapGetters('todolist', ['listesidebar']),
            todo() {
                return this.getTodoId(this.id)

            }

        },
        methods: {
          ...mapActions("todolist", ['addItem']),
          ...mapActions('todolist', ['displayTodoList']),
        }
    }

</script>

<style>
.sidebar-list{
list-style: none;

}
.add-item{
background-color: green;
padding : 3px;
font-size: 23px;
}
.new-item{}
</style>
