import MediaIcons from './MediaIcons';
import Skills from './Skills';
import '../styles/home.scss';
import me from '../img/me.png'

export default function Home(props) {

  return (
    <div id='bio'>
      
      <div id='bio-img-container'>
        <img src={me} alt='bio-profile-pic' id='bio-profile-pic' />
      </div>

      <section>
        <p className='summary'>Hi, I'm <span>Josh</span>.</p>
        <p className='summary'>I'm a <span>25</span> year old web developer from <span>Vancouver</span>, BC.</p>
        <p className='summary'>I build <span>cool things</span>. I'm a <span>Lighthouse Labs</span> bootcamp grad</p>
        <p className='summary'><span>My Stack</span></p>

        <Skills />
      </section>

      <MediaIcons />
    </div>
  );
};