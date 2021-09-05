import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
        <header>
          <div className="wrap header--flex">
            <h1 className="header--logo"><NavLink to="/">Courses</NavLink></h1>
            <nav>
              <ul className="header--signedout">
                <li><NavLink to="/signup">Sign Up</NavLink></li>
                <li><NavLink to="/signin">Sign In</NavLink></li>
              </ul>
            </nav>
          </div>
        </header>
    )
  }
};