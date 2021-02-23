import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import Newpost from './feed/pages/Newpost';
import Navigation from './shared/components/Navigation/Navigation';
import Userposts from './feed/pages/Userposts'
import Sample1 from './shared/components/Sample/Sample1'

const coordinates = {
  lat : 28.8383372,
  lng : 78.2418124
};

const App = () => {
  return ( 
    <Router>
      <Navigation />
      <main>
          <Switch>

            <Route path = "/" exact> 
              <Users />
            </Route>

            <Route path = "/feed/new" exact>
              <Newpost />
            </Route>

            <Route path = "/:userId/feed" exact>
              <Userposts />
            </Route>

            <Route path = "/testMAP" exact>
              <Sample1 center = {coordinates} zoom = {10.56} />
            </Route>

            {/* <Route path = "/:userId/feed/:num" exact>

            </Route> */}

            <Redirect to = "/" />

        </Switch>
      </main>
    </Router>
  );
}

export default App;
