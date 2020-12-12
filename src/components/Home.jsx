import { useState } from 'react';
import Landing from './Landing';
import Transition from './Transition';
import Bio from './Bio';

export default function Home(props) {

  // State for determining whether to render the Landing, Transition, or Bio component. Default to Landing
  const [page, setPage] = useState('LANDING');

  // window.addEventListener('load', event => {
  //   setsTransition(true);
  // });

  return (
    <main>
      {page === 'LANDING' && <Landing setPage={setPage} />}
      {page === 'TRANSITION' && <Transition  setPage={setPage} />}
      {page === 'BIO' && <Bio />}
    </main>
  );
};