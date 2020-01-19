import { createStore, combineReducers } from 'redux'

import slideReducer from '../reducers/slideReducer';

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  slide: slideReducer
});
const preloadedState = window.__PRELOADED_STATE__;
export const store = createStore(rootReducer,preloadedState);