import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const initialState = {
  numberOfCakes: 0
};

function rootReducer(state = initialState, action) {
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

const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares));

// Generating the store object, pretty important stuff!
export const store = createStore(
  rootReducer,
  undefined,
  composedEnhancers
);
