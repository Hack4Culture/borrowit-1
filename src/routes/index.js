import React from 'react';
import { Route, IndexRoute } from 'react-router';
import asyncComponent from '../components/AsyncComponent';
import RequireAuthentication from '../components/commons/RequireAuthentication';
import PreventAuthenticatedUsers from '../components/commons/PreventAuthenticatedUsers';
import LandingPage from '../components/home/LandingPage';
import Dashboard from '../components/home/Dashboard';

import App from '../components/App';

// const LandingPage = asyncComponent(() => import('../components/home/LandingPage'));
// const Dashboard = asyncComponent(() => import('../components/home/Dashboard'));


export default (
  <Route>
    <Route path="/" component={App}>
       <IndexRoute component={PreventAuthenticatedUsers(LandingPage)} />
       <Route path="/dashboard" component={RequireAuthentication(Dashboard)} />
    </Route>
  </Route>
);
