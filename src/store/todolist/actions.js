export function  getTodo({commit}, todo){
    commit("GET_TODO", todo)
  }

  export function  addTodo({commit}, todo){
    console.log(todo)
    commit("ADD_TODO", todo)
  }

  export function  editTodo({commit}, todo, update){
    commit("EDIT_TODO", todo, update)
  }

  export function  removeTodo({commit}, todo){
    commit("REMOVE_TODO", todo)
  }

  export function  completeTodo({commit}, todo){
   commit("COMPLETE_TODO", todo)
  }

  export function  clearTodo({commit}){
    commit("CLEAR_TODO")
  }
  