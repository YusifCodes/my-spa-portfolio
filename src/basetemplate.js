import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Home from "./pages/home";
import About from "./pages/about";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function BaseTemplate() {
  const locations = {
    "": {
      p: "",
      n: "about",
    },
    about: {
      p: "",
      n: "experience",
    },
    experience: {
      p: "about",
      n: "contact",
    },
    contact: {
      p: "experience",
      n: "contact",
    },
  };

  let currentPage = window.location
    .toString()
    .split("/")
    .slice(-1)[0];

  const history = useHistory();

  const refresh = (path, resetRoute) => {};

  const handleScroll = (e) => {
    if (e.deltaY < 0) {
      refresh("/contact", "/");
    } else if (e.deltaY > 0) {
      refresh("/about", "/");
    }
  };

  window.addEventListener("wheel", handleScroll);

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
                  <span className='hash-span'>/</span>home
                </Link>
              </li>
              <li>
                <Link to='/about' className='about-link'>
                  <span className='hash-span'>/</span>about
                </Link>
              </li>
              <li>
                <Link to='/experience' className='experience-link'>
                  <span className='hash-span'>/</span>experience
                </Link>
              </li>
              <li>
                <Link to='/contact' className='contact-link'>
                  <span className='hash-span'>/</span>contact
                </Link>
              </li>
            </ul>
          </div>
          <ul class='timeline-navigation'>
            <li>
              <Link to='/' className='home-link'>
              <li class='timeline-child t-home'></li>
            </Link>
            </li>
            <Link to='/about' className='about-link'>
              <li class='timeline-child t-about'></li>
            </Link>
            <Link to='/experience' className='experience-link'>
              <li class='timeline-child t-experience'></li>
            </Link>
            <Link to='/contact' className='contact-link'>
              <li class='timeline-child last-timeline-child t-contact'></li>
            </Link>
          </ul>
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

export default BaseTemplate;
