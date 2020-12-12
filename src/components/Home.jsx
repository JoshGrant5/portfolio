import { useState } from 'react';
import Landing from './Landing';
import Transition from './Transition';

export default function Home(props) {

  // const [transition, setTransition] = useState(false);

  // window.addEventListener('load', event => {
  //   setsTransition(true);
  // });

  return (
    <main>
      <Landing />
      {/* <Transition />  */}
    </main>
  );
};