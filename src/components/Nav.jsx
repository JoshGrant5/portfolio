import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';

export default function Nav(props) {

  const clearAnimations = () => {
    if ( props.animations.length > 1) { 
      props.animations.map(clearTimeout) 
    }
  };

  return (
    <nav>
        <div id='left-nav'>
          <NavLink to="/" id='logo2' onClick={clearAnimations}>JG</NavLink>
        </div>
        <div id="right-nav">
          <NavLink to="/home" activeClassName='is-selected' className='nav-item' onClick={clearAnimations}>Home</NavLink>
          <NavLink to="/about" activeClassName='is-selected' className='nav-item' onClick={clearAnimations}>About</NavLink>
          <NavLink to="/projects" activeClassName='is-selected' className='nav-item' onClick={clearAnimations}>Projects</NavLink>
          <NavLink to="/resume" activeClassName='is-selected' className='nav-item' onClick={clearAnimations}>Resume</NavLink>
          <NavLink to="/contact" activeClassName='is-selected' className='nav-item' onClick={clearAnimations}>Contact</NavLink>
        </div>
    </nav>
  )
};