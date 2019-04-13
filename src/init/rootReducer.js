import { combineReducers } from 'redux';

//Reducers
import { reducer as dummyReducer } from '../bus/__DOMAIN__/reducer';

export const rootReducer = combineReducers({
    dummyReducer
});
