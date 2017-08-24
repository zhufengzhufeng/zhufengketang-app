import React from 'react';
import {render} from 'react-dom';

import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from "./containers/Home/index";
import Profile from "./containers/Profile/index";
import Lesson from "./containers/Lesson/index";
import App from "./containers/App";
import './common/index.less';
import store from './redux/store';
window._store = store;
import {Provider} from 'react-redux';
import Detail from "./containers/Detail/index";
import Login from "./containers/Login/index";
import Reg from "./containers/Reg/index";

import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
let history = createHistory();
import PrivateRoute from './PrivateRoute';
render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <App>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <PrivateRoute path={'/lesson'} component={Lesson}/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/detail'} component={Detail}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/reg'} component={Reg}/>
            </Switch>
        </App>
    </ConnectedRouter>
</Provider>,document.getElementById('app'));