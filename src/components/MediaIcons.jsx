import { useSpring, animated } from 'react-spring';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

export default function MediaIcons() {

  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0, transition: 'opacity 1s' },
    delay: 500
  });

  return (
    <animated.div className='media-icons' style={fade}>
      <a href='https://github.com/JoshGrant5' target="_blank" rel="noopener noreferrer"> 
        <GitHubIcon /> 
      </a> 
      <a href='https://www.linkedin.com/in/josh-grant-44240a151/' target="_blank" rel="noopener noreferrer"> 
        <LinkedInIcon /> 
      </a> 
      <a href='mailto: joshgg@icloud.com'>
        <EmailIcon /> 
      </a>
  </animated.div>
  );
}