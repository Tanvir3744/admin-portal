import { createStore } from 'redux';
import { rootReducers } from './Reducers';
export const store = createStore(rootReducers, {}) // the second argument could be a middleware I'm gonna use that later
