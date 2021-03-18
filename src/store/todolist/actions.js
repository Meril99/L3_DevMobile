export function  getTodo({commit}, todo){
    commit("GET_TODO", todo)
  }

  export function  addTodo({commit}, todo){
    commit("ADD_TODO", todo)
  }
  export function  addItem({commit}, item){
    commit("ADD_ITEM", item)
  }

  export function  editTodo({commit}, todo){
    commit("EDIT_TODO", todo)
  }

  export function  removeTodo({commit}, todo){
    commit("REMOVE_TODO", todo)
  }

  export function  completeTodo({commit}, todo){
   commit("COMPLETE_TODO", todo)
  }

  export function doneEditing({commit}, editing){
    commit("DONE_EDITING",editing)
  }

  export function cancelEditing({commit}, editing){
    commit("CANCEL_EDITING",editing)
  }

  export function hasTodos({commit}){
    commit("HAS_TODOS")
  }

  export function changeFilters({commit}, value){
    commit("CHANGE_FILTERS", value)
  }

  export function displayTodoList({commit}, todos){
    commit("DISPLAY_TODOLIST", todos)
  }
  //export function  clearItem({commit}){
  //  commit("CLEAR_ITEM")
  //}
