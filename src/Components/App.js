import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Create from './Create';
import Home from './Home';
import Explore from './Explore';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../Styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">s_m_</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" >
                <Nav.Link>
                  <NavLink to="/create" class="custom-link" activeClassName="custom-link-active">create</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/explore" class="custom-link" activeClassName="custom-link-active">explore</NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
