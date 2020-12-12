import { useState } from 'react';
import Landing from './Landing';
import image1 from '../img/image1.jpg';
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
      
      {/* <img src={image1} alt='profile-pic' id='profile-pic' /> */}
   

    </main>
  );
};