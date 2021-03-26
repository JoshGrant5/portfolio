import { useEffect } from 'react';
import { useTransition, animated } from 'react-spring'
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router';

import Landing from './components/Landing';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function Routes(props) {

  const location = useLocation();

  useEffect(() => {
    location.pathname === '/home' ? props.setOnHome(true) : props.setOnHome(false);
    location.pathname === '/' ? props.setOnLanding(true) : props.setOnLanding(false);
  }, [location.pathname]);
  
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 10 }
  });

  const landingItems = props.items;
  const swap = props.swapOut;
    
  return (
    transitions.map(({ item, props, key }) => (
      <animated.div
        id='route-animations' 
        style={{...props, position: 'absolute', width: '100%' }}
        key={key}>
        <Switch location={item}>
          <Route path="/" exact 
            render={() => (
              <Landing items={landingItems} swapOut={swap} fade={props.fade} />
            )}
          />
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