import { AppBar, Tabs, Tab, Link } from '@material-ui/core';
import { useEffect, useState } from 'react';
import '../styles/nav.scss';

export default function Nav(props) {
  const [value, setValue] = useState(); // tracks which Tab has been selected

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Make Tabs act as anchor tags, using props.history to redirect routes
  useEffect(() => {
    const paths = ['/projects', '/background', '/contact'];
    props.history.push(paths[value]);
  }, [value, props.history])

  return (
    <nav>
      <AppBar id='navbar'>
        <a href='/' id='logo'> JG </a>
        <Tabs value={value} onChange={handleChange} id='tabs'>
          <Tab label="Projects" className='nav-item' />
          <Tab label="Background" className='nav-item' />
          <Tab label="Contact" className='nav-item' />
        </Tabs>
      </AppBar>
    </nav>
  )
};