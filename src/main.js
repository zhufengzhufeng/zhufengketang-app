import React from 'react';
import {render} from 'react-dom';

import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from "./containers/Home/index";
import Profile from "./containers/Profile/index";
import Lesson from "./containers/Lesson/index";
import App from "./containers/App";
import './common/index.less'
render(<Router>
    <App>
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/lesson'} component={Lesson}/>
            <Route path={'/profile'} component={Profile}/>
        </Switch>
    </App>
</Router>,document.getElementById('app'));