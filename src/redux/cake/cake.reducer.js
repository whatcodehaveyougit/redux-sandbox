const initialState = {
  numberOfCakes: 0
};

export function cakeReducer(state = initialState, action) {
  console.log(state.numberOfCakes + 1)
  console.log(action)
  switch (action.type) {
    case 'BUY_CAKE':
      return { numberOfCakes: state.numberOfCakes + 1 }
    case 'SELL_CAKE':
      return { numberOfCakes: state.numberOfCakes - 1 }
    default:
      return state
  }
}