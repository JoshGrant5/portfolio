import { useState } from 'react';
import { useSpring, config } from 'react-spring';
import Landing from './Landing';
import Bio from './Bio';
import Projects from './Projects';

export default function Home(props) {

  const [page, setPage] = useState('LANDING');
  const [view, setView] = useState(false);

  return (
    <div>
      <main>
        {page === 'LANDING' && <Landing setPage={setPage} />}
        {page === 'BIO' && <Bio />}
        {page === 'PROJECTS' && <Projects />}
      </main>
      {/* <footer>
        View Source Code @ 
      </footer> */}
    </div>
  );
};