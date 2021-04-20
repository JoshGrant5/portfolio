import { animated } from 'react-spring';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

export default function MediaIcons(props) {
  return (
    <animated.div className='media-icons' style={props.fade}>
      <a href='https://github.com/JoshGrant5' target="_blank" rel="noopener noreferrer"> 
        <GitHubIcon /> 
      </a> 
      <a href='https://www.linkedin.com/in/joshggrant/' target="_blank" rel="noopener noreferrer"> 
        <LinkedInIcon /> 
      </a> 
      <a href='mailto: joshgg@icloud.com'>
        <EmailIcon /> 
      </a>
  </animated.div>
  );
}