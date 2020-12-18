import { useSpring, animated } from 'react-spring';

import me from '../img/me.png'

export default function ProfilePic(props) {

  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0, transition: 'opacity 1s' },
    delay: 500
  });

  return (
    <animated.div id='bio-img-container' style={fade}>
      <img src={me} alt='bio-profile-pic' id='bio-profile-pic' />
    </animated.div>
  )
};