export default function () {
    return {
		cpt:1,
    spt:1,
    oldTodo:'',
    editing : null,
    filters : 1,
    message: "",
    todoListe : [],
    currentTodos :  [
      {
        id:1,
        name: 'exemple-todo',
        completed: 0,
      }
    ],
    currentList :
      {
        id: 3,
        name: 'exemple-liste',
        countTodos: 1,
        todos: [
          {
            id:1,
            name: 'exemple-todo',
            completed: 0,
          }
        ]
      }
  }
}
