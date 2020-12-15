import { AppBar } from '@material-ui/core';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';

export default function Nav(props) {
  const [value, setValue] = useState(); // tracks which Tab has been selected

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav>
      {/* <AppBar id='navbar'> */}
        <div id='left-nav'>
          <NavLink to="/bio" id='logo'>JG</NavLink>
        </div>
        <div id="right-nav">
          <NavLink to="/projects" className='nav-item'>Projects</NavLink>
          <NavLink to="/skills" className='nav-item'>Skills</NavLink>
          <NavLink to="/background" className='nav-item'>Background</NavLink>
          <NavLink to="/contact" className='nav-item'>Contact</NavLink>
        </div>
      {/* </AppBar> */}
    </nav>
  )
};