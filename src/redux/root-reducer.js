import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cake.reducer";

// Whenever RootReducer updates a value, the entire root store object will be a new store object
// So if user object updates & categories does not, the selectCategoriesReducer will still get re-run
// Which will re-render components which are plugged into it.

// So whenever any action happens
// This will update entire redux store object
// Re-renders ALL components plugged into store, not good!
export const rootReducer = combineReducers({
  cake: cakeReducer,
});
