import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import Changelog from './pages/Changelog';

function App() {
  return (
    <div className="max-w-container px-5 m-auto lg:px-10">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/changelog' component={Changelog} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
