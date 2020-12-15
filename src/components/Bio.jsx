import Background from './Background';
import Skills from './Skills';
import '../styles/bio.scss';
import test from '../img/test.png';
import color from '../img/color.png'

export default function Bio(props) {

  return (
    <section id='bio'>
      {/* <div id='backdrop'></div> */}

      <div id='bio-img-container'>
        <img src={color} alt='bio-profile-pic' id='bio-profile-pic' />
      </div>

      <Skills />

      <p id='summary'>I am a full stack developer who relishes the opportunity to use my creativity and intuition to build meaningful things. My degree in criminology cultivated a critical thinking mindset which I bring with me to each problem I tackle. I am diligent in my pursuit of a solution, and my professional background in sales and customer service instilled in me the values of communication and collaboration. When I'm not programming, I can be found listening to podcasts, enjoying local theatre productions, or helping my beer league softball team to victory.</p>
    </section>
  );
};