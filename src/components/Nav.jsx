import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';

export default function Nav(props) {
  return (
    <nav>
        <div id='left-nav'>
          <NavLink to="/" id='logo'>JG</NavLink>
        </div>
        <div id="right-nav">
          <NavLink to="/home" activeClassName='is-selected' className='nav-item'>Home</NavLink>
          <NavLink to="/about" activeClassName='is-selected' className='nav-item'>About</NavLink>
          <NavLink to="/projects" activeClassName='is-selected' className='nav-item'>Projects</NavLink>
          <NavLink to="/resume" activeClassName='is-selected' className='nav-item'>Resume</NavLink>
          <NavLink to="/contact" activeClassName='is-selected' className='nav-item'>Contact</NavLink>
        </div>
    </nav>
  )
};