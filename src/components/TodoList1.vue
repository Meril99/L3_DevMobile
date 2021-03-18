        // :value agit comme v-model

<template>
    <div class="home">
        <input type="text" id="new-todo" v-model="newtodo">
        <button class="add-new-btn" @click="addTodo(newtodo)"> Ajouter Todo </button>
        <ul class="todos-list">
            <li v-for="todo in listetodos" v-bind:key="todo.id">
                <span class="todo-content" :class="{ done: todo.done }"
                @click="completeTodo(todo);"> {{todo.id}} : {{todo.name}} </span>
                <span class="del-todo" @click="removeTodo(todo);">Delete</span>
            </li>
        </ul>
    </div>
</template>
<script>
    import {   mapActions, mapGetters } from "vuex";

    export default {
        name: 'TodoList',

        data() {
            return {

                newtodo: "",
            }
        },

        methods: {
            ...mapActions("todolist", ['completeTodo']),
            // l'ajouter dans notre liste de todo à false
            ...mapActions("todolist", ['addTodo']),
            // remove
            ...mapActions("todolist", ['clearTodo']),

        },

        computed: {
            ...mapGetters("todolist", ['listetodos']),

        }
    }
</script>


<style >

.home {
  width: 65%;
  margin: 0 auto;
}
.todos-list{
  list-style: none;
  text-align: left;
}
.todo-item{
  padding: 10px;
  cursor: pointer;
}
.todo-content {
  font-size: 20px;
  line-height: 1.5;
   transition: font-weight .5s ease-in-out;

}

.todo-content:hover {
    font-weight:bold;
}

.del-todo {
    color: red;
    font-size: 14px;
    float: right;

}

.del-todo:hover{
    color: red;
    font-weight: bold;
}


.done {
    text-decoration: line-through;
    color: #dadadc;
}

.done:hover {
    font-weight:normal;
}


/* new Todo */

#new-todo {
    margin-top: 20px;
    padding: 5px 10px;
    line-height: 1;

}

#new-todo:focus{

    outline: none
}

/* new Todo button */

.add-new-btn{

    padding: 6px 10px;
    border: 1px solid #dadadc;
    background-color: #efefef;
}

.add-new-btn:hover {
    cursor: pointer;
}

</style>
