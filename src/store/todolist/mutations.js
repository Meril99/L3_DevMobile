

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
   return todo
}

export function ADD_ITEM(state, item){
  if(item !== ""){
      state.sidebar.push({
        id: state.cpt + 1,
        name: item,
        countTodos : 1,
        todos : [],
      })
   }
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

export function COMPLETE_TODO(state, todo){
      todo.completed = !todo.completed
      console.log("ok");
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

export function DISPLAY_TODOLIST(state, todos){
    state.currentTodos = todos
  }
//export function CREAT_LISTE(state, list){
  //state
//}

//export function CLEAR_TODO(state, newtodo){
//    newtodo = ''
//}
