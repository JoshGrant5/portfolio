import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';

export default function Nav(props) {
  const [value, setValue] = useState(''); // tracks which nav option has been selected
  const textColor = '#c9d3c9';
  // const highlightColor =  'rgb(162, 216, 162)';
  const highlightColor = 'rgb(40, 215, 159)';

  const tabs = ['Home', 'About', 'Projects', 'Resume', 'Contact'];

  useEffect(() => {
    const items = Array.from(document.getElementsByClassName('nav-item'));
    items.forEach(item => {
      item.style.color = item.innerHTML === tabs[value] ? highlightColor : textColor;
    });
  }, [value]);
  
  return (
    <nav>
        <div id='left-nav'>
          <NavLink to="/" id='logo'>JG</NavLink>
        </div>
        <div id="right-nav">
          <NavLink to="/home" className='nav-item' onClick={() => setValue(0)}>Home</NavLink>
          <NavLink to="/about" className='nav-item' onClick={() => setValue(1)}>About</NavLink>
          <NavLink to="/projects" className='nav-item' onClick={() => setValue(2)}>Projects</NavLink>
          <NavLink to="/resume" className='nav-item' onClick={() => setValue(3)}>Resume</NavLink>
          <NavLink to="/contact" className='nav-item' onClick={() => setValue(4)}>Contact</NavLink>
        </div>
    </nav>
  )
};