import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { request } from 'graphql-request';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Banner from './components/Banner'

import Home from './pages/Home';
import Changelog from './pages/Changelog';
import Docs from './pages/Docs';

import Document from './pages/Document';

function App() {

  const [docs, setDocs] = useState(null);

  // Get all docs
  useEffect(() => {
      const fetchDocs = async () => {
          const { docs } = await request(
              'https://api-eu-central-1.graphcms.com/v2/ckkvhq1szma5p01z090ux67pg/master',
              `
              {
                  docs {
                      id
                      shortDescription
                      documentTitle
                      article {
                        text
                      }
                      slug
                    }
              }
              `
          )
          setDocs(docs)
      }
      fetchDocs()
  }, []);

  return (
    <div className="antialiased">
      <Banner />
      <div className="max-w-container px-5 m-auto lg:px-10">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/changelog' component={Changelog} />
            <Route exact path='/docs' component={Docs} />
            {!docs ? ( 'Loading' ) : (
            <Route path='/docs/:slug'>
              <Document docs={docs} />
            </Route>
            )}
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
