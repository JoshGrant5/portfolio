import { useState, useCallback, useRef } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Nav from './components/Nav';
import ProfilePic from './components/ProfilePic';
import MediaIcons from './components/MediaIcons';
import Routes from './Routes';
import jg from './img/jg.svg';
import './styles/index.scss';

export default function App() {

  const color = 'rgb(40, 215, 159)';

  const [onHome, setOnHome] = useState(false);
  const [onLanding, setOnLanding] = useState(false);
  const ref = useRef([]);
  const [animations, setAnimations] = useState(ref);
  const [items, setItems] = useState([]);

  const swapOut = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    setItems([]);
    document.getElementById('view-bttn').style.opacity = 0;
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Full Stack Developer']), 2000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Baseball Lover', 'Full Stack Developer']), 4000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Full Stack Developer']), 6000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Film Snob', 'Full Stack Developer']), 8000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Full Stack Developer']), 10000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Canucks Fan', 'Full Stack Developer']), 12000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Full Stack Developer']), 14000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Caffeine Enthusiast', 'Full Stack Developer']), 16000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Full Stack Developer']), 18000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Your Next Hire?', 'Full Stack Developer']), 20000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Full Stack Developer']), 22000));
    ref.current.push(setTimeout(() => colorFinal(), 24000));
    setAnimations(ref.current);
  }, []);

  const colorFinal = () => {
    if (document.getElementById('view-bttn')) {
      document.getElementById('view-bttn').style.opacity = 1;
    }
    Array.from(document.getElementsByClassName('heading-item')).forEach(item => {
      if (item.innerHTML === 'Josh Grant') {
        item.style.transition = 'color 3s';
        item.style.color = color;
      }
    });
  }

  return (
    <BrowserRouter>
      <Nav animations={animations} />
      { onHome && (
        <div>
          <NavLink to="/" className='logo2 hidden'> <img src={jg} alt='svg' /> </NavLink>
          <ProfilePic /> 
          <MediaIcons />
        </div>
      )}
      { onLanding && <MediaIcons /> }
      <Routes setOnHome={setOnHome} setOnLanding={setOnLanding} items={items} swapOut={swapOut} />
    </BrowserRouter>
  );
}