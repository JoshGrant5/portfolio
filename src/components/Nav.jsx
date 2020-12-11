import { AppBar, Tabs, Tab } from '@material-ui/core';
import { useState } from 'react';
import '../styles/nav.scss';

export default function Nav(props) {
  const [value, setValue] = useState(0);

  const propIndex = index => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav>
      <AppBar id='navbar'>
        <a href='/' id='logo'> JG </a>
        <Tabs value={value} onChange={handleChange} id='tabs'>
          <Tab label="Projects" className='nav-item' {...propIndex(0)} />
          <Tab label="Background" className='nav-item' {...propIndex(1)} />
          <Tab label="Contact" className='nav-item' {...propIndex(2)} />
        </Tabs>
      </AppBar>
    </nav>
  )
};