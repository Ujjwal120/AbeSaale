import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import Newpost from './feed/pages/Newpost';
import Navigation from './shared/components/Navigation/Navigation';

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

            <Redirect to = "/" />

        </Switch>
      </main>
    </Router>
  );
}

export default App;
