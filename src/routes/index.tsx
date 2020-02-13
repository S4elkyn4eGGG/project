import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from './protected';
import Loader from 'components/Loader/index';

const Main = lazy(() => import('pages/main'));
const Edit = lazy(() => import('pages/edit'));
const Login = lazy(() => import('pages/login'));
const ResetPassword = lazy(() => import('pages/resetPassword'));
const NotFound = lazy(() => import('pages/notFound'));

export default (): any => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <ProtectedRoute path='/' component={Main} exact />
        <ProtectedRoute path='/edit' component={Edit} />
        <Route path='/login' component={Login} />
        <Route path='/reset-password' component={ResetPassword} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Suspense>
  );
};
