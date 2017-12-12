import cart from './cart';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';

const rootReducer = combineReducers({
    router: routerReducer,
    form: formReducer,
    counter,
    cart
});
export default rootReducer;