import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard'
import Removed from '../pages/Removed'


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/removed" component={Removed} />
    </Switch>
);

export default Routes;