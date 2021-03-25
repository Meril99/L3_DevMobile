export const todos = (state) => {
    return state.currentTodos;
}

export const todoListe = (state) => {
    return state.todoListe;
}
export const todoListeName = (state) => {
   return state.currentList.name;
}
export const editing = (state) => {
    return state.editing;
}

export const getListId = (state) => {
  return state.currentList.id;
}
export const filters = (state) => {
    return state.filters;
}
export const oldTodo = (state) => {
    return state.oldTodo;
}
//parcourt la todos pour trouver une todo avec le même id qu en parammètre
export const getTodoId = (state) => (id) => {
    return state.currentTodos.find((todolist) => todolist.id === id);
}

// parcourt todos à la rechere d'un todo à true
export const completedTodos = (state) => {
    return state.currentTodos.filter(todo => todo.completed);
}

// parcourt todos à la rechere d'un todo à false et affiche un tableau d etodo a false
export const activeTodos = (state) => {
    return state.currentTodos.filter(todo => !todo.completed);
}

export const remaining =(state) => {
  //console.log(state.currentTodos != [])
  return state.currentTodos.filter(todo => !todo.completed).length;
}

export const filteredTodos = (state) => {
  if(state.filters === 2){
    return state.currentTodos.filter(todo => !todo.completed);
  }
  else if(state.filters === 3){
    return state.currentTodos.filter(todo => todo.completed);
  }
  return state.currentTodos
}
