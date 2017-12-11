import cart from './cart';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import counter from './counter'

const rootReducer = combineReducers({
    router: routerReducer,
    counter,
    cart
});
export default rootReducer;