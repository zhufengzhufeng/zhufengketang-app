import reducers from './reducers';
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';//运行action自定义dispatch
export default createStore(reducers,applyMiddleware(reduxThunk));