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
        <p className='summary'>I'm a <span>25</span> year-old web developer from <span>Vancouver</span>, BC.</p>
        <p className='summary'>I've been a <span>criminology</span> student, a contract <span>salesman</span>, a <span>lumber trader</span>, and now a <span>code junkie</span>!</p>
        <p className='summary'>I haven't been programming long, but I've finally found what I <span>love</span> to do.</p>
        <p className='summary'>I build <span>awesome things</span> from the ground up. That's pretty damn cool.</p>
        <p className='summary'><span>Thanks for stopping by!</span></p>
        <p className='summary'><span>My Stack</span></p>
        <Skills />
      </section>

      <MediaIcons />
    </div>
  );
};