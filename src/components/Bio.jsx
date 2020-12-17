import MediaIcons from './MediaIcons';
import Skills from './Skills';
import '../styles/bio.scss';
import color from '../img/color.png'

export default function Bio(props) {

  return (
    <div id='bio'>

      <div id='bio-img-container'>
        <img src={color} alt='bio-profile-pic' id='bio-profile-pic' />
      </div>

      <section>
        <p id='summary'>Hi, I'm <span>Josh</span>. I build cool things.</p>
        <p>My Skills</p>
        <Skills />
      </section>

      <MediaIcons />
    </div>
  );
};