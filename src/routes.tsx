import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from 'pages/main/index';
import Edit from 'pages/edit/index';

export default (): any => {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/edit" component={Edit} />
    </Switch>
  );
};
