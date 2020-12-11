import { useState } from 'react';
import Landing from './Landing';
import Nav from './Nav';

export default function Home(props) {

  const [landing, setLanding] = useState(false);

  window.addEventListener('load', event => {
    console.log('load');
    setLanding(true);
  });

  return (
    <main>
      <Landing />
      <Nav />
    </main>
  );
};