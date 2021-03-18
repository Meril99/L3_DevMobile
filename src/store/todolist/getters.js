export const listetodos = (state) => {
    return state.todos;
}

export const listesidebar = (state) => {
    return state.sidebar;
}

export const editing = (state) => {
    return state.editing;
}

export const filters = (state) => {
    return state.filters;
}
export const oldTodo = (state) => {
    return state.oldTodo;
}
//parcourt la todos pour trouver une todo avec le même id qu en parammètre
export const getTodoId = (state) => (id) => {
    return state.todos.find((todolist) => todolist.id === id);
}

// parcourt todos à la rechere d'un todo à true
export const completedTodos = (state) => {
    return state.todos.filter(todo => todo.completed);
}

// parcourt todos à la rechere d'un todo à false et affiche un tableau d etodo a false
export const activeTodos = (state) => {
    return state.todos.filter(todo => !todo.completed);
}

export const remaining =(state) => {
  return state.todos.filter(todo => !todo.completed).length;
}

export const filteredTodos = (state) => {
  if(state.filters === 2){
    return state.todos.filter(todo => !todo.completed);
  }
  else if(state.filters === 3){
    return state.todos.filter(todo => todo.completed);
  }
  return state.todos
}
