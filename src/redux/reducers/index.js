import home from './home';
import user from './user';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
export default combineReducers({
    home,
    user,
    router:routerReducer
});