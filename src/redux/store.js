import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer';

const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares));

// Generating the store object, pretty important stuff!
export const store = createStore(
  rootReducer,
  undefined,
  composedEnhancers
);
