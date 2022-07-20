import { createStore } from 'redux';
import { rootReducers } from './Reducers';
export const store = createStore(rootReducers,
    {},
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) // the second argument could be a middleware I'm gonna use that later
