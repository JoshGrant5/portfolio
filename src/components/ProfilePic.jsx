import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { animated } from 'react-spring';

import me from '../img/me.png'

export default function ProfilePic(props) {

  return (
    <animated.div style={props.fade} id='bio-img-container'>
      <LazyLoadImage effect='blur' width='100%' height='100%' src={me} alt='bio-profile-pic' id='bio-profile-pic' />
    </animated.div>
  )
};