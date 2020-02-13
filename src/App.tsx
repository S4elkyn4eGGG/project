import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';
import Header from 'components/Header';
import mainStore from 'store/main';
import Loader from 'components/Loader/index';
import useAuth from 'hooks/useAuth';

import { IHAuth } from 'models/hooks.model';

const App = (): JSX.Element => {
  const authState: IHAuth = useAuth();
  const { isLoading } = mainStore();

  return (
    <>
      <Router>
        <Header authState={authState} />
        <div className='router-body'>
          <Routes />
        </div>
      </Router>
      {isLoading && <Loader />}
    </>
  );
};

export default App;
