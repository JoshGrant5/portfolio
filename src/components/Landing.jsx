import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTransition, useSpring, animated } from 'react-spring'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import GitHubIcon from '@material-ui/icons/GitHub';

import jg from '../img/jg.svg';

export default function Landing(props) {

  const textColor = 'white';
  const otherColor = 'rgb(40, 215, 159)';

  if (document.getElementById('navbar')) { 
    document.getElementById('navbar').style.backgroundColor = document.documentElement.clientWidth > 780 ? '#0d121a' : '#273442';
  }

  // react-spring animations for landing page titles. Rotates middle item before exiting
  const transitions = useTransition(props.items, null, {
    from: { opacity: 0.5, height: 25, innerHeight: 25, transform: 'rotateX(0deg)', color: textColor },
    enter: [
      { 
        opacity: 1, 
        height: document.documentElement.clientWidth < 575 ? 125 : 100, 
        innerHeight: document.documentElement.clientWidth < 575 ? 125 : 100, 
        color: otherColor 
      }, 
      { transform: 'rotateX(180deg)' },
      { transform: 'rotateX(0deg)', color: textColor }
    ],
    leave: [
      { opacity: 0, height: 0, innerHeight: 0, ease: '0.5s' },
    ]
  })

  useEffect(() => props.swapOut(), []);

  const logoAnimation = useSpring({
    to: { opacity: 1, filter: 'grayscale(0)' },
    from: { opacity: 0, filter: 'grayscale(100)', transition: '1s' },
    delay: 1900,
  });

  return (
    <div id='landing-container'>
      <div id='heading'>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div 
            className="transitions-item" 
            key={key} 
            style={{...rest, height: item === 'Josh Grant' && document.documentElement.clientWidth < 575 ? 60 : innerHeight }}
            onClick={props.swapOut}
          >
            <animated.div 
              className='heading-item' 
              style={
                { 
                  overflow: 'hidden', 
                  height: item.length < 14 && document.documentElement.clientWidth < 575 ? 60 : innerHeight,
                  textAlign: document.documentElement.clientWidth < 525 ? 'center' : 'start'
                }
              }
            >
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
      <div id='view-container'>
        <NavLink to="/home" className='bttn-stretch bttn-md bttn-success' id='view-bttn'>
          View Portfolio
          <ArrowForwardIcon />
        </NavLink>
        <animated.img src={jg} alt='svg' id='logo1' style={logoAnimation} />
      </div>
      <animated.a id='footer' href='https://github.com/JoshGrant5/portfolio' target="_blank" rel="noopener noreferrer" style={props.fade}>
          View Source Code 
          <GitHubIcon />
        </animated.a>
    </div>
  );
};