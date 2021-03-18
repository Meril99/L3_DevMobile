export default function () {
    return {
		cpt:4,
    oldTodo:'',
    editing : null,
    filters : 1,
    sidebar : [
      {
        id: 1,
        name: 'liste 1',
        countTodos: 1,
        todos: [
          {
            id:1,
            name: 'exemple',
            completed: false,
          }
        ]
      }
    ],
    currentTodos :  [
			{ id: 1, name: 'exemple', completed: false },
		],
  }
}
