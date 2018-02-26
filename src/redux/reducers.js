let initialState = 0

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if(state < 10) {
        return state + 1
      } else {
        return state
      }
    case 'DECREMENT':
      if(state > 0) {
        return state - 1
      } else {
        return state
      }    
    default:
      return state;
  }
}
