import React from 'react';
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteChildrenProps,
} from 'react-router-dom';
import * as H from 'history';

import useAuth from 'hooks/useAuth';

export interface IProtectedRouteProps {
  location?: H.Location;
  component?: any;
  render?: (props: RouteComponentProps<any>) => React.ReactNode;
  children?:
    | ((props: RouteChildrenProps<any>) => React.ReactNode)
    | React.ReactNode;
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
}

const ProtectedRoute: any = ({
  component: Component,
  ...rest
}: IProtectedRouteProps) => {
  const { user, userResponse } = useAuth();

  return (
    <Route
      {...rest}
      render={(props: IProtectedRouteProps): JSX.Element | null => {
        const redirectConfig = {
          pathname: '/login',
          state: {
            from: props.location,
          },
        };

        if (!userResponse) {
          return null;
        }

        return user ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectConfig} />
        );
      }}
    />
  );
};

export default ProtectedRoute;
