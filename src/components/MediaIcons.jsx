import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

export default function MediaIcons(props) {
  return (
    <div className='media-icons'>
      <a href='https://github.com/JoshGrant5'> 
        <GitHubIcon /> 
      </a> 
      <a href='https://www.linkedin.com/in/josh-grant-44240a151/'> 
        <LinkedInIcon /> 
      </a> 
      <a href='mailto: joshgg@icloud.com'>
        <EmailIcon /> 
      </a>
  </div>
  );
}