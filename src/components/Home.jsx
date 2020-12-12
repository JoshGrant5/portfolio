import { useState } from 'react';
// import Landing from './Landing';
import cropped4 from '../img/cropped4.jpg';
// import Nav from './Nav';

export default function Home(props) {

  // const [landing, setLanding] = useState(false);

  // window.addEventListener('load', event => {
  //   setLanding(true);
  // });


  return (
    <main>
      {/* <Landing /> */}
      {/* <Bio /> */}
      
      <section id='sidebar'></section>

      <article id='heading'>
        <span id='name'>Josh Grant</span>
        <span id='title'>Full Stack Developer</span>
      </article>

      <button class="bttn-stretch bttn-md bttn-success">View</button>

      <img src={cropped4} alt='profile-pic' id='profile-pic' />
   
    </main>
  );
};