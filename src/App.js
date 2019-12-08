import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LoginForm from './LoginForm';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>      
        <Route path="/login">
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
