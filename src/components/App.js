import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import MovieInfos from './Movies/MovieInfos';
import SignUp from './Authentification/SignUp';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route path="/:id" component={MovieInfos} /> */}
    <Route path="/signup" component={SignUp} />
    <h1>404 not Found</h1>
  </Switch>
);

export default App;
