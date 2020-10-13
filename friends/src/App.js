import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Main from "./comp/main";
import Login from "./comp/login";
import PrivateRoute from "./axioos/PrivateRoute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="App">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>
            <Switch>
              <PrivateRoute exact path="/protected" component={Main} />
              <Route path="/login" component={Login} />
              <Route component={Login} />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
