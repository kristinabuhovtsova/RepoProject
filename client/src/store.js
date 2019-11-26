import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { reducer as reduxFormReducer }  from 'redux-form' 
import thunk from 'redux-thunk'
import signInOutReducer from './reducers/sigInOutReducer'
import changeStatReducer from './reducers/changeStatReducer';
import {FetchingStat} from './actions/LoadStatAction'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers ({
    form: reduxFormReducer,
    in: signInOutReducer,
    statistics: changeStatReducer
});
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
window.store=store;
store.dispatch(FetchingStat())
export default store;
