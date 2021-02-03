import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Navigation from './components/Navigation';

import Home from './pages/Home';
import Changelog from './pages/Changelog';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/changelog' component={Changelog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
