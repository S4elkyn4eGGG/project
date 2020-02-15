import React, { Suspense, lazy } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

import ProtectedRoute from './protected';

const Main = lazy(() => import('pages/main'));
const Edit = lazy(() => import('pages/edit'));
const Login = lazy(() => import('pages/login'));
const ResetPassword = lazy(() => import('pages/resetPassword'));
const NotFound = lazy(() => import('pages/notFound'));
const Admin = lazy(() => import('pages/admin'));

export default (): any => {
  const location = useLocation();

  const animationConfig: any = {
    from: {
      opacity: 0,
      transform: `translate3d(100%, 0, 0)`,
      transition: 'all 0.2s 0',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      transition: 'all 0.2s 0',
    },
    leave: {
      display: 'none',
      transition: 'all 0.2s 0',
    },
  };

  const transitions = useTransition(
    location,
    (location: any) => location.key,
    animationConfig
  );

  return transitions.map(({ props: transition, key }) => (
    <animated.div key={key} style={transition}>
      <div className='router-body'>
        <Suspense fallback={<div>...</div>}>
          <Switch>
            <ProtectedRoute path='/' component={Main} exact />
            <ProtectedRoute path='/edit/:id' component={Edit} exact />
            <ProtectedRoute path='/admin' component={Admin} />
            <Route path='/login' component={Login} />
            <Route path='/reset-password' component={ResetPassword} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </animated.div>
  ));
};
