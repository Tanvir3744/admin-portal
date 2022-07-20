import { combineReducers } from 'redux';
import { setProductReducers } from '../Reducers/Reducers';

export const rootReducers = combineReducers({
    setProdReducer : setProductReducers,
})