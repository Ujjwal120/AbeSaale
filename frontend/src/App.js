import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import Newpost from './feed/pages/Newpost';
import Navigation from './shared/components/Navigation/Navigation';
import Userposts from './feed/pages/Userposts'

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

            <Route path = "/:userId/feed/:hash" exact>
              {/* <script>console.log("idhar")</script>
              <Users /> */}
            </Route>

            <Route path = "/:userId/feed" exact>
            {/* <script>console.log("idhar")</script> */}
              <Userposts />
            </Route>

            <Redirect to = "/" />

        </Switch>
      </main>
    </Router>
  );
}

export default App;
