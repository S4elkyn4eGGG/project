import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Header />
        <div className='router-body'>
          <Routes />
        </div>
      </Router>
    </>
  );
};

export default App;
