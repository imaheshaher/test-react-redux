import React from 'react';
import { Route,Router,Switch } from 'react-router';
 
export default (
<Router>


  <Switch>
  <Route path="/" exact />
  <Route path="/product/:productId" exact  />
  <Route path="/redux" exact  />

  <Route>404 not found</Route>

  </Switch>
</Router>
)