import axios from "axios";

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

  export function  removeTodoList({commit}, todolist){
    commit("REMOVE_TODO_LIST", todolist)
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

  export function displayTodoList({commit}, data){
    commit("DISPLAY_TODOLIST", data.liste)
  }

  export function getTodolists({commit}, token){
      let config = {
         headers: {
             Authorization: 'Bearer ' + token
         }
       }
      return axios.get('http://138.68.74.39/api/todolists', config)
      .then(response=>{
        console.log(response)
        commit("SET_TODOLISTS",response.data)
      })
      .catch(error =>{
        console.log(error.response.data)
      })
  }

  export function getTodos({commit}, data){
        let config = {
         headers: {
             Authorization: 'Bearer ' + data.token
         }
       }
      return axios.get('http://138.68.74.39/api/todos/'+data.id, config)
      .then(response=>{
        console.log(response.data)
        commit("SET_TODOS",response.data)
      })
      .catch(error =>{
        console.log(error.response)
      })
  }

  export function createTodoList({commit}, data){
    let config = {
      params:{
        name : data.name
      },
       headers: {
           Authorization: 'Bearer ' + data.token
       }
     }
     axios.post('http://138.68.74.39/api/todolist', null, config)
     .then(response => {
       commit("CREATE_TODO_LIST", response)
     })
     .catch(error =>{
       console.log(error.response)
     })
}

export function createTodo({commit}, data){
  console.log(data.id)
  let config = {
    params:{
      name : data.name,
      completed : 0,
      todolist_id : data.id
    },
     headers: {
         Authorization: 'Bearer ' + data.token
     }
   }
   axios.post('http://138.68.74.39/api/todo', null, config)
   .then(response => {
     console.log(response)
     commit("CREATE_TODO", response)
   })
   .catch(error =>{
     console.log(error.response)
   })
}

export function deleteTodoList({commit}, data){
  let config = {
     headers: {
         Authorization: 'Bearer ' + data.token
     }
   }

   axios.delete('http://138.68.74.39/api/todolist/'+data.liste.id, config)

   .then(response => {
     console.log(response)
     commit("REMOVE_TODO_LIST", data.liste)
   })

   .catch(error =>{
     console.log(error.response.data)
   })
}

export function deleteTodo({commit}, data){
  let config = {
     headers: {
         Authorization: 'Bearer ' + data.token
     }
   }
   axios.delete('http://138.68.74.39/api/todo/'+data.todo.id, config)

   .then(response => {
     console.log(response)
     commit("REMOVE_TODO", data.todo)
   })

   .catch(error =>{
     console.log(error.response.data)
   })
}

export function completeTodoApi({commit}, data){
  let config = {
    params:{
      name : data.todo.name,
      completed : data.todo.completed,
      todolist_id : data.id
    },
     headers: {
         Authorization: 'Bearer ' + data.token
     }
   }
   axios.post('http://138.68.74.39/api/completeTodo/'+data.todo.id, null, config)

   .then(response => {
     console.log(response)
     commit("COMPLETE_TODO", data.todo)
    })

   .catch(error =>{
     console.log(error.response.data)
   })
}

export function modifyTodoApi({commit}, data){
  let config = {
    params:{
      name : data.todo.name,
    },
     headers: {
         Authorization: 'Bearer ' + data.token
     }
   }
   axios.post('http://138.68.74.39/api/completeTodo/'+data.todo.id, null, config)

   .then(response => {
     console.log(response)
     commit("EDIT_TODO", data.todo)
    })

   .catch(error =>{
     console.log(error.response.data)
   })
}