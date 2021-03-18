export const listetodos = (state) => {

    return state.todos;
}

//parcourt la todos pour trouver une todo avec le même id qu en parammètre
export const getTodoId = (state) => (id) => {

        return state.todos.find((todolist) => todolist.id === id);
    
    

    }

// parcourt todos à la rechere d'un todo à true
export const completedTodos = (state) => {
        return state.todos.filter(todo => todo.done);
    }


//newTodo returns the value of the new todo entered by the user. This value is bound to the input
export const update = (state) => { state.newTodo; }

// parcourt todos à la rechere d'un todo à false et affiche un tableau d etodo a false
export const todos = (state) => {
    return state.todos.filter(todo => !todo.done);
}   




