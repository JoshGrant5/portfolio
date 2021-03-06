import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import '../styles/contact.scss';

export default function Contact(props) {
  return (
    <section id='contact-info'>
      <div id='contact-container'>
        <h1>I'd love to connect!</h1>
        <a href='https://github.com/JoshGrant5' target="_blank" rel="noopener noreferrer"> 
          <GitHubIcon /> 
          https://github.com/JoshGrant5
        </a> 
        <a href='https://www.linkedin.com/in/joshggrant/' target="_blank" rel="noopener noreferrer"> 
          <LinkedInIcon /> 
          https://www.linkedin.com/in/joshggrant/
        </a> 
        <a href='mailto: joshgg@icloud.com'>
          <EmailIcon /> 
          joshgg@icloud.com
        </a>
      </div>
    </section>
  );
};