import MediaIcons from './MediaIcons';
import Skills from './Skills';
import '../styles/bio.scss';
import test from '../img/test.png';
import color from '../img/color.png'

export default function Bio(props) {

  return (
    <div id='bio'>
      {/* <div id='backdrop'></div> */}

      <div id='bio-img-container'>
        <img src={color} alt='bio-profile-pic' id='bio-profile-pic' />
      </div>

      <section>
        <p id='summary'>Hi, I'm <span>Josh</span>. I build cool things.</p>

        <div id="feature-project">
          <p>Featured Project</p>
        </div>

        <Skills />
      </section>

      <MediaIcons />
    </div>
  );
};