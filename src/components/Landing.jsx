import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTransition, useSpring, animated } from 'react-spring'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import jg from '../img/jg.svg';

export default function Landing(props) {

  const textColor = '#c9d3c9';
  const otherColor = 'rgb(40, 215, 159)';

  const transitions = useTransition(props.items, null, {
    from: { opacity: 0.5, height: 50, innerHeight: 50, transform: 'rotateX(0deg)', color: textColor },
    enter: [
      { opacity: 1, height: 100, innerHeight: 100, color: otherColor }, { transform: 'rotateX(180deg)' },
      { transform: 'rotateX(0deg)', color: textColor }
    ],
    leave: [
      { opacity: 0, height: 0, innerHeight: 0, ease: '0.5s' },
    ]
  })

  useEffect(() => props.swapOut(), []);

  const logoAnimation = useSpring({
    to: { opacity: 1, filter: 'grayscale(0)' },
    from: { opacity: 0, filter: 'grayscale(100)', transition: '5s' },
    delay: 1900,
  });

  return (
    <div id='landing-container'>
      <div id='heading'>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div className="transitions-item" key={key} style={rest} onClick={props.swapOut}>
            <animated.div className='heading-item' style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
      <div id='test'>
        <NavLink to="/home" className='bttn-stretch bttn-md bttn-success' id='view-bttn'>
          View Portfolio
          <ArrowForwardIcon />
        </NavLink>
        <animated.img src={jg} alt='svg' id='logo1' style={logoAnimation} />
      </div>
    </div>
  );
};