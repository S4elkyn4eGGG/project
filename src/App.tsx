import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';
import Header from 'components/Header';
import mainStore from 'store/main';

const App = (): JSX.Element => {
  const { isLoading } = mainStore();

  return (
    <>
      <Router>
        <Header />
        <div className='router-body'>
          <Routes />
        </div>
      </Router>
      {isLoading && <div>LOADING COMPONENT</div>}
    </>
  );
};

export default App;
