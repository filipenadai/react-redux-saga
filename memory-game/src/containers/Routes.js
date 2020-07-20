import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Home/HomePage';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={HomePage}></Route>
    </Switch>
);

export default Routes;