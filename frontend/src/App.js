import React, {useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import Newpost from './feed/pages/Newpost';
import Navigation from './shared/components/Navigation/Navigation';
import Userposts from './feed/pages/Userposts'
// import Sample1 from './shared/components/Sample/Sample1'
import Loading from './shared/components/UI/Loading/Loading'
import Validatedform from './shared/components/ValidatedForm/Validatedform';
import Updatepost from './feed/pages/Updatepost';
import { AuthContext } from './shared/components/Context/auth-context';

// const coordinates = {
//   lat : 28.8383372,
//   lng : 78.2418124
// };

const App = () => {

  const [isLoggedin, setisLoggedin] = useState(false);

  const login = useCallback(() => {
    setisLoggedin(true);
    // console.log(isLoggedIn);
  }, []);

  const logout = useCallback(() => {
    setisLoggedin(false);
  }, []);

  let routes;

  if(isLoggedin) {
    routes = (
      <Switch>
        <Route path = "/" exact> 
            <Users />
        </Route>
        <Route path = "/:userId/feed" exact>
          <Userposts />
        </Route>
        <Route path = "/feed/new" exact>
          <Newpost />
        </Route>
        <Route path = "/feed/:postId" exact>
          <Updatepost />
        </Route>
        <Redirect to = "/" />
      </Switch>
    );
  }
  else {
    routes = (
      <Switch>
        <Route path = "/" exact> 
          <Users />
        </Route>
        <Route path = "/:userId/feed" exact>
          <Userposts />
        </Route>
        <Route path = "/auth" exact>
          <Validatedform /> 
        </Route>
        <Redirect to = "/auth" />
      </Switch>
    );
  }

              {/* <Route path = "/testMAP" exact>
              <Sample1 center = {coordinates} zoom = {10.56} />
            </Route> */}

            {/* <Route path = "/search" exact>
              <Loading />
            </Route> */}

  return ( 
    <AuthContext.Provider value = {{ isLoggedin : isLoggedin, login : login, logout : logout}}>
      <Router>
      <Navigation />
      <main>
          {routes}
      </main>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
