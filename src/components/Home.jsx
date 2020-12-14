import { useState } from 'react';
import { useSpring, config } from 'react-spring';
import Landing from './Landing';
import Transition from './Transition';
import Bio from './Bio';
import Projects from './Projects';

export default function Home(props) {

  // State for determining whether to render the Landing, Transition, or Bio component. Default to Landing
  const [page, setPage] = useState('LANDING');
  const [view, setView] = useState(false);

  // window.addEventListener('load', event => {
  //   setsTransition(true);
  // });

  const showSideBar = useSpring({
    config: { ...config.stiff },
    from: { 
      width: ''
    },
    to: {
      width: view ? '15vw' : ''
    }
  })

  return (
    <div>
      <main>
        {page === 'LANDING' && <Landing setPage={setPage} showSideBar={showSideBar} setView={setView}/>}
        {page === 'TRANSITION' && <Transition  setPage={setPage} />}
        {page === 'BIO' && <Bio />}
        {page === 'PROJECTS' && <Projects />}
      </main>
      <footer>
        View Source Code @ 
      </footer>
    </div>
  );
};