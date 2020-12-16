import { useState } from 'react';
import Landing from './Landing';
import Bio from './Bio';
import Projects from './Projects';

export default function Home(props) {

  const [page, setPage] = useState('LANDING');

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