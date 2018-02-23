export const addTodo = newTodo => {
  return {
  type: 'ADD_TODO',
  payload: newTodo}
}

export const incrementCounter = () => ({
  type: 'INCREMENT'})

export const removeTodo = subtractTodo => {
  return {
    type: 'REMOVE_TODO'}}

export const decrementCounter = () => ({
  type: 'DECREMENT'})
