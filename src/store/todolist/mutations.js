

export function  GET_TODO(state, todo){
      state.newTodo = todo
    }

export function ADD_TODO(state, todo){
  if(todo !== ""){
      state.todos.push({
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
       var todos = state.todos
       todos.splice(todos.indexOf(todo), 1)
    }

export function COMPLETE_TODO(state, todo){
      todo.done = !todo.done
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
  state.todos.length > 0
}


export function CHANGE_FILTERS(state, value){
  state.filters = value
}

//export function CLEAR_TODO(state, newtodo){
//    newtodo = ''
//}
