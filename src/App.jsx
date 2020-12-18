import { useContext, useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { __RouterContext } from 'react-router';

import Nav from './components/Nav';
import ProfilePic from './components/ProfilePic';
import MediaIcons from './components/MediaIcons';
import Landing from './components/Landing';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

import './styles/index.scss';

export default function App() {

  const [onHome, setOnHome] = useState(false);
  const [onLanding, setOnLanding] = useState(false);

  return (
    <BrowserRouter>
      <Nav />
      { onHome && <ProfilePic /> }
      { onHome && <MediaIcons /> }
      { onLanding && <MediaIcons /> }
      <Routes setOnHome={setOnHome} setOnLanding={setOnLanding} />
    </BrowserRouter>
  );
}

function Routes(props) {

  const { location } = useContext(__RouterContext);

  useEffect(() => {
    location.pathname === '/home' ? props.setOnHome(true) : props.setOnHome(false);
    location.pathname === '/' ? props.setOnLanding(true) : props.setOnLanding(false);
  }, [location]);
  
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  });
    
  return (
    transitions.map(({ item, props, key}) => (
      <animated.div 
        style={{...props, position: 'absolute', width: '100%'}}
        key={key}>
        <Switch location={item}>
        <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </animated.div>
    ))
  );
}