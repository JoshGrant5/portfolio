import MediaIcons from './MediaIcons';
import color from '../img/color.png'

export default function Landing(props) {

  return (
    <div>
      <article id='heading'>
        <span id='name'>Josh Grant</span>
        <span id='title'>Full Stack Developer</span>
      </article>
    
     <button className="bttn-stretch bttn-md bttn-success" id='view-bttn' onClick={() => props.setPage('BIO')}>View Portfolio</button> 

      <div id='img-container'>
        <img src={color} alt='profile-pic' id='profile-pic' />
      </div>

      <MediaIcons />
    </div>
  );
};