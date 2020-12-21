import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


import { useSpring, animated } from 'react-spring';

import me from '../img/me.png'

export default function ProfilePic(props) {

  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0, transition: 'opacity 1.5s' },
  });

  return (
    <animated.div style={fade} id='bio-img-container'>
      <LazyLoadImage effect='blur' width='100%' height='100%' src={me} alt='bio-profile-pic' id='bio-profile-pic' />
    </animated.div>
  )
};