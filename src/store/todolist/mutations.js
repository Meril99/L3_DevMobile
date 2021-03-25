

export function  GET_TODO(state, todo){
      state.newTodo = todo
    }

export function ADD_TODO(state, todo){
  if(todo !== ""){
      state.currentTodos.push({
        id: state.cpt + 1,
        name: todo,
        done: false
      })
   }
   todo = ''
   state.cpt = state.currentTodos.length
   return todo
}

export function ADD_ITEM(state, item){
  if(item !== ""){
      state.todoListe.push({
        id: state.spt + 1,
        name: item,
        countTodos : 1,
        todos : [],
      })
   }
   state.spt = state.todoListe.length

}
export function EDIT_TODO(state, todo){
      // var todos = state.todos
      // todos.splice(todos.indexOf(todo), 1)
       state.oldTodo = todo.name
       state.editing = todo
    }

export function REMOVE_TODO(state, todo){
       var todos = state.currentTodos
       todos.splice(todos.indexOf(todo), 1)
    }

export function REMOVE_TODO_LIST (state, todolist){
  var todolists = state.todoListe
  todolists.splice(todolists.indexOf(todolist), 1)
}

export function COMPLETE_TODO(state, todo){
    //todo.completed = !todo.completed
    for (var t in state.currentList.todos) {
      console.log("ok");
      if (t.id == todo.id) {
        if(todo.completed == 0){
          t.completed = 1
        }else{
          t.completed = 0
        }
      }
    }
}

export function DONE_EDITING(state){
  state.editing = null
}


export function CANCEL_EDITING(state){
  state.editing.name = state.oldTodo;
  DONE_EDITING(state)
}

export function HAS_TODOS(state){
  state.currentTodos.length > 0
}


export function CHANGE_FILTERS(state, value){
  state.filters = value
}

export function DISPLAY_TODOLIST(state, todoListe){
    state.currentList = todoListe
    state.currentTodos = todoListe.todos

    //console.log(todoListe.todos)
    //state.currentTodos = todoListe.todos
  }

  ////////: AVEC AXIOS /////////////
export function SET_TODOLISTS(state, payload){
  state.todoListe = payload
  //console.log(state.todoListe)

}
export function SET_TODOS(state, payload){
  state.currentTodos = payload
 // DISPLAY_TODOLIST(state, state.currentTodos)
  console.log(state.currentTodos)
}

export function REMOVE_LIST(state, response){
  console.log(response)
  state.message = response
}

export function CREATE_TODO_LIST(state, response){
    state.todoListe.push(response.data)
}
export function CREATE_TODO(state, response){
    //state.currentTodos.push(response.data)
    for (var list in state.todoListe) {
      if (list.id == state.currentList.id) {
        list.todos.push(response.data)
      }
    }
    console.log(response.data)
}

