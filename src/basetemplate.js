import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Home from "./pages/home";
import About from "./pages/about";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class BaseTemplate extends React.Component {
  render() {
    return (
      <Router>
        <div className='background'>
          <div className='mesh'>
            <div className='header'>
              <div className='header-title'>
                <p className='title-style'>malikovyusif</p>
              </div>

              <div className='hamburger'>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
              </div>

              <ul className='nav-links'>
                <li>
                  <Link to='/' className='home-link'>
                    /home
                  </Link>
                </li>
                <li>
                  <Link to='/about' className='about-link'>
                    /about me
                  </Link>
                </li>
                <li>
                  <Link to='/experience' className='experience-link'>
                    /experience
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className='contact-link'>
                    /contact me
                  </Link>
                </li>
              </ul>
            </div>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/experience' component={Experience}></Route>
                <Route path='/contact' component={Contact}></Route>
              </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default BaseTemplate;
