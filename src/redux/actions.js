export const addTodo = newTodo => {
  return {
    type: 'ADD_TODO',
    payload: newTodo
  }
}

export const incrementCounter = () => ({type: 'INCREMENT'})

