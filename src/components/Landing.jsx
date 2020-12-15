import MediaIcons from './MediaIcons';
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
    
     <button class="bttn-stretch bttn-md bttn-success" id='view-bttn' onClick={() => props.setPage('TRANSITION')}>View Portfolio</button> 

      <div id='img-container'>
        <img src={color} alt='profile-pic' id='profile-pic' />
      </div>

      <MediaIcons />
    </div>
  );
};