

export function  GET_TODO(state, todo){
      state.update = todo
    }
    
export function ADD_TODO(state, todo){
      state.todos.push({
        id: state.cpt + 1,
        name: todo,
        done: false,
      })
      
    }
        
export function EDIT_TODO(state, todo, update){

  var todos = state.todos
  todos.splice(todos.indexOf(todo), 1)
  todos.push({
    id: todo.cpt,
    name: update,
    done: false,
  })
  console.log(update)

       

    }
       
export function REMOVE_TODO(state, todo){
       var todos = state.todos
       todos.splice(todos.indexOf(todo), 1)
    }
        
export function COMPLETE_TODO(state, todo){
      todo.done = !todo.done
    }
       
export function CLEAR_TODO(state){
      state.newTodo = ''
    }