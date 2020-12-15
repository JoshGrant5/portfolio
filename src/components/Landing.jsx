import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import cropped4 from '../img/cropped4.jpg';
import bw from '../img/bw.png';
import color from '../img/color.png'

export default function Landing(props) {

  return (
    <div>
      {/* <aside id='sidebar'></aside> */}

      <article id='heading'>
        <span id='name'>Josh Grant</span>
        <span id='title'>Full Stack Developer</span>
      </article>
{/* 
      <button class="bttn-stretch bttn-md bttn-success" id='view-bttn' onClick={() => props.setPage('TRANSITION')}>View</button> */}

      <div id='img-container'>
        <img src={color} alt='profile-pic' id='profile-pic' />
      </div>

      <div id='landing-icons'>
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
   
    </div>
  );
};