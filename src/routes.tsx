import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Main = lazy(() => import('pages/main'));
const Edit = lazy(() => import('pages/edit'));
const Login = lazy(() => import('pages/login'));

export default (): any => {
  return (
    <Suspense fallback={'<div>Loading...</div>'}>
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/edit' component={Edit} />
        <Route path='/login' component={Login} />
      </Switch>
    </Suspense>
  );
};
