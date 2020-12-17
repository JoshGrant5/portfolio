import MediaIcons from './MediaIcons';
import Skills from './Skills';
import '../styles/home.scss';
import color from '../img/color.png'

export default function Home(props) {

  return (
    <div id='bio'>

      <div id='bio-img-container'>
        <img src={color} alt='bio-profile-pic' id='bio-profile-pic' />
      </div>

      <section>
        <p id='summary'>Hi, I'm <span>Josh</span>. I'm a <span>25</span> year old web developer from Vancouver, BC. I'm a terrible dancer, I sometimes oh... sorry, wrong convo... I'm a proud bootcamp grad,  </p>
        <p>My Skills</p>
        <Skills />
      </section>

      <MediaIcons />
    </div>
  );
};