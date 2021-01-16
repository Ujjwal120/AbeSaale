import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPost from './feed/pages/NewPost';

const App = () => {
  return ( 
      <Router>
        <Switch>

          <Route path = "/" exact> 
            <Users />
          </Route>

          <Route path = "/feed/new" exact>
            <NewPost />
          </Route>

          <Redirect to = "/" />
      
        </Switch>
      </Router>
  );
}

export default App;
