import { useState } from 'react';
import Landing from './Landing';
import cropped2 from '../img/cropped2.jpg';
// import Nav from './Nav';

export default function Home(props) {

  const [landing, setLanding] = useState(false);

  window.addEventListener('load', event => {
    setLanding(true);
  });



  return (
    <main>
      <Landing />
      {/* <Bio /> */}
      
      <section id='sidebar'></section>

      <article>
        <p>this is a test</p>
      </article>

      <img src={cropped2} alt='profile-pic' id='profile-pic' />
   
    </main>
  );
};