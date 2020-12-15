import { experience } from '../data/experience.js';
import Education from './Education';
import '../styles/background.scss';

export default function Background(props) {

  const roles = experience.map(role => {

    const responsibilities = role.responsibilities.map(duty => <li>{duty}</li>);

    return (
      <section className='role'>
        <h1>{role.role} <span>{role.dates}</span> </h1>
        <h3>{role.company}</h3>
        <ul>
          {responsibilities}
        </ul>
      </section>
    )
  });

  return (
    // <section>
    //   <div id='background'>
    //     {roles}
    //   </div>
    //   <Education />
    // </section>

  //* Styles inspired by and modified off of design by Jeff Glen https://codepen.io/jeffglenn/pen/KNYoKa/
  
  <section id="timeline">
    
    <div class="tl-item">
      
      <div class="tl-bg" ></div>
      
      <div class="tl-year">
        <p class="f2 heading--sanSerif">2011</p>
      </div>

      <div class="tl-content">
        <h1>Lorem ipsum dolor sit</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
      </div>

    </div>

    <div class="tl-item">
      
      <div class="tl-bg" ></div>
      
      <div class="tl-year">
        <p class="f2 heading--sanSerif">2013</p>
      </div>

      <div class="tl-content">
        <h1 class="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
        <p>Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.</p>
      </div>

    </div>

    <div class="tl-item">
      
      <div class="tl-bg" ></div>
      
      <div class="tl-year">
        <p class="f2 heading--sanSerif">2014</p>
      </div>

      <div class="tl-content">
        <h1 class="f3 text--accent ttu">Phasellus mauris elit</h1>
        <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
      </div>

    </div>

    <div class="tl-item">
      
      <div class="tl-bg" ></div>
      
      <div class="tl-year">
        <p class="f2 heading--sanSerif">2016</p>
      </div>

      <div class="tl-content">
        <h1 class="f3 text--accent ttu">Mauris vitae nunc elem</h1>
        <p>Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor elit.</p>
      </div>

    </div>
  </section>
  )
};