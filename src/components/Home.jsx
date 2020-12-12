import { useState } from 'react';
import Landing from './Landing';
import cropped4 from '../img/cropped4.jpg';
// import Nav from './Nav';

export default function Home(props) {

  const [landing, setLanding] = useState(false);

  window.addEventListener('load', event => {
    setLanding(true);
  });



  return (
    <main>
      {/* <Landing /> */}
      {/* <Bio /> */}
      
      <section id='sidebar'></section>

      <article id='heading'>
        <h1>Josh Grant</h1>
        <h2>Full Stack Developer</h2>
      </article>

      <img src={cropped4} alt='profile-pic' id='profile-pic' />
   
    </main>
  );
};