import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/home/home';
import Login from './pages/login/login';
import './App.css';

const login = {
  isLogged: false,
  signin(cb) {
    login.isLogged = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    login.isLogged = false;
    setTimeout(cb, 100);
  }
}

function App() {
  return (
    <Router basename='/blog-admin'>
      <Switch>
        {/* exact 精准匹配 */}
        <PrivateRoute exact path="/">
          <Home loginObj={ login }>123</Home>
        </PrivateRoute>
        <Route path="/login" children={ <Login loginObj={ login } /> } />
      </Switch>
    </Router>
  );
}

function PrivateRoute({ children, ...rest  }) {
  return (
    <Route 
      {...rest}
      render={(param) => {
        console.log(param, 'param');
        return login.isLogged ? children : (
          <Redirect 
            to={{
              pathname: '/login',
              state: { from: param.location } 
            }} 
          />
        )
      }}
    />
  )
}

export default App;
